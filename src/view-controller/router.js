import { components } from '../views/index.js';

export const changeTmp = (route) => {
  const mainSection = document.getElementById('container');
  mainSection.innerHTML = '';
  switch (route) {
    case '#/signin':
    case '': {
      mainSection.appendChild(components.signin());
      break;
    }

    case '#/signup': {
      mainSection.appendChild(components.signup());
      break;
    }

    case '#/inicio': {
      mainSection.appendChild(components.Home());
      const mainContent = document.getElementById('mainContent');
      mainContent.appendChild(components.perfil());
      const muro = document.createElement('div');
      muro.setAttribute('id', 'muroContainer');
      mainContent.appendChild(muro);
      muro.appendChild(components.publications());

      break;
    }
    default:
      mainSection.appendChild(components.different());
  }
};
