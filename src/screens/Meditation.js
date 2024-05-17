import React, { useState, useEffect } from "react";
import { View, Text,StyleSheet, TextInput, Pressable, Image, Button , TouchableOpacity} from "react-native";
import {app,db,auth} from "../screens/firebaseConfig";
import { doc, getDocs, setDoc, collection } from "firebase/firestore"; 

const Profil = () => {
  const [beginnerData, setBeginnerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "beginner"));
      const beginnerLessons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
        dersNo: doc.data().dersNo,
        Desc: doc.data().Desc,
      }));
      setBeginnerData(beginnerLessons);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Profil Sayfası</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>Kullanıcı Bilgileri:</Text>
      {beginnerData.map((lessons) => (
        <View key={lessons.id} style={styles.lessonContainer}>
          <Text>No: {lessons.dersNo}</Text>
          <Text>Açıklama: {lessons.Desc}</Text>
          <Text>Link: {lessons.url}</Text>
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonContainer: {
    marginVertical: 10,
  },
});

export default Profil;