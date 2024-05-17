// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//const collection = firestore().collection("videos");

export { app , db , auth};
