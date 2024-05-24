import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Dimensions } from "react-native";
import { app, db, auth } from "../screens/firebaseConfig";
import { getDocs, collection } from "firebase/firestore"; 
import { WebView } from 'react-native-webview';

const Profil = () => {
  const [beginnerData, setBeginnerData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "beginner"));
      const beginnerLessons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
        dersNo: doc.data().dersNo,
        Desc: doc.data().Desc,
      }));
      setBeginnerData(beginnerLessons);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      if (error.code === 'auth/network-request-failed') {
        Alert.alert("Network Error", "Please check your internet connection and try again.");
      } else {
        Alert.alert("Error", "An error occurred while fetching data.");
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profil Sayfası</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>Kullanıcı Bilgileri:</Text>
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      {beginnerData.map((lessons) => (
        <View key={lessons.id} style={styles.lessonContainer}>
          <Text>No: {lessons.dersNo}</Text>
          <Text>Açıklama: {lessons.Desc}</Text>
          <WebView
            style={styles.video}
            source={{ html: getEmbeddedVideoHtml(lessons.url) }}
            javaScriptEnabled={true}
            scrollEnabled={false}
            originWhitelist={['*']}
          />
        </View>
      ))}
    </ScrollView>
  );
};

// Helper function: Extract video ID and return the HTML to embed it with minimal UI
const getEmbeddedVideoHtml = (url) => {
  const videoId = getYoutubeVideoId(url);
  if (videoId) {
    return `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=0&disablekb=1&iv_load_policy=3&playsinline=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </body>
      </html>
    `;
  }
  return null;
};

// Helper function: Extract video ID from YouTube URL
const getYoutubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  lessonContainer: {
    marginVertical: 10,
    width: '100%',
    alignItems: "center",
  },
  video: {
    width: Dimensions.get('window').width * 0.9, // 90% of the screen width
    height: Dimensions.get('window').width * 0.9 * (9 / 16), // 16:9 aspect ratio
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default Profil;
