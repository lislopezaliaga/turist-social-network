import { obtenerById } from '../firebase/firestore.js';

export const home = () => {
  const homeContent = `
    <div>
        <input type="text" placeholder="buscar amigos">
    </div>
    `;
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = homeContent;
  return homeContainer;
};

console.log(obtenerById('DE5c3A6a15fhWGqJxYX0SwjAjpO2', 'users'));
