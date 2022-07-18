import {
  db, doc,
  setDoc, getDoc, addDoc, collection,
} from './firebaseconfig.js';

// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId) {
  await setDoc(doc(db, 'users', userId), {
    name: name,
    email: email,
    description: 'Soy amante de los viajes',
    country: 'Global',
    interest: 'Nuevas aventuras',
    profilePhoto: '../img/viajeros.png',
  });
  console.log('estoy llamando a createuser');
}

// Obtener la data de cada user guardado en firestore
export const getUserById = (userId, colection) => {
  const docRef = doc(db, colection, userId);
  const docSnap = getDoc(docRef).then((userDoc) => userDoc.data());
  return docSnap;
};

// Subir publicaciones del usuario a firestore
export const loadPublications = (creator, contentPost, urlImg) => {
  const addPost = addDoc(collection(db, 'posts'), {
    userId: creator,
    publication: contentPost,
    imgPost: urlImg,
  });
  return addPost;
};
