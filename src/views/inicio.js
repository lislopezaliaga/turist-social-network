// import { muroView } from './muro.js';
import { perfilView } from './perfil.js';

// export const inicioView = () => {
//   const inicioContent = `
//     <div>
//     </div>
//       `;
//   const inicioContainer = document.createElement('div');
//   inicioContainer.setAttribute('id', 'divInicio');
//   inicioContainer.innerHTML = inicioContent;
//   return inicioContainer;
// };
export function inicioView(changeMuro) {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'mainContent');
  mainContent.appendChild(perfilView());
  mainContent.appendChild(changeMuro);
  return mainContent;
}

// mainSection.appendChild(components.Home());
//       const mainContent = document.getElementById('mainContent');
//       mainContent.appendChild(components.perfil());
//       const muro = document.createElement('div');
//       muro.setAttribute('id', 'muroContainer');
//       mainContent.appendChild(muro);
//       muro.appendChild(components.publications());

//       break;
