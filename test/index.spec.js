import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user_a: {
          age: 15,
          username: 'user_a',
        }
      }
    }
  }
};
window.firebase = new MockFirebase(fixtureData);

// eslint-disable-next-line import/no-unresolved
global.firebase = firebaseMock();
// eslint-disable-next-line import/no-unresolved
import { myFunction } from '../src/lib/index';

import { addUser } from '../src/firebase/auth';



describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('addUser', () => {
  it('debería ser una funcion', () => {
    expect(typeof addUser).toBe('function');
  });
  it('Debería de poder registrar un usuario con email: hola@gmail.com y password:holacomoestas', () => addUser('hola@gmail.com', 'holacomoestas')
    .then((data) => {
      expect(data).toBe('hola@gmail.com', 'holacomoestas');
    }));
});
