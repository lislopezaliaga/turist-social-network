// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
/**Inicia firebase****/
export const app = initializeApp(firebaseConfig);
/**Inicia firebase****/
const db=getFirestore();
export const auth = getAuth();


