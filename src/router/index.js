// aqui exportaras las funciones que necesites
import { formLogIn } from '../view/login.js';


export const routers= () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  
  // devuelve la parte de anclaje de la URL(ruta)
  switch (window.location.hash.toLowerCase()) {
    case '':
      main.appendChild(formLogIn());
      break;
   
    default:
      main.innerHTML = 'Página No Encontrada';
      break;
  }
};
