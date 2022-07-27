import { localStorageCall } from '../componentes/sessionStorage.js';
import {
  actualizarPosts,
  getUserById,
  updateLikes,
  deletePost,
  updatePost,
} from '../firebase/firestore.js';

function templatePostContent(
  idPost,
  photo,
  name,
  date,
  privacy,
  country,
  userId,
  content,
  imgPost,
  likesCount,
) {
  const postContent = `
  <div class="postindividual" id='${idPost}'>
    <div class="postNameImage">
      <img class="iconpost" src="${photo}" width="50px">
      <div class="divtitulopost">
        <h3 class="namepost">${name}  </h3>
        <p class="country">esta en ${country} </p>
        <span class="datepost"> ${date}</span>
        <span class="datepost"> ${privacy}</span>
      </div>
      <div class = "editPostIcon" id = ${userId} data-id = "${idPost}"></div>
    </div>
    <div class="postText">
    <p class="texto" contenteditable = "false"> ${content} </p>
    </div>
    <div class="imgpost">
    <img class="imgposted" src='${imgPost}'>
    </div>
    <div class="postReaction">
      <i class="fa fa-heart like" name="${idPost}"></i>
      <h3> ${likesCount}</h3>
    </div>
  </div>`;

  return postContent;
}

function templateEditPost(idCurrentPost) {
  const iconOptionsContent = `
    <span class="icon-edit">
      <i class="fa fa-ellipsis-v"></i>
    </span>
    <div class="tooltip hide" style = "position: absolute">
      <span id = "update-post" data-id = ${idCurrentPost}>Editar</span>
      <span id = "delete-post" data-id = ${idCurrentPost}>Eliminar</span>
    </div> 
  `;
  return iconOptionsContent;
}

const updatePostClick = (divOptions, postContainer) => {
  const updateOpt = divOptions.querySelector('#update-post');
  updateOpt.addEventListener('click', (e) => {
    const idPostBtn = e.target.dataset.id;

    const postindividual = postContainer.querySelectorAll('.postindividual');
    console.log(postindividual);

    postindividual.forEach((post) => {
      if (idPostBtn === post.id) {
        const pContentPost = post.querySelector('.texto');
        pContentPost.contentEditable = 'true';
        pContentPost.focus();

        const pos = document.createElement('div');

        const template = '<button id=\'subirfotos\'>submit</button>';
        pos.innerHTML = template;
        post.appendChild(pos);

        const guardar = postContainer.querySelector('#subirfotos');
        guardar.addEventListener('click', async () => {
          const urlImage = '';
          if (!urlImage) {
            await updatePost(post.id, pContentPost.textContent, urlImage);
          }
        });
      }
    });
  });
};

const deletePostClick = (divOptions) => {
  const deleteOpt = divOptions.querySelector('#delete-post');
  deleteOpt.addEventListener('click', (e) => {
    const idPostBtn = e.target.dataset.id;

    deletePost(idPostBtn);
  });
};
// Al apretar los ... el usuario puede seleccionar editar o eliminar su post
function editPostOptions(postContainer) {
  const iconEditPost = document.querySelectorAll('.editPostIcon');
  iconEditPost.forEach((iconOptions) => {
    const idCurrentPost = iconOptions.dataset.id;

    if (iconOptions.id === localStorageCall().id) {
      // const iconEditOptions = document.querySelector('.icon')
      // eslint-disable-next-line no-param-reassign
      iconOptions.innerHTML = templateEditPost(idCurrentPost);
      iconOptions.addEventListener('click', () => {
        console.log('apretaste los 2 puntos');
        const tooltip = iconOptions.querySelector('.tooltip');
        tooltip.classList.toggle('hide');
        deletePostClick(tooltip);
        updatePostClick(tooltip, postContainer);
      });
    }
  });
}

async function likesHandler(e) {
  const btnLike = e.target;
  const idUser = localStorageCall().id;
  const idPost = btnLike.getAttribute('name');
  const dataPost = await getUserById(idPost, 'posts');

  if (await dataPost.likes.includes(idUser)) {
    // esto es para quitar el like por usuario
    await updateLikes(
      idPost,
      await dataPost.likes.filter((item) => item !== idUser),
    );
  } else {
    // esto es para agregar like por usuario
    await updateLikes(idPost, [...dataPost.likes, idUser]);
  }
}
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

      const postContent = templatePostContent(
        idPost,
        dato.photoCreator,
        dato.nameCreator,
        dato.dateTime,
        dato.privacy,
        dato.country,
        dato.userId,
        dato.publication,
        dato.imgPost,
        likesCount,
      );
      postContainerGeneral.innerHTML += postContent;
      postContainer.appendChild(postContainerGeneral);
      // eslint-disable-next-line no-use-before-define
      verifyLike(dato.likes, element.id);
    });
    editPostOptions(postContainer);

    const buttonLikes = document.querySelectorAll('.like');
    buttonLikes.forEach((likeIcon) => {
      likeIcon.addEventListener('click', likesHandler);
    });
  });
};

const verifyLike = (arrLikesPost, idPost) => {
  const idUser = localStorageCall().id;
  const containerPost = document.getElementById(`${idPost}`);
  if (arrLikesPost.includes(idUser)) {
    containerPost.childNodes[7].classList.add('clickeado');
  } else {
    containerPost.childNodes[7].classList.add('noclickeado');
  }
};
