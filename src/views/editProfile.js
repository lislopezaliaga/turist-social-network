import { profileView } from './profile.js';

export function editProfile() {
  const muroInicio = document.createElement('div');
  muroInicio.setAttribute('id', 'divContainerProfile');
  muroInicio.appendChild(profileView());

//   const postContainer = document.createElement('div');
//   postContainer.setAttribute('id', 'postContainer');
//   muroInicio.appendChild(postContainer);
//   postView();
  return muroInicio;
}