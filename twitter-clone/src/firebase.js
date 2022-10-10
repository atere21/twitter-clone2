import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKHGRFl1uaOBF5AYr3LaHJdb5D9RuiL0k",
  authDomain: "twitter-clone-4836e.firebaseapp.com",
  projectId: "twitter-clone-4836e",
  storageBucket: "twitter-clone-4836e.appspot.com",
  messagingSenderId: "351301944553",
  appId: "1:351301944553:web:a5b9b7183a0002ab789c78",
  measurementId: "G-N6FQHMY819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = firebase.inistializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;