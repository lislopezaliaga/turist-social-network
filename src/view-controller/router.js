import { components } from '../views/index.js';

export const changeTmp = (route) => {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    switch (route) {
        case '': {
            return mainSection.appendChild(components.signin());
            break;
        }

        case '': {
            return mainSection.appendChild(components.signup());
            break;
        }

        default:
            return mainSection.appendChild(components.different());
    }
}