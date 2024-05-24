import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { initializeApp } from 'firebase/app';

const KategoriMeditation = ({ navigation }) => {
  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.profileIconContainer}>
        <Image source={require('./images/logo.png')} style={styles.profileIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('BeginnerLesson')}>
        <Image source={require('./images/beginer.png')} style={styles.activityIcon} />
        <Text style={styles.activityText}>Başlangıç Seviye Dersleri</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('IntermadiateLesson')}>
  <Image source={require('./images/intermediate.png')} style={styles.activityIcon} />
  <Text style={styles.activityText}>Orta Seviye Dersleri</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('AdvancedLesson')}>
        <Image source={require('./images/advanced.png')} style={styles.activityIcon} />
        <Text style={styles.activityText}>İleri Seviye Dersleri</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('KidsLesson')}>
        <Image source={require('./images/kids.png')} style={styles.activityIcon} />
        <Text style={styles.activityText}>Çocuklar için Yoga Dersleri</Text>
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
    backgroundColor:'#DD8b97a0',
    borderWidth: 2, 
    borderColor: '#8b97a0', 
    borderRadius:25, 
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

export default KategoriMeditation;
