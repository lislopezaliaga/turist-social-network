export const initializeApp = () => ({});
export const getAuth = () => ({});

export const signInWithEmailAndPassword = (auth, email, password) => {
  if (email === '' || password === '') {
    console.log('vacio em y pass');
    return Promise.reject(new Error());
  }
  return Promise.resolve({
    user: {
      emailVerified: true,
    },
  });
};
