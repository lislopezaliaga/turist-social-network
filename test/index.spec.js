/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// import { createNewUser } from '../src/firebase/firestore.js';

import { addUser, signInGoogle } from '../src/firebase/auth';

// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../src/firebase/firebaseconfig.js';

jest.mock('../src/firebase/firebaseconfig.js');

describe('signInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInGoogle).toBe('function');
  });

  it('Debería retornar una función', () => {
    expect(signInGoogle()).toEqual(signInWithPopup());
  });

  it('Debería llamar la función al menos una vez con los argumentos (email and password)', () => signInWithPopup()
    .then(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(signInWithPopup.mock.calls[0][1]).toEqual(new GoogleAuthProvider());
    }));
});

describe('addUser', () => {
  it('debería ser una función', () => {
    expect(typeof addUser).toBe('function');
  });

  it('Debería llamar la función una vez con los argumentos especificados(email and password)', () => {
    addUser('lucero@gmail.com', '123456');
    expect(createUserWithEmailAndPassword.mock.calls).toHaveLength(1);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('lucero@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });

  it('Funciona con un segundo llamado', () => {
    addUser('lu@gmail.com', '1234');
    expect(createUserWithEmailAndPassword.mock.calls).toHaveLength(2);
    expect(createUserWithEmailAndPassword.mock.calls[1][1]).toBe('lu@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[1][2]).toBe('1234');
  });
});

/* describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('addUser', () => {
  it('debería ser una funcion', () => {
    expect(typeof addUser).toBe('function');
  });
  it('Debería de poder registrar un usuario con email: hola@gmail.com y password:holacomoestas',
   () => addUser('hola@gmail.com', 'holacomoestas')
    .then((data) => {
      expect(data).toBe('hola@gmail.com', 'holacomoestas');
    }));
});

*/
