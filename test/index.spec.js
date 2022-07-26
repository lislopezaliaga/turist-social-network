// eslint-disable-next-line import/no-unresolved
/* eslint-disable jest/prefer-to-have-length */
// import MockFirebase from 'mock-cloud-firestore';
// eslint-disable-next-line import/no-unresolved
// import { createNewUser } from '../src/firebase/firestore.js';

import { addUser } from '../src/firebase/auth';

// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from '../src/firebase/firebase-mock.js';

jest.mock('../src/firebase/firebase-mock.js');

describe('addUser', () => {
  it('Debería llamar la función una vez con los argumentos especificados(email and password)', () => {
    addUser('lucero@gmail.com', '123456');
    expect(createUserWithEmailAndPassword.mock.calls.length).toBe(1);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('lucero@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
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
