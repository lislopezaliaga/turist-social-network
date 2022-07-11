import {
  db, doc, setDoc, getDoc,
} from './firebaseconfig.js';
// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId) {
  await setDoc(doc(db, 'users', userId), {
    name,
    email,
  });
  console.log('estoy llamando a createuser');
}
export const obtenerById = (idUser, nameColeccion) => {
  const docRef = doc(db, nameColeccion, idUser);
  const querySnapshot = getDoc(docRef).then((docs) => docs.data());
  return querySnapshot;
};
