// Llamar a sessionStorage
export const localStorageCall = () => {
  const userInfo = localStorage.getItem('USER');
  const userObject = JSON.parse(userInfo);
  return userObject;
};
