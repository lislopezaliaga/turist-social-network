
import {
    db,
    doc,
    setDoc,
    
  } from './firebaseconfig.js';
  
  //Añadir nuevo usuario (Document) a users (colección)
  export   function createNewUser (name, email, userId){
   setDoc(doc(db, 'users', userId), {
        name,
        email
    });
    console.log('estoy llamando a createuser');
}