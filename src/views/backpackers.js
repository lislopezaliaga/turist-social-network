import { sessionStorageCall } from '../componentes/sessionStorage.js';
import { usersView } from '../firebase/firestore.js';

function templateUsersContent(name, description, interest, profilePhoto, country) {
  const userContent = `
      <div class="firstDivPerfil2">
        <div class="photoPerfil">
          <img id="imagenPerfil" class='imgPerfil' src="${profilePhoto}">
        </div>
        <h2 class="nombreuser">${name}</h2> 
        <div class="divPerfil">
      <div class="divPerfil">
        <h3><i class="fa fa-user"></i> Descripción</h3>
        <p>${description}</p>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-globe"></i> País</h3>
        <p>${country}</p>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-gratipay"></i> Intereses</h3>
        <p>${interest}</p>
      </div>
    </div>
        <button id='editPerfil'><i class="fa fa-pencil"></i> Editar perfil  </button>
        <dialog id='modalEdit'><dialog>
      </div>
  
        `;
  return userContent;
}

function back() {
  usersView((querySnapshoot) => {
    /** Seleccionamos al container para añadir el usuario */
    const usersContainerGeneral = document.getElementById('divBackpackers');

    /** Creamos un div post content */
    const userContainer = document.createElement('div');
    userContainer.setAttribute('class', 'userContainer');
    userContainer.innerHTML = '';

    querySnapshoot.forEach((element) => {
      const dato = element.data();
      const idUsuario = sessionStorageCall().id;
      const idUser = element.id;
      if (idUser !== idUsuario) {
        const postContent = templateUsersContent(
          dato.name,
          dato.description,
          dato.interest,
          dato.profilePhoto,
          dato.country,
        );
        userContainer.innerHTML += postContent;
        usersContainerGeneral.appendChild(userContainer);
      }

      // eslint-disable-next-line no-use-before-define
    });
  });
}

export function backpackersView() {
  const backpackers = document.createElement('div');
  backpackers.setAttribute('id', 'divBackpackers');

  back();
  return backpackers;
}
