import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import { getDocs, collection, query, orderBy } from "firebase/firestore"; 
import { WebView } from 'react-native-webview';
import { app, db, auth } from "../screens/firebaseConfig";

const BeginnerLesson = () => {
  const [beginnerData, setBeginnerData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const beginnerCollection = collection(db, "beginner");
      const beginnerQuery = query(beginnerCollection, orderBy("no", "asc"));
      const querySnapshot = await getDocs(beginnerQuery);
      const beginnerLessons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
        name: doc.data().name,
        desc: doc.data().desc,
        areas: doc.data().areas,
        no: doc.data().no,
      }));
      setBeginnerData(beginnerLessons);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      setError(error);
      if (error.code === 'auth/network-request-failed') {
        Alert.alert("Ağ Hatası", "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
      } else {
        Alert.alert("Hata", "Veri çekme sırasında bir hata oluştu.");
      }
    }
  };

  const handleVideoPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.profileIconContainer}>
          <Image source={require('./images/logo.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {beginnerData.map((lessons) => (
          <TouchableOpacity key={lessons.id} style={styles.lessonContainer} onPress={() => handleVideoPress(lessons.url)}>
            <View style={styles.videoInfoContainer}>
              <View style={styles.videoContainer}>
                <WebView
                  style={{
                    flex: 1,
                    width: '100%',
                    aspectRatio: 16 / 9,
                  }}
                  source={{ html: getEmbeddedVideoHtml(lessons.url) }}
                  javaScriptEnabled={true}
                  scrollEnabled={false}
                  originWhitelist={['*']}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{lessons.name}</Text>
                <Text style={styles.desc}>{lessons.desc}</Text>
                <Text style={styles.areas}>{lessons.areas}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

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

const getYoutubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  scrollContainer: {
    paddingTop: 20, 
    paddingBottom: 20, 
  },
  lessonContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: "center",
  },
  videoInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  videoContainer: {
    width: '40%',
    aspectRatio: 16 / 9,
    marginRight: 10,
  },
  infoContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#334d5c',
  },
  desc: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ce8282',
  },
  areas: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f6870',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
  },
});

export default BeginnerLesson;
