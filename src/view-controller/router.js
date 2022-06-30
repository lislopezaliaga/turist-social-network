import { components } from '../views/index.js';

export const changeTmp = (route) => {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    switch (route) {
        case '#/signin': case '': {
            return mainSection.appendChild(components.signin());
            break;
        }

        case '#/signup': {
            return mainSection.appendChild(components.signup());
            break;
        }

        case '#/home': {
            return mainSection.appendChild(components.home());
            break;
        }

        default:
            return mainSection.appendChild(components.different());
    }
}