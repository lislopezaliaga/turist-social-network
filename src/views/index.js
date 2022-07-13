import { formSignIn } from './signin.js';
import { formSignUp } from './signup.js';
import { home } from './home.js';
import { perfilView } from './perfil.js';
import { inicioView } from './inicio.js';
import { publicationView } from './publications.js';

const components = {
  signin: formSignIn,
  signup: formSignUp,
  Home: home,
  perfil: perfilView,
  inicio: inicioView,
  publications: publicationView,
};

export { components };
