export const loginEmailPas = (email, password) => {
  if (email === '' || password === '') {
    return Promise.reject(new Error());
  }
  return Promise.resolve({
    user: {
      emailVerified: true,
    },
  });
};
