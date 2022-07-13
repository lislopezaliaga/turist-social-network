import { components } from '../views/index.js';
import { muroView } from '../views/muro.js';

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
      mainSection.appendChild(components.inicio());
      break;
    }
    case '#/viajeros': {
      mainSection.appendChild(components.Home());
      mainSection.appendChild(components.inicio(muroView));
      break;
    }
    default:
      mainSection.appendChild(components.different());
  }
};
