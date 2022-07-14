import {localStorageCall} from '../componentes/sessionStorage.js'

export const perfilView = () => {
  const userObject = localStorageCall(); 

  // eslint-disable-next-line no-undef
  const perfilContent = `
    
    <div class="divPerfil">
      <img id="imgPerfil" src=${userObject.profilePhoto} width= "50px">
      <h2>${userObject.name}</h2> 
    </div>
    <div class="divPerfil">
      <div class="divPerfil">
        <h3>Descripción</h3>
        <p>${userObject.description}</p>
      </div>
      <div>
        <h3>País</h3>
        <p>${userObject.country}</p>
      </div>
      <div>
        <h3>Intereses</h3>
        <p>${userObject.interest}</p>
      </div>
    </div>

      `;
  const perfilContainer = document.createElement('section');
  perfilContainer.setAttribute('class', 'sectionPerfil');
  perfilContainer.innerHTML = perfilContent;
  return perfilContainer;
};
