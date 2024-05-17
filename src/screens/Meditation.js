import { View, Text,StyleSheet, TextInput, Pressable, Image, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {app,db,auth, } from "../screens/firebaseConfig";


const Profil = () => {
  const videos = collection
  return (
    <View style={styles.container}>
      <Text>Profil Sayfası</Text>
      <Text>{auth.currentUser.email}</Text>
      <Text>{videos}</Text>
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