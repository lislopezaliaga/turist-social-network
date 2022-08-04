import { formSignIn } from './signin.js';
import { formSignUp } from './signup.js';
import { home } from './home.js';
import { inicioView } from './inicio.js';
import { muroView } from './muro.js';
import { muroInicioView } from './muroInicio.js';
import { editProfile } from './editProfile.js';
import { backpackersView } from './backpackers.js';

const components = {
  signin: formSignIn,
  signup: formSignUp,
  Home: home,
  muro: muroView,
  inicio: inicioView,
  muroInicio: muroInicioView,
  profile: editProfile,
  mochileros: backpackersView,
};

export { components };
