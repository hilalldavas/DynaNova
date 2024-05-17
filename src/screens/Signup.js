import { View, Text, StyleSheet, TextInput, Pressable, Image, Button, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import Checkbox from "expo-checkbox"
const Signup = ({ email, setEmail, password, setPassword, handleAuthentication }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/logo.png')}
        style={{
          width: 230,
          height: 230,
          borderRadius: 20,
          alignSelf: 'center',
          left: 0,
          top: 100,
        }}
      />
      <Text style={styles.metin}>Aramıza Hoş Geldin!</Text>

      <TextInput
        style={[styles.input, { top: 150 },{color:'#ebdbdb'}]}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail Giriniz.."
        placeholderTextColor="#ebdbdb"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { top: 180 },{color:'#ebdbdb'}]}
        value={password}
        onChangeText={setPassword}
        placeholder="Şifre Giriniz.."
        placeholderTextColor="#ebdbdb"
        secureTextEntry
      />

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 6,
          top: 190,
          left: 30
        }}>
        <Checkbox
          style={{ marginRight: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? 'rgba(253, 166, 50, 0.7)' : undefined}
        />
        <Text style={styles.yazi}>Şartları ve koşulları kabul ediyorum.</Text>
      </View>

      <Pressable
        onPress={() => handleAuthentication(email, password)} // handleAuthentication fonksiyonunu doğru şekilde çağır
      >
        <Text style={styles.kayıt}>Hesap Oluştur</Text>
      </Pressable>
    </View>
  )
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async (email, password) => {
    try {
      if (user) {
        console.log("başarıyla giriş yapıldı");
        await signOut(auth);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('başarıyla yeni kullanıcı oluşturuldu');
      }
    } catch (error) {
      console.error('Authentication error: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Signup
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleAuthentication={handleAuthentication}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51,77,92,255)'
  },
  hesap: {
    textAlign: 'left',
    left: '3%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    top: 100,
  },
  metin: {
    textAlign: 'left',
    left: '25%',
    color: '#ebdbdb',
    fontSize: 20,
    top: 120,
  },
  input: {
    color: '#ebdbdb',
    width: 330,
    height: 50,
    backgroundColor: 'rgba(206,130,130,255)',
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 20,
  },
  yazi: {
    color: '#ebdbdb',
    fontSize: 14
  },
  kayıt: {
    top: 200,
    width: 230,
    height: 50,
    backgroundColor: 'rgba(206,130,130,255)',
    color: '#ebdbdb',
    borderRadius: 50,
    borderWidth: 0,
    justifyContent: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 10
  }

})

export default App;
