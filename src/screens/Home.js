import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { initializeApp } from 'firebase/app';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.username}>Merhaba!</Text>
        <Image source={require('./images/progress.png')} style={styles.userIcon} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.profileIconContainer}>
        <Image source={require('./images/logo.png')} style={styles.profileIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('KategoriYoga')}>
        <Image source={require('./images/yoga.png')} style={styles.activityIcon} />
        <Text style={styles.activityText}>Yoga Dersleri</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('KategoriMeditation')}>
        <Image source={require('./images/lotus.png')} style={styles.activityIcon} />
        <Text style={styles.activityText}>Meditasyon Dersleri</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    top:150,
    left:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  userIcon: {
    width: 150,
    height: 90,
    right:220,
    marginTop:105,
  },
  username: {
    fontSize: 50,
    fontWeight: 'bold',
    marginRight: 5,
    color:'#334d5c',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 100,
    right: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    top: 175,
    backgroundColor:'rgba(51, 77, 92, 0.9)',
    borderWidth: 2, // Çerçeve kalınlığı
    borderColor: '#ebdbdb', // Çerçeve rengi
    borderRadius:25, // Köşe yuvarlaklığı
  },
  activityIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#ebdbdb',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
