
import {
    auth, sendEmailVerification,
    createUserWithEmailAndPassword,

} from './firebaseconfig.js';

export const addUser=(email,password)=>createUserWithEmailAndPassword(auth, email, password);


export const emailVerificationHandler = ()=> sendEmailVerification(auth.currentUser);

  
