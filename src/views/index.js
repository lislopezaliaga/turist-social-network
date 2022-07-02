import { formSignIn } from './signin.js';
import { formSingUp} from './signup.js';
import { home } from './home.js';
import { navBar } from './navBar.js';

const components = {
    signin: formSignIn,
    signup: formSingUp,
    nav: navBar,
    home: home
};

export { components };

