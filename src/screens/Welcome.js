import React from 'react';
import { View, Text, StyleSheet, Pressable, Image,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Image
        source={require('./images/logo.png')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 150,
        }}
      />
      <Text style={styles.baslik}>DynaNova</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Hazır Mısın?</Text>
      </Pressable>
      <Text style={styles.hesap}>Hesabın Yok mu?</Text>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.kayıt}>Kayıt Ol</Text>
      </Pressable>
    </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  baslik: {
    marginTop: 40,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffabaa',
  },
  button: {
    marginTop: 40,
    backgroundColor: 'rgba(51, 77, 92, 0.9)',
    width: 230,
    height: 50,
    borderWidth: 2, // Çerçeve kalınlığı
    borderColor: '#ebdbdb', // Çerçeve rengi
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ebdbdb',
    fontWeight: 'bold',
    fontSize: 20,
  },
  hesap: {
    marginTop: 10,
    fontSize: 17,
    color: '#334d5c',
  },
  kayıt: {
    marginTop: 10,
    fontSize: 17,
    color: '#334d5c',
    fontWeight: 'bold',
  },
});

export default Welcome;
