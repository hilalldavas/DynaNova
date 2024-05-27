import { View, Text, StyleSheet, TextInput,Pressable, TouchableOpacity, Image,ImageBackground } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from "expo-checkbox"
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {db , app , auth} from "../screens/firebaseConfig";

const Stack = createNativeStackNavigator();

/* const firebaseConfig = {
  apiKey: "AIzaSyBIhgXy4y_QBcc-uFa1Cy4D3pcMiroYQdw",
  authDomain: "dynanova-bdb6b.firebaseapp.com",
  projectId: "dynanova-bdb6b",
  storageBucket: "dynanova-bdb6b.appspot.com",
  messagingSenderId: "116378454446",
  appId: "1:116378454446:web:ab2fce338cbbdbdd89a03f",
  measurementId: "G-084HGS5CV9"
}; */

/* const app = initializeApp(firebaseConfig);
const db = getFirestore(app); */

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthentication = async () => {
    try {
      //const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigation.navigate('Home'); // Giriş başarılı olduğunda Home sayfasına yönlendir
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };


  return (
    <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Image
        source={require('./images/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail Giriniz.."
        placeholderTextColor='#ebdbdb'rg
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre Giriniz.."
        placeholderTextColor='#ebdbdb'
        secureTextEntry
      />
      <Pressable onPress={handleAuthentication} style={styles.button}>
  <Text style={styles.buttonText}>Giriş Yap</Text>
</Pressable>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(51,77,92,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    width: 330,
    height: 50,
    backgroundColor:'rgba(51, 77, 92, 0.9)',
    color: '#ebdbdb',
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 15,
    borderWidth: 2, // Çerçeve kalınlığı
    borderColor: '#ebdbdb', // Çerçeve rengi
    borderRadius:25,
  },button: {
    marginTop: 15,
    backgroundColor: 'rgba(51, 77, 92, 0.9)',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, // Çerçeve kalınlığı
    borderColor: '#ebdbdb', // Çerçeve rengi
    borderRadius:25,
  },
  buttonText: {
    color: '#ebdbdb',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
});

export default Login;