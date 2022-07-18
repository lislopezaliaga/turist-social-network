import { loadPublications } from '../firebase/firestore.js';
import { localStorageCall } from '../componentes/sessionStorage.js';
import { dateTime } from './timeago.js';
import { shareImgPost } from '../firebase/storage.js';

export const publicationView = () => {
  console.log(dateTime());
  const userObject = localStorageCall();
  const publicationContent = `
  <div class="namePhotoPublication">
    <img src="${userObject.profilePhoto}" width = "50px">
    <h2>${userObject.name}</h2>
    <select id="privacyPostArea">
            <option value="1">🌎 Público</option>
            <option value="2">🔒 Solo yo </option>
    </select>
  </div>
  <textarea placeholder="Escribe Algo ..." id='inputText'></textarea>
 
  <div class="divcamera">
    <div class="inputFiles">
      <label for="compartirImg"></label>
      <input type="file"  id="compartirImg" >
    </div>
    <h4>Agrega una imagen</h4>
    <div id="addImage">
  </div>
  </div>
  
  <div class="buttonGeneralPublication">
    <button id = "publish" class="buttonPublication" type="submit">publicar</button>
    <button id = "cancel" class="buttonPublication">cancelar</button>
  </div>
        `;
  const publicationContainer = document.createElement('div');
  publicationContainer.setAttribute('class', 'sectionPublication');
  publicationContainer.innerHTML = publicationContent;

  // Obteniendo botones de publicar y cancelar
  const publishBtn = publicationContainer.querySelector('#publish');
  publishBtn.addEventListener('click', addPublications);
  const cancelBtn = publicationContainer.querySelector('#cancel');

  const inputText = publicationContainer.querySelector('#compartirImg');
  inputText.addEventListener('change', (addImage));

  /* cancelBtn.addEventListener('click', deletePublications); */
  return publicationContainer;
};

async function addPublications(e) {
  e.preventDefault();

  const inputText = document.querySelector('#inputText');
  const creator = localStorageCall().id;

  const contentPost = inputText.value;
  

  const namecreator = localStorageCall().name;
  const photoCreator = localStorageCall().profilePhoto;

  const urlImage = document.getElementById('compartirImg').files[0].name;
  const file = document.getElementById('compartirImg').files[0];

  console.log(file);
  await shareImgPost(urlImage, file);
  // setTimeout(() => {
  //   const a=shareImgPost(urlImage, file);
  //   console.log(a);
  // }, 6000);
  

  const urlImg = await shareImgPost(urlImage, file);

  loadPublications(creator, contentPost, urlImg, namecreator, photoCreator);
}

function addImage() {
  const divAddImage = document.getElementById('addImage');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');
  divAddImage.appendChild(imageContainer);

  const imagen = document.createElement('img');

  const iconX = document.createElement('span');
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
}
