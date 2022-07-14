import { postView } from './posts.js';
import { publicationView } from './publications.js';

export function firstView() {
  const first = document.createElement('div');
  first.setAttribute('id', 'divContainer');
  first.appendChild(publicationView());
  first.appendChild(postView());
  return first;
}
