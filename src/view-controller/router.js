import { components } from '../views/index.js';

export const changeTmp = (route) => {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    const navBar = document.getElementById('nav-bar');
    navBar.innerHTML = '';

    switch (route) {
        case '#/signup': 
        case '': {
            mainSection.appendChild(components.signup());
            break;
        }

        case '#/signin': {
            mainSection.appendChild(components.signin());
            break;
        }

        case '#/home': {
            navBar.appendChild(components.nav());
            mainSection.appendChild(components.home());
            break;
        }

        default:
            mainSection.appendChild(components.different());
    }
}