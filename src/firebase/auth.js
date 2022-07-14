import {
  auth, sendEmailVerification, createUserWithEmailAndPassword,
} from './firebaseconfig.js';

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const emailVerificationHandler = () => sendEmailVerification(auth.currentUser);

// export const idUser = async () => {
//   const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }
// };
