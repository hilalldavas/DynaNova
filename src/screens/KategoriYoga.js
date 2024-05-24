import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const KategoriYoga = ({ navigation }) => {
  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.profileIconContainer}>
        <Image source={require('./images/logo.png')} style={styles.profileIcon} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('BeginnerLesson')}>
            <Image source={require('./images/beginer.png')} style={styles.activityIcon} />
            <Text style={styles.activityText}>Başlangıç Seviye Dersleri</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('IntermadiateLesson')}>
            <Image source={require('./images/intermediate.png')} style={styles.activityIcon} />
            <Text style={styles.activityText}>Orta Seviye Dersleri</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('AdvancedLesson')}>
            <Image source={require('./images/advanced.png')} style={styles.activityIcon} />
            <Text style={styles.activityText}>İleri Seviye Dersleri</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('KidsLesson')}>
            <Image source={require('./images/kidss.png')} style={styles.activityIcon} />
            <Text style={styles.activityText}>Çocuklar için Yoga Dersleri</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activity: {
    width: '48%',
    top:75,
    margin:5,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(51, 77, 92, 0.9)',
    borderWidth: 2, 
    borderColor: '#ebdbdb',
    borderRadius: 25,
  },
  activityIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ebdbdb',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileIcon: {
    top:150,
    right:10,
    width: 80,
    height: 80,
  },
});

export default KategoriYoga;
