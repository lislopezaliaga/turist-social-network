// export const initializeApp = () => ({});
// // // preguntar:

// export const emailVerificationHandler = () => Promise.resolve();

export const loginEmailPas = (email, password) => {
  if (email === '' || password === '') {
    return Promise.reject(new Error());
  }
  return Promise.resolve({
    user: {
      emailVerified: true,
      uid: '1244',
    },
  });
};
// ({
//   user: {
//     emailverified: true,
//   },
// });
// export const createUserWithEmailAndPassword
// = jest.fn((auth, email, password) => Promise.resolve());

// export const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
