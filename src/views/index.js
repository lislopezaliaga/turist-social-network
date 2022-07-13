import { formSignIn } from './signin.js';
import { formSignUp } from './signup.js';
import { home } from './home.js';
import { inicioView } from './inicio.js';
import { muroView } from './muro.js';
import { firstView } from './first.js';

const components = {
  signin: formSignIn,
  signup: formSignUp,
  Home: home,
  muro: muroView,
  inicio: inicioView,
  first: firstView,
};

export { components };
