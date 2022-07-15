import { loadPublications } from '../firebase/firestore.js';
import { localStorageCall } from '../componentes/sessionStorage.js';

export const publicationView = () => {
  const userObject = localStorageCall();
  const publicationContent = `
  <div>
    <img src="${userObject.profilePhoto}" width = "50px">
    <h2>${userObject.name}</h2>
    <textarea placeholder="Escribe Algo" id='inputText'></textarea>
  </div>
  <div id="addImage">
  </div>
  <input type="file" placeholder="Añadir Imagen" id="compartirImg">
  <button id = "publish">publicar</button>
  <button id = "cancel">cancelar</button>
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

function addPublications() {
  const inputText = document.querySelector('#inputText');

  console.log('me clickearon');
  const creator = localStorageCall().id;
  const contentPost = inputText.value;
  const urlImg = '';
  loadPublications(creator, contentPost, urlImg);
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
