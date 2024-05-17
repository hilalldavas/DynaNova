import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Welcome = ({ navigation }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#334d5c',
    alignItems: 'center',
  },
  baslik: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ebdbdb',
  },
  button: {
    marginTop: 50,
    backgroundColor: 'rgba(206,130,130,255)',
    width: 230,
    height: 50,
    borderRadius: 50,
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
    color: '#ebdbdb',
  },
  kayıt: {
    marginTop: 10,
    fontSize: 17,
    color: '#ebdbdb',
    fontWeight: 'bold',
  },
});

export default Welcome;
