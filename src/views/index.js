import { formSignIn } from './signin.js';
import { formSignUp } from './signup.js';
import { home } from './home.js';
import { navBar } from './navBar.js';

const components = {
  signin: formSignIn,
  signup: formSignUp,
  nav: navBar,
  // eslint-disable-next-line object-shorthand
  home: home,
};

export { components };
