import { actualizarPosts, loadPublications } from '../src/firebase/firestore.js';
import { components } from '../src/views/index.js';
import { muroInicioView } from '../src/views/muroInicio';
// import { postView } from '../src/views/posts.js';
import { publicationView } from '../src/views/publications.js';

jest.mock('../src/firebase/auth.js');
jest.mock('../src/firebase/firestore.js');
jest.mock('../src/firebase/firebaseconfig.js');

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('formSigin', () => {
  it('Deberia mostrar un error si se da click en iniciar sesion sin llenar los campos', () => {
    // DADO
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(components.signin());

    const buttonLogin = document.querySelector('#btn-signin');

    expect(buttonLogin instanceof HTMLElement).toBe(true);
    // CUANDO
    buttonLogin.click();

    const complete = document.querySelector('#complete');
    // ENTONCES
    expect(complete.textContent).toEqual('Completa todos los datos');
    // verificar que el mensaje de error este dentro del documento
  });

  it('Debería cambiar de vista ', async () => {
    // DADO
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(components.signin());

    const buttonLogin = document.querySelector('#btn-signin');

    // CUANDO
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    inputEmail.value = 'hola@gmail.com';
    inputPassword.value = 'holamundo';

    buttonLogin.click();

    // const complete = document.querySelector('#complete');
    await tick();
    // ENTONCES
    expect(window.location.hash).toBe('#/inicio');
    // verificar que el mensaje de error este dentro del documento
  });
});
describe('loadPublications() ', () => {
  it('Verificar que la función loadPublications() sea llamada al dar click en el boton publish ', async () => {
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(publicationView());

    const buttonsubbmit = document.querySelector('#publish');

    const inputText = document.querySelector('#inputText');
    inputText.value = 'Contenido de publicación';

    buttonsubbmit.click();
    expect(loadPublications).toHaveBeenCalled();
  });
});

describe('Verificar los post', () => {
  it('Verificar que la función loadPublications() sea llamada al dar click en el boton publish ', async () => {
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);

    mainSection.appendChild(muroInicioView());

    const postContainer = document.querySelector('#postContainer');
    expect(postContainer instanceof HTMLElement).toBe(true);
    expect(actualizarPosts).toHaveBeenCalled();
  });
});
