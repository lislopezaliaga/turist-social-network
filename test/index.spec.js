/* eslint-disable no-unused-vars */
import { components } from '../src/views';

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
    // obtener el boton
    // const inputEmail = document.querySelector('#email');
    // const inputPassword = document.querySelector('#password');
    // inputEmail.value = '';
    // inputPassword.value = '';
    // CUANDO
    buttonLogin.click();

    const email = 'hi';
    const password = 'oa';
    const complete = document.querySelector('#complete');
    // ENTONCES
    expect(complete.textContent).toEqual('Completa todos los datos');
    // verificar que el mensaje de error este dentro del documento
  });
  // eslint-disable-next-line jest/no-focused-tests
  it('Deberia pasar', async () => {
    // DADO
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(components.signin());

    // eslint-disable-next-line no-unused-vars
    const buttonLogin = document.querySelector('#btn-signin');

    // expect(buttonLogin instanceof HTMLElement).toBe(true);
    // obtener el boton

    /*     // CUANDO
      buttonLogin.click();
      const inputEmail = document.querySelector('#email');
      const inputPassword = document.querySelector('#password');
      inputEmail.value = 'hola@gmail.com';
      inputPassword.value = 'holamundo';
      // const complete = document.querySelector('#complete');
    //  ;
    //   console.log(buttonLogin.click());
      // ENTONCES
     await buttonLogin.click();
      expect(window.location.hash).toBe('#/inicio');
      // verificar que el mensaje de error este dentro del documento */
  });

  // eslint-disable-next-line jest/no-focused-tests
  it.only('campos llenos=> resolve', async () => {
    // DADO
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(components.signin());

    const buttonLogin = document.querySelector('#btn-signin');

    // CUANDO
    const email = 'hola@gmail.com';
    const password = 'holamundo';
    buttonLogin.click();
    console.log(email, password);

    // const complete = document.querySelector('#complete');
    await tick();
    // ENTONCES
    expect(window.location.hash).toBe('#/inicio');
    // verificar que el mensaje de error este dentro del documento
  });
  // it('Deber', () => {
  //   expect(formSignIn()).toBe('function');
  // });
  // eslint-disable-next-line eol-last
});