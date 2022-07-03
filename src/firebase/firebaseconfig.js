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
    apiKey: "AIzaSyCDvIQyicrDUXxcKQiXQupVkTBN1Pv60fg",
    authDomain: "apptodo-quick.firebaseapp.com",
    projectId: "apptodo-quick",
    storageBucket: "apptodo-quick.appspot.com",
    messagingSenderId: "171937324059",
    appId: "1:171937324059:web:8a410424cefb81ef87acbe",
    measurementId: "G-CFWN5WCG6D"
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