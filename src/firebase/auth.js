import {
  auth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from './firebaseconfig.js';

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const emailVerificationHandler = () => sendEmailVerification(auth.currentUser);

export const estadoAuthUsuario = (callback) => onAuthStateChanged(auth, callback);

const provider = new GoogleAuthProvider();

export const signInGoogle = () => signInWithPopup(auth, provider);
