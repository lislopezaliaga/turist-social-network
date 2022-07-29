
export const initializeApp = () => ({});
export const getAuth = () => ({});

export const signInWithEmailAndPassword = (auth, email, password) => {
  if (email === '' || password === '') {
    return Promise.reject(new Error());
  }
  return Promise.resolve({ emailverified: { } });
};

// // preguntar:
