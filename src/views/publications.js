import { loadPublications } from '../firebase/firestore.js';
import { localStorageCall } from '../componentes/sessionStorage.js';
import { shareImgPost } from '../firebase/storage.js';
import { paises } from './country.js';

function templatePublication(photo, name) {
  const publicationContent = `
  <div class="namePhotoPublication">
    <img src="${photo}" width = "30px">
    <div class='nameSelectPublication'>
      <h3>${name}</h3>
      <select id="privacyPostArea">
              <option value="🌎">🌎 Público</option>
              <option value="🔒">🔒 Privado </option>
      </select>
    </div>
  </div>

  <div id = "modal-charging" style = "display:none">
    <p>Cargando ...</p>
    <img width="150px" height="100px" src="http://iepingenieria.edu.pe/images/Admision/cargando.gif"/>
  </div>

  <form id="postForm">
    <textarea placeholder="Escribe Algo ..." id='inputText'></textarea>
  
    <div class="divcamera">
      <div class="inputFiles">
        <label for="compartirImg"></label>
        <input type="file"  id="compartirImg" >
      </div>
      <h4> Agrega una imagen </h4>
      <select id="selectCountry"> 
        <option value=" alguna parte del mundo" disabled selected>Lugares</option>
      </select>
      <div id="addImage">
      </div>
    </div>

    <div class="buttonGeneralPublication">
      <button id = "publish" class="buttonPublication" type="submit">Publicar</button>
      <button id = "cancel" class="buttonPublication">Cancelar</button>
    </div>
  </form>`;

  return publicationContent;
}

async function addPublications(e) {
  e.preventDefault();
  const privacySelect = document.querySelector('#privacyPostArea');
  const privacyOption = privacySelect.value;

  const inputText = document.querySelector('#inputText');
  const creator = localStorageCall().id;

  const contentPost = inputText.value;

  const countrySelect = document.querySelector('#selectCountry');
  const countryOption = countrySelect.value;

  const namecreator = localStorageCall().name;
  const photoCreator = localStorageCall().profilePhoto;
  const inputTypeFile = document.getElementById('compartirImg');

  const postForm = document.querySelector('#postForm');
  const chargingGif = document.querySelector('#modal-charging');

  let urlImg = '';
  if (inputTypeFile.value) {
    const urlImage = inputTypeFile.files[0].name;
    const file = inputTypeFile.files[0];

    chargingGif.style.display = 'flex';
    postForm.style.display = 'none';
    /* --------subir el post al storage */
    await shareImgPost(urlImage, file);

    /* --------obtener la url del post */

    urlImg = await shareImgPost(urlImage, file);
  }

  if (inputTypeFile.value || inputText.value) {
    chargingGif.style.display = 'none';
    postForm.style.display = 'block';
    await loadPublications(
      creator,
      contentPost,
      urlImg,
      namecreator,
      photoCreator,
      countryOption,
      privacyOption,
    );
    const divAddImage = document.getElementById('addImage');
    divAddImage.innerHTML = '';
    inputText.value = '';
    inputTypeFile.value = '';
  }
}

function addImage() {
  const divAddImage = document.getElementById('addImage');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');
  divAddImage.appendChild(imageContainer);

  const imagen = document.createElement('img');

  const iconX = document.createElement('span');
  imageContainer.setAttribute('id', 'deleteButtonImage');
  iconX.innerHTML = '✖';

  const read = new FileReader();
  const file = this.files;

  read.onload = function () {
    const result = this.result;
    const url = result;
    imagen.src = url;

    imageContainer.appendChild(imagen);
    imageContainer.appendChild(iconX);
  };

  read.readAsDataURL(file[0]);
  /* * *Borrando el preview de la imagen */
  const deleteButtonImage = document.getElementById('deleteButtonImage');
  deleteButtonImage.addEventListener('click', () => {
    divAddImage.innerHTML = '';
    const cleanInputFile = document.getElementById('compartirImg');
    cleanInputFile.value = '';
  });
}

export const publicationView = () => {
  const userObject = localStorageCall();
  const publicationContent = templatePublication(
    userObject.profilePhoto,
    userObject.name,
  );
  const publicationContainer = document.createElement('div');
  publicationContainer.setAttribute('class', 'sectionPublication');
  publicationContainer.innerHTML = publicationContent;

  const postForm = publicationContainer.querySelector('#postForm');
  // Obteniendo botones de publicar y cancelar
  const publishBtn = publicationContainer.querySelector('#publish');
  publishBtn.addEventListener('click', addPublications);

  const cancelBtn = publicationContainer.querySelector('#cancel');
  cancelBtn.addEventListener('click', () => {
    postForm.reset();
    const divAddImage = document.getElementById('addImage');
    divAddImage.innerHTML = '';
  });

  const inputText = publicationContainer.querySelector('#compartirImg');
  inputText.addEventListener('change', addImage);
  paises(publicationContainer);

  /* cancelBtn.addEventListener('click', deletePublications); */
  return publicationContainer;
};
