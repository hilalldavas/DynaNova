import { View, Text,StyleSheet, TextInput, Pressable, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIhgXy4y_QBcc-uFa1Cy4D3pcMiroYQdw",
  authDomain: "dynanova-bdb6b.firebaseapp.com",
  databaseURL: "https://dynanova-bdb6b-default-rtdb.firebaseio.com",
  projectId: "dynanova-bdb6b",
  storageBucket: "dynanova-bdb6b.appspot.com",
  messagingSenderId: "116378454446",
  appId: "1:116378454446:web:ab2fce338cbbdbdd89a03f",
  measurementId: "G-084HGS5CV9"
};

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text>Profil Sayfası</Text>
      <Text>{auth.currentUser.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profil;