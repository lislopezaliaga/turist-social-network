import {
  auth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from './firebaseconfig.js';

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const emailVerificationHandler = () => sendEmailVerification(auth.currentUser);

export const loginEmailPas = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const estadoAuthUsuario = (callback) => onAuthStateChanged(auth, callback);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const userid = () => auth.currentUser;
