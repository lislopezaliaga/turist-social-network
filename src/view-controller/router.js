import { components } from '../views/index.js';
import {register} from '../views/signup.js';



export const changeTmp = (route) => {
    const mainSection = document.getElementById('container');
    mainSection.innerHTML = '';

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
             mainSection.appendChild(components.home());
            break;
        }

        default:
            return mainSection.appendChild(components.different());
    }
}