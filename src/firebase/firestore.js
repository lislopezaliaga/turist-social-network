import { dateTime } from '../views/timeago.js';
import {
  db, doc,
  setDoc, getDoc, addDoc, collection, serverTimestamp,
  onSnapshot, orderBy, query, updateDoc, deleteDoc, where, getDocs
} from './firebaseconfig.js';

// Añadir nuevo usuario (Document) a users (colección)
export async function createNewUser(name, email, userId, profilePhoto) {
  await setDoc(doc(db, 'users', userId), {
    name,
    email,
    description: 'Soy amante de los viajes',
    country: 'Global',
    interest: 'Nuevas aventuras',
    profilePhoto,
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
  await onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (callback));
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

// Editanto user
export const updateUser = (idUser, name, description, country, interest) => {
  updateDoc(doc(db, 'users', idUser), {
    name,
    description,
    country,
    interest,
  });
};

// Obtener la data de cada user guardado en firestore
export const getPosts = async (idUser) => {
  const docSnap = query(collection(db, 'posts'), where('userId', '==', `${idUser}`));
  const querySnapshot = await getDocs(docSnap);
  return querySnapshot;
};

// Editanto post
export const updateCreatorName = (idPost, name) => {
  updateDoc(doc(db, 'posts', idPost), {
    nameCreator: name,
  });
};
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, ' => ', doc.data());
// });
// const museums = query(collectionGroup(db, 'landmarks'), where('type', '==', 'museum'));
// const querySnapshot = await getDocs(museums);

// .collection("posts")
// .where("userId", "==", "ipb0GzB5x2dAA4cfQRiTAUlj9jD3")
// const citiesRef = collection(db, "cities");

// // Create a query against the collection.
// const q = query(citiesRef, where("state", "==", "CA"));

// export const getUserById = (userId, colection) => {
//   const docRef = doc(db, colection, userId);
//   const docSnap = getDoc(docRef).then((userDoc) => userDoc.data());
//   return docSnap;
// };

// const querySnapshot = await getDocs(collection(db, "cities"));

// export const dataUser = (userId) => {
//  return  onSnapshot(doc(db, 'users', userId), (datos) => {
//     console.log(datos.data());
//     return datos.data();
//   });

// };
// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//   console.log("Current data: ", doc.data());
// });
// export const getUserById = (userId, colection) => {
//   const docRef = doc(db, colection, userId);
//   const docSnap = getDoc(docRef).then((userDoc) => userDoc.data());
//   return docSnap;
// };
