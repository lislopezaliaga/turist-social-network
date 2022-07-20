import { dateTime } from '../views/timeago.js';
import {
  db, doc,
  setDoc, getDoc, addDoc, collection, serverTimestamp,
  onSnapshot, orderBy, query, updateDoc,
} from './firebaseconfig.js';

// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId) {
  await setDoc(doc(db, 'users', userId), {
    name,
    email,
    description: 'Soy amante de los viajes',
    country: 'Global',
    interest: 'Nuevas aventuras',
    profilePhoto: '../img/usuario.png',
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
export const loadPublications = (creator, contentPost, urlImg, nameCreator, photoCreator) => {
  const addPost = addDoc(collection(db, 'posts'), {
    userId: creator,
    publication: contentPost,
    imgPost: urlImg,
    timestamp: serverTimestamp(),
    nameCreator,
    photoCreator,
    dateTime: dateTime(),
    likes: [],
  });
  return addPost;
};

// export const obtenerPosts = () => onSnapshot(collection(db, 'posts'),(callback));

export const actualizarPosts = async (callback) => {
  await onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (callback));
};

export const updateLikes = async (idPost, arrayLikes) => {
  await updateDoc(doc(db, 'posts', idPost), {
    likes: arrayLikes,
  });
};

// Para actualizar arreglo de likes
// export const subirLikes = async (idPost, dataLikes) => {
//   const docId = doc(db, 'posts', idPost);
//   await updateDoc(docId, {
//     likes: dataLikes,
//   });
// };
