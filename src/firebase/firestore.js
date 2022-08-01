import { dateTime } from '../views/timeago.js';
import {
  db, doc,
  setDoc, getDoc, addDoc, collection, serverTimestamp,
  onSnapshot, orderBy, query, updateDoc, deleteDoc, where,
} from './firebaseconfig.js';

// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId) {
  await setDoc(doc(db, 'users', userId), {
    name,
    email,
    description: 'Soy amante de los viajes',
    country: 'Global',
    interest: 'Nuevas aventuras',
    profilePhoto: '../img/user.png',
  });
  console.log('estoy llamando a createuser');
}

// Obtener la data de cada user guardado en firestore
export const getUserById = (userId, colection) => {
  const docRef = doc(db, colection, userId);
  const docSnap = getDoc(docRef).then((userDoc) => userDoc.data());
  return docSnap;
};

export const obtenerUserById = (userId, colection) => {
  const docRef = doc(db, colection, userId);
  const docSnap = getDoc(docRef).then((userDoc) => userDoc.data());
  return docSnap;
};

// Subir publicaciones del usuario a firestore
export const loadPublications = (
  creator,
  contentPost,
  urlImg,
  nameCreator,
  photoCreator,
  country,
  privacy,
) => {
  const addPost = addDoc(collection(db, 'posts'), {
    userId: creator,
    publication: contentPost,
    imgPost: urlImg,
    timestamp: serverTimestamp(),
    nameCreator,
    photoCreator,
    dateTime: dateTime(),
    country,
    privacy,
    likes: [],
  });
  return addPost;
};

// export const obtenerPosts = () => onSnapshot(collection(db, 'posts'),(callback));

export const actualizarPosts = async (callback) => {
  await onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), where('privacy', '==', '🌎'), (callback));
};

export const updateLikes = async (idPost, arrayLikes) => {
  await updateDoc(doc(db, 'posts', idPost), {
    likes: arrayLikes,
  });
};

// Eliminar post
export const deletePost = (idPost) => {
  deleteDoc(doc(db, 'posts', idPost));
};

// Editanto post
export const updatePost = (idPost, contentPost, urlImg) => {
  updateDoc(doc(db, 'posts', idPost), {
    publication: contentPost,
    imgPost: urlImg,
  });
};
