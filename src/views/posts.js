import { localStorageCall } from '../componentes/sessionStorage.js';
import {
  actualizarPosts, getUserById, obtenerUserById, updateLikes,
} from '../firebase/firestore.js';

export const postView = () => {
  actualizarPosts((querySnapshoot) => {
    /** Seleccionamos al container para añadir el post */
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';
    /** Creamos un div post content */
    const postContainerGeneral = document.createElement('div');
    postContainerGeneral.setAttribute('class', 'postsContent');
    postContainerGeneral.innerHTML = '';

    querySnapshoot.forEach((element) => {
      const dato = element.data();

      const idPost = element.id;

      const likesCount = dato.likes.length;

      const postContent = `
      <div class="postindividual" id='${idPost}'>
        <div class="postNameImage">
          <img class="iconpost" src="${dato.photoCreator}" width="50px">
          <div>
            <h3 class="namepost">${dato.nameCreator}</h3>
            <span class="datepost"> ${dato.dateTime}</span>
            <span class="datepost"> ${dato.privacy}</span>
          </div>
          <p class="namepost">esta en${dato.country} </p>
        </div>
        <div class="postText">
          <p class="texto"><i class="fa fa-quote-left"></i> ${dato.publication} <i class="fa fa-quote-right"></i></p>
        </div>
        <div class="imgpost">
        <img class="imgposted" src='${dato.imgPost}'>
        </div>
        <div class="postReaction">
          <i class="fa fa-heart like" name="${idPost}"></i>
          <h3> ${likesCount}</h3>
        </div>
      </div>
            `;
      postContainerGeneral.innerHTML += postContent;
      postContainer.appendChild(postContainerGeneral);
    });
    const buttonLikes = document.querySelectorAll('.like');
    buttonLikes.forEach((likeIcon) => {
      likeIcon.addEventListener('click', likesHandler);
    });
  });
};
async function likesHandler(e) {
  const btnLike = e.target;
  console.log('lihkdsbslj');
  const idUser = localStorageCall().id;
  console.log(idUser);

  const idPost = btnLike.getAttribute('name');
  console.log(idPost);

  const dataPost = await getUserById(idPost, 'posts');

  if (await dataPost.likes.includes(idUser)) {
    // esto es para quitar el like por usuario
    await updateLikes(idPost, await dataPost.likes.filter((item) => item !== idUser));
    console.log(dataPost);
    btnLike.style.fill = '#8F7D7D';
    console.log('like dado');
  } else {
    // esto es para agregar like por usuario
    await updateLikes(idPost, [...dataPost.likes, idUser]);
    console.log(dataPost);

    // console.log('like recien dado');
  }
  console.log(await obtenerUserById(idPost, 'posts'));
}
