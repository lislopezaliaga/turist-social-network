// Llamar a sessionStorage
export const sessionStorageCall = () => {
  let userData = sessionStorage.getItem('user');
  console.log(sessionStorage.getItem('user'));
  if (!userData) {
    userData = {
      username: '',
      name: '',
    };
  } else {
    userData = JSON.parse(sessionStorage.user);
  }
  return userData;
};
