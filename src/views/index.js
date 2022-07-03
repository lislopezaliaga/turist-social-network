import { formSignIn,siginUsers } from './signin.js';
import { formSingUp,registerUsers} from './signup.js';
import { home } from './home.js';
import { navBar } from './navBar.js';

const components = {
    signin: formSignIn,
    signup: formSingUp,
    nav: navBar,
    home: home
};

const conections={
    registerUsers:registerUsers,
    siginUsers: siginUsers,
};

export { components,conections};

