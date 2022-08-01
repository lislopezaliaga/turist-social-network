import { localStorageCall } from '../componentes/sessionStorage.js';
import {
  actualizarPosts,
  getUserById,
  updateLikes,
  deletePost,
  // eslint-disable-next-line no-unused-vars
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

    <div id="containerDelete"></div>
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

    postindividual.forEach(async (post) => {
      if (idPostBtn === post.id) {
        // Crear modal
        const modalUpdate = document.createElement('dialog');
        modalUpdate.setAttribute('class', 'modalEditPost');
        postContainer.appendChild(modalUpdate);

        // Traer los datos actuales del post
        const postData = await getUserById(post.id, 'posts');
        // postData.imgPost,
        // eslint-disable-next-line no-use-before-define
        modalUpdate.innerHTML = templateEditModal(
          postData.publication,
          postData.imgPost,
          postData.country,
          postData.privacy,
        );
        modalUpdate.showModal();
        // Capturar los nuevos datos ingresados
        const inputFile = document.querySelector('#inputSelectImg');
        console.log(inputFile);
        // eslint-disable-next-line no-use-before-define
        inputFile.addEventListener('change', addImage);

        // Guardar cambios con btn guardar
        modalUpdate.querySelector('#cancelUpdate').addEventListener('click', () => {
          // updatePost(post.id, pContentPost.textContent, urlImage);
          modalUpdate.close();
        });

        // Cerrar modal con boton cancelar
        modalUpdate.querySelector('#cancelUpdate').addEventListener('click', () => modalUpdate.close());
        /* const pContentPost = post.querySelector('.texto');
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
        }); */
      }
    });
  });
};

function addImage() {
  const divAddImage = document.getElementById('addImageContainer');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');
  divAddImage.appendChild(imageContainer);

  const imagen = document.createElement('img');

  const iconX = document.createElement('span');
  iconX.setAttribute('id', 'deleteBtnImg');
  iconX.innerHTML = '✖';
  iconX.classList.add('closeImg');

  const read = new FileReader();
  const file = this.files;

  // eslint-disable-next-line func-names
  read.onload = function () {
    const result = this.result;
    const url = result;
    imagen.src = url;

    imageContainer.appendChild(imagen);
    imageContainer.appendChild(iconX);
    // eslint-disable-next-line no-use-before-define
    deleteBtnPreviewImg();
  };

  read.readAsDataURL(file[0]);

  // Reemplazar la imagen del post por la nueva seleccionada
  if (document.getElementById('oldImgContainer')) {
    const oldImgContainer = document.getElementById('oldImgContainer');
    oldImgContainer.style.display = 'none';
  }
}

function deleteBtnPreviewImg() {
  /* Borrando la imagen del modal */
  const deleteBtnImage = document.getElementById('deleteBtnImg');
  deleteBtnImage.addEventListener('click', () => {
    const imgContainer = document.getElementById('addImageContainer');
    imgContainer.innerHTML = '';
    const cleanInputFile = document.getElementById('inputSelectImg');
    cleanInputFile.value = '';
  });
}

const templateDeleteModal = () => {
  const deleteModalContent = `<div id="modalDeletePost" class="modalDeletePost">
    <img class="gatitoWarning" src="img/triste.png">
    <p class="modalTitleDelete">¿Estás seguro que deseas eliminar?</p>
    <div class= "btnsDeleteCancel">
      <button type="button" class="btnPost" id="deletePost">Eliminar</button>
      <button type="button" class= "btnPost" id="closeModal">Cancelar</button>
    </div>
  </div>`;

  return deleteModalContent;
};

const deletePostClick = (divOptions, postContainer) => {
  const deleteOpt = divOptions.querySelector('#delete-post');
  deleteOpt.addEventListener('click', (e) => {
    const idPostBtn = e.target.dataset.id;

    // Crear modal
    const modalDelete = document.createElement('dialog');
    modalDelete.innerHTML = '';
    modalDelete.innerHTML = templateDeleteModal();
    modalDelete.setAttribute('class', 'modalDeleteWarning');
    postContainer.appendChild(modalDelete);
    modalDelete.showModal();

    // Seleccionar btn cancelar y eliminar post
    modalDelete.querySelector('#closeModal').addEventListener('click', () => {
      modalDelete.close();
      postContainer.removeChild(modalDelete);
      console.log(postContainer.childNodes);
    });
    modalDelete.querySelector('#deletePost').addEventListener('click', () => {
      deletePost(idPostBtn);
      modalDelete.close();
    });
  });
};

const templateEditModal = (
  textPost,
  imgUrl,
  country,
  privacy,
) => {
  const editModalContent = `
  <div class="namePhotoPublication">
    <div class='nameSelectPublication'>
      <select id="selectPostArea">
              <option value="🌎">🌎 ${privacy}</option>
              <option value="🔒">🔒 Privado </option>
      </select>
    </div>
  </div>

  <form id="postForm2">
    <textarea placeholder="Escribe Algo ..." id='inputUpdatedText'>${textPost}</textarea>
  
    <div class="divcameraUpdate">
      <div class="inputFiles relative">
        <label for="compartirImg"></label>
        <input type="file"  id="inputSelectImg" >
      </div>
      <div class="textimgUp"><h4 > Cambia tu imagen </h4></div>
      <select id="selectYourCountry"> 
        <option value=" alguna parte del mundo" disabled selected>${country}</option>
      </select>
    </div>

    <div id="addImageContainer" class = "containerPreviewImg">
      <div id="oldImgContainer" class = "imageContainer">
        <img src = ${imgUrl}/>
      </div>
    </div>

    <div class="buttonGeneralPublicationUpdate">
      <button id = "saveUpdate" class="buttonPublication" type="submit">Guardar</button>
      <button id = "cancelUpdate" class="buttonPublication">Cancelar</button>
    </div>
  </form>`;

  return editModalContent;
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
        deletePostClick(tooltip, postContainer);
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
