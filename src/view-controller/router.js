import { components } from '../views/index.js';
import {register} from '../views/signup.js';



export const changeTmp = (route) => {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

    const navBar = document.getElementById('nav-bar');
    navBar.innerHTML = '';

    switch (route) {

        case '#/signin': case '': {  
            mainSection.appendChild(components.signin());

            break;
        }

        case '#/signup': {
           mainSection.appendChild(components.signup());
            register();
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