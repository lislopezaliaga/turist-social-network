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
      mainSection.appendChild(components.inicio(components.muro(components.muroInicio())));
      // setTimeout(() => {
      // }, 5000);
      break;
    }
    case '#/viajeros': {
      mainSection.appendChild(components.Home());
      break;
    }
    case '#/lugares': {
      mainSection.appendChild(components.Home());
      break;
    }
    default:
      mainSection.appendChild(components.different());
  }
};
