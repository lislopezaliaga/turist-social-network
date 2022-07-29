import { components } from '../src/views';

jest.mock('../src/firebase/firebaseconfig.js');

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

    // CUANDO
    buttonLogin.click();

    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    inputEmail.value = '';
    inputPassword.value = '';

    const complete = document.querySelector('#complete');

    // ENTONCES
    expect(complete.textContent).toEqual('Completa todos los datos');
    // verificar que el mensaje de error este dentro del documento
  });
  it('Deberia pasar', () => {
    // DADO
    const mainSection = document.createElement('div');
    mainSection.id = 'container';
    document.body.append(mainSection);
    mainSection.appendChild(components.signin());

    const buttonLogin = document.querySelector('#btn-signin');

    expect(buttonLogin instanceof HTMLElement).toBe(true);
    // obtener el boton

    // CUANDO
    buttonLogin.click();

    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');
    inputEmail.value = 'hola@gmail.com';
    inputPassword.value = 'holamundo';

    // const complete = document.querySelector('#complete');

    // ENTONCES
    expect(window.location.hash).toBe('#/inicio');
    // verificar que el mensaje de error este dentro del documento
  });
  // it('Deber', () => {
  //   expect(formSignIn()).toBe('function');
  // });
});
