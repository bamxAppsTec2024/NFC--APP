import { initializeApp } from 'firebase/app';
import {initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRegistry } from 'react-native';
import App from './App';
import { getFirestore } from 'firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import "firebase/firestore"

AppRegistry.registerComponent('main', () => App);

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCJDa8CZRHiL9fnPEyiqcL8FhztVk8WsZs",
    authDomain: "tecapps2024.firebaseapp.com",
    projectId: "tecapps2024",
    storageBucket: "tecapps2024.appspot.com",
    messagingSenderId: "875183279926",
    appId: "1:875183279926:web:79fa978882407df2282d97"
};


// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore();
 