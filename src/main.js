// Este es el punto de entrada de tu aplicacion
/* import { myFunction } from './lib/index.js'; */
import { changeTmp } from './view-controller/router.js';

/* myFunction(); */
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));

  /* menu estilos */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
  });
};

window.addEventListener('load', init);
