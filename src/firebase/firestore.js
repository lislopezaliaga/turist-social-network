
import {
    db,
    doc,
    setDoc,
    
  } from './firebaseconfig.js';
  
  //Añadir nuevo usuario (Document) a users (colección)
  export  async function createNewUser (name, email, userId){
    await setDoc(doc(db, 'users', userId), {
        name,
        email
    });
    console.log('estoy llamando a createuser');
}