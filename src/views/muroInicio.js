import { postView } from './posts.js';
import { publicationView } from './publications.js';

export function muroInicioView() {
  const muroInicio = document.createElement('div');
  muroInicio.setAttribute('id', 'divContainer');
  muroInicio.appendChild(publicationView());
  muroInicio.appendChild(postView());
  return muroInicio;
}
