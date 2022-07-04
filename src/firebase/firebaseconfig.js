// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    setDoc,
    doc
  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUpEXw7ZlfvMdeZ3xROQMIknx6Db6qeT4",
  authDomain: "touristsocial-network.firebaseapp.com",
  projectId: "touristsocial-network",
  storageBucket: "touristsocial-network.appspot.com",
  messagingSenderId: "522769666950",
  appId: "1:522769666950:web:a068223c05d70a7089d207",
  measurementId: "G-Y4JZWZE5YE"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference (conexion) to the service (db)
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  setDoc,
  doc,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword
} 