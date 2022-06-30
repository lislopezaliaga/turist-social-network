// Este es el punto de entrada de tu aplicacion

import { routers} from './router/index.js';

window.addEventListener('load',routers);

window.addEventListener('hashchange', routers);
