import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import { getDocs, collection, query, orderBy } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';
import { app, db, auth } from "./firebaseConfig";

const AdvancedLesson = () => {
  const [AdvancedData, setAdvancedData] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const AdvancedCollection = collection(db, "advanced");
      const AdvancedQuery = query(AdvancedCollection, orderBy("no", "asc"));
      const querySnapshot = await getDocs(AdvancedQuery);
      const AdvancedLessons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
        name: doc.data().name,
        desc: doc.data().desc,
        areas: doc.data().areas,
        no: doc.data().no,
      }));
      setAdvancedData(AdvancedLessons);
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

  const handleLogoPress = () => {
    // Logo resmine tıklandığında yapılacak işlemler buraya gelecek
    // Örneğin, Firebase'den alınan URL'ye gitmek gibi
  };

  const handleVideoPress = (url) => {
    // YouTube yerine uygulamanın içinde açılmasını sağlayacak kod buraya gelecek
    // Örneğin, React Native Video bileşenini kullanabilirsiniz.
    // Video bileşeni ile ilgili dokümantasyona buradan ulaşabilirsiniz: https://github.com/react-native-video/react-native-video
  };

  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleLogoPress} style={styles.profileIconContainer}>
          <Image source={require('./images/logo.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {AdvancedData.map((lessons) => (
          <TouchableOpacity 
            key={lessons.id} 
            style={styles.lessonContainer} 
            onPress={() => handleVideoPress(lessons.url)}
          >
            <View style={styles.videoContainer}>
              <Video
                source={{ uri: lessons.url }}
                style={{ flex: 1 }}
                resizeMode="contain"
                controls={true}
              />
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
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginHorizontal: 20,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  desc: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },
  areas: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#ffffff',
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

export default AdvancedLesson;