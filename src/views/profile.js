import { sessionStorageCall } from '../componentes/sessionStorage.js';
// import { userid } from '../firebase/auth.js';
import { getUserById, updateUser } from '../firebase/firestore.js';

export const profileView = () => {
  const userObject = sessionStorageCall();
  // setTimeout( async() => {
  //   const perfilData = await dataUser(userObject.id);
  //   console.log(perfilData);
  // }, 1000);

  // eslint-disable-next-line no-undef
  const perfilContent = `
      
      <div class="firstDivPerfil">
        <div class="photoPerfil">
          <img id="imgPerfil" src="${userObject.profilePhoto}">
        </div>
        <h2 class="nombreuser">${userObject.name}</h2> 
        <div class="divPerfil">
      <div class="divPerfil">
        <h3><i class="fa fa-user"></i> Descripción</h3>
        <p>${userObject.description}</p>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-globe"></i> País</h3>
        <p>${userObject.country}</p>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-gratipay"></i> Intereses</h3>
        <p>${userObject.interest}</p>
      </div>
    </div>
        <button id='editPerfil'>Editar perfil</button>
        <dialog id='modalEdit'><dialog>
      </div>
  
        `;
  const perfilContainer = document.createElement('section');
  perfilContainer.setAttribute('class', 'sectionPerfil');

  perfilContainer.innerHTML = perfilContent;

  const editPeril = perfilContainer.querySelector('#editPerfil');
  editPeril.addEventListener('click', editPerfilUser);
  return perfilContainer;
};

async function editPerfilUser() {
  const modalEdit = document.querySelector('#modalEdit');
  const userObject = sessionStorageCall();

  const perfilData = await getUserById(userObject.id, 'users');
  console.log(perfilData);

  modalEdit.innerHTML = modalEditPerfil(
    perfilData.name,
    perfilData.description,
    perfilData.country,
    perfilData.interest,
  );
  if (!modalEdit.open) {
    modalEdit.showModal();
  }
  const cancelButton = document.querySelector('#cancelButton');
  cancelButton.addEventListener('click', () => {
    modalEdit.close();
  });

  const guardarButton = document.querySelector('#guardarButton');
  guardarButton.addEventListener('click', async () => {
    const namepefil = document.querySelector('#namepefil').value;
    const descriptionpefil = document.querySelector('#descriptionpefil').value;
    const paispefil = document.querySelector('#paispefil').value;
    const interesespefil = document.querySelector('#interesespefil').value;
    const userStorage = {
      country: paispefil,
      description: descriptionpefil,
      id: userObject.id,
      interest: interesespefil,
      name: namepefil,
      profilePhoto: '../img/user.png',
    };
    sessionStorage.setItem('USER', JSON.stringify(userStorage));
    //     const user = await userid();
    // console.log(user.uid);
    updateUser(userObject.id, namepefil, descriptionpefil, paispefil, interesespefil);
    modalEdit.close();
  });
}
function modalEditPerfil(name, description, pais, intereses) {
  const editModalContent = `
  <div id = "modalCharginEdit" style = "display:none">
    <p>Cargando ...</p>
    <img width="150px" height="100px" src="http://iepingenieria.edu.pe/images/Admision/cargando.gif"/>
  </div>
  <div id=''>
    <div >
      <div class="photoPerfil">
        <img id="imgPerfil" src="">
      </div>
      <div class="inputFiles relative">
          <label for="compartirImg"></label>
          <input type="file"  id="inputSelectImg" >
      </div>
      <input class="" id='namepefil' value='${name}'>
    </div>
    <div class="divPerfil">
      <div class="divPerfil">
        <h3><i class="fa fa-user"></i> Descripción</h3>
        <input id='descriptionpefil' value='${description}'>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-globe"></i> País</h3>
        <input id='paispefil' value='${pais}'>
      </div>
      <div class="divPerfil">
        <h3><i class="fa fa-gratipay"></i> Intereses</h3>
        <input id='interesespefil' value='${intereses}'>
      </div>
    </div> 
    <button id='guardarButton'>Guardar Cambios</button>
    <button id='cancelButton'>Cancelar</button>
  </div>`;

  return editModalContent;
}
