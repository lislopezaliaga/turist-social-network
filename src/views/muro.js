import { postView } from './posts.js';
import { publicationView } from './publications.js';

export function muroView() {
  const muro = document.createElement('div');
  muro.setAttribute('id', 'muroContainer');
  muro.appendChild(publicationView());
  muro.appendChild(postView());
  return muro;
}
