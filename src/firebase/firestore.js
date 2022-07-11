import { db, doc, setDoc, getDoc } from './firebaseconfig.js';

// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId) {
  await setDoc(doc(db, 'users', userId), {
    name,
    email,
  });
  console.log('estoy llamando a createuser');
}

// Obtener la data de cada user guardado en firestore
export const getUserById = (userId, colection)=> {
  const docRef = doc(db, colection, userId);
  const docSnap = getDoc(docRef).then(userDoc => userDoc.data());
  return docSnap;
}
