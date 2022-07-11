// importamos la funcion que vamos a testear
import { addUser } from '../src/firebase/auth';

import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('addUser', () => {
  it('debería ser una funcion', () => {
    expect(typeof addUser).toBe('function');
  });
  it('Debería de poder registrar un usuario con email: hola@gmail.com y password:holacomoestas', () => {
    addUser('hola@gmail.com', 'holacomoestas')
      .then(() => {
        addUser('hola@gmail.com', 'holacomoestas');
        addUser('hola@gmail.com', 'holacomoestas');
      });
  });
});
