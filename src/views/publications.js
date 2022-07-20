import { loadPublications } from '../firebase/firestore.js';
import { localStorageCall } from '../componentes/sessionStorage.js';
import { dateTime } from './timeago.js';
import { shareImgPost } from '../firebase/storage.js';
/* async function addPublications(e) {
  e.preventDefault();

  const inputText = document.querySelector('#inputText');
  const creator = localStorageCall().id;

  const contentPost = inputText.value;

  const namecreator = localStorageCall().name;
  const photoCreator = localStorageCall().profilePhoto;

  const postForm = document.querySelector('#postForm');
  const chargingGif = document.querySelector('#modal-charging'); */

  /** ******SUBIENDO IMAGENES AL STORAGE Y AL FIRESTORE************ */
  /* const inputTypeFile = document.getElementById('compartirImg');
  let urlImg = '';
  if (inputTypeFile.value) {
    const urlImage = inputTypeFile.files[0].name;
    const file = inputTypeFile.files[0];
    console.log(file);
    const objectLoadFiles = shareImgPost(urlImage, file);

    chargingGif.style.display = "block";
    postForm.style.display = "none";
    
    const uploadImg = objectLoadFiles.loadFile;
    await uploadImg;
    console.log('subida exitosa');
    chargingGif.style.display = "none";
    postForm.style.display = "block";

    //urlImg = await objectLoadFiles.getURLimg;
    const urlImg2 = await objectLoadFiles.getURLimg;
    urlImg = urlImg2;
    console.log(urlImg);
    console.log(urlImg2);
  } */

  /** ******SUBIENDO DATOS AL FIRESTORE************ */
/* 
  if (inputTypeFile.value || inputText.value) {
    await loadPublications(creator, contentPost, urlImg, namecreator, photoCreator);
  }
} */
async function addPublications(e) {
  e.preventDefault();

  const inputText = document.querySelector('#inputText');
  const creator = localStorageCall().id;

  const contentPost = inputText.value;

  const namecreator = localStorageCall().name;
  const photoCreator = localStorageCall().profilePhoto;
  const inputTypeFile = document.getElementById('compartirImg');

  const postForm = document.querySelector('#postForm');
  const chargingGif = document.querySelector('#modal-charging');

  let urlImg = '';
  if (inputTypeFile.value) {
    const urlImage = inputTypeFile.files[0].name;
    const file = inputTypeFile.files[0];
    console.log(file);

    chargingGif.style.display = "block";
    postForm.style.display = "none";

    await shareImgPost(urlImage, file);
    urlImg = await shareImgPost(urlImage, file);

  }
  
  
  if (inputTypeFile.value || inputText.value) {
    loadPublications(creator, contentPost, urlImg, namecreator, photoCreator);
  }

  chargingGif.style.display = "none";
  postForm.style.display = "block";
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

  /** *Borrando el preview de la imagen */
  const deleteButtonImage = document.getElementById('deleteButtonImage');
  deleteButtonImage.addEventListener('click', () => {
    divAddImage.innerHTML = '';
    const cleanInputFile = document.getElementById('compartirImg');
    cleanInputFile.value = '';
  });
}

export const publicationView = () => {
  console.log(dateTime());
  const userObject = localStorageCall();
  const publicationContent = `
  <div class="namePhotoPublication">
    <img src="${userObject.profilePhoto}" width = "30px">
    <h2>${userObject.name}</h2>
    <select id="privacyPostArea">
            <option value="1">🌎 Público</option>
            <option value="2">🔒 Solo yo </option>
    </select>
  </div>

  <div id = "modal-charging" style = "display:none">
    <p>Cargando ...</p>
    <img src="../img/cat-charging.gif"/>
  </div>

  <form id="postForm">
    <textarea placeholder="Escribe Algo ..." id='inputText'></textarea>
  
    <div class="divcamera">
      <div class="inputFiles">
        <label for="compartirImg"></label>
        <input type="file"  id="compartirImg" >
      </div>
      <h4> Agrega una imagen </h4>
      <div id="addImage">
      </div>
    </div>
  </form>

  <div class="buttonGeneralPublication">
    <button id = "publish" class="buttonPublication" type="submit">Publicar</button>
    <button id = "cancel" class="buttonPublication">Cancelar</button>
  </div>

  <select id = "selectCountry"></select>
        `;
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
  inputText.addEventListener('change', (addImage));

  /* cancelBtn.addEventListener('click', deletePublications); */
  return publicationContainer;
};