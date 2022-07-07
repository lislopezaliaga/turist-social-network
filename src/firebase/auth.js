
import {
    auth, sendEmailVerification,
    createUserWithEmailAndPassword,

} from './firebaseconfig.js';

export const addUser=async(email,password)=> {
  return await createUserWithEmailAndPassword(auth, email, password) 
}

export const emailVerificationHandler = async()=> {
   return await sendEmailVerification(auth.currentUser)   
}

  
