import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert,ImageBackground,} from 'react-native';
import Checkbox from 'expo-checkbox';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from "../screens/firebaseConfig";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = async () => {
    // E-posta formatını kontrol etmek için regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      Alert.alert('Geçersiz E-posta', 'Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Şifre Gerekli', 'Lütfen şifrenizi giriniz.');
      return;
    }

    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Başarılı kayıt işlemi
      console.log('Yeni kullanıcı oluşturuldu:', userCredential.user.uid);
      Alert.alert('Başarılı', 'Hesap başarıyla oluşturuldu.');
    } catch (error) {
      console.error('Kullanıcı oluşturma hatası:', error.message);
      Alert.alert('Hata', 'Hesap oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
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
          placeholderTextColor='#ebdbdb'
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 ,marginRight:50,}}>
        <Checkbox
          style={{ marginRight: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? 'rgba(51, 77, 92, 0.9)' : undefined}
        />
        <Text style={styles.yazi}>Şartları ve koşulları kabul ediyorum.</Text>
      </View>
        <Pressable onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: 'rgba(51, 77, 92, 0.9)',
    color: '#ebdbdb',
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ebdbdb',
    borderRadius: 25,
  },
  button: {
    marginTop: 15,
    backgroundColor: 'rgba(51, 77, 92, 0.9)',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ebdbdb',
    borderRadius: 25,
  },
  buttonText: {
    color: '#ebdbdb',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Register;
