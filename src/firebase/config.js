// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore, collection,addDoc} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
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
const app = initializeApp(firebaseConfig);
const db=getFirestore();

export const saveTask=(nombre,correo,contraseña)=>{
 addDoc(collection(db, 'tasks'),{nombre:nombre,correo:correo,contraseña:contraseña})
}
