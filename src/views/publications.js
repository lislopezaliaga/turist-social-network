import { loadPublications } from "../firebase/firestore.js";
import { localStorageCall } from "../componentes/sessionStorage.js";

export const publicationView = () => {
  const userObject = localStorageCall();
  const publicationContent = `
  <div>
    <img src="${userObject.profilePhoto}" width = "50px">
    <h2>${userObject.name}</h2>
  </div>
  <div>
    <img src="">
    <p>agrega una imagen</p>
  </div>
  <input placeholder="Escribe Algo" id ="inputPost">
  <input type="file" placeholder="Añadir Imagen" id="compartirImg">
  <button id = "publish">publicar</button>
  <button id = "cancel">cancelar</button>
        `;
  const publicationContainer = document.createElement('div');
  publicationContainer.setAttribute('class', 'sectionPublication');
  publicationContainer.innerHTML = publicationContent;

  //Obteniendo botones de publicar y cancelar
  const publishBtn = publicationContainer.querySelector('#publish');
  publishBtn.addEventListener('click', addPublications)
  const cancelBtn = publicationContainer.querySelector('#cancel');
  /* cancelBtn.addEventListener('click', deletePublications); */
  
  return publicationContainer;
};

function addPublications (){
  const inputPost = document.querySelector('#inputPost');
  console.log('me clickearon');
  const creator = localStorageCall().id;
  const contentPost = inputPost.value;
  const urlImg = '';
  loadPublications(creator, contentPost, urlImg);
}

