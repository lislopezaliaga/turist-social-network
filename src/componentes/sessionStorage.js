// Llamar a sessionStorage
export const localStorageCall = () => {
  const userInfo = localStorage.getItem('USER');
  console.log(userInfo);
  const userObject = JSON.parse(userInfo);
  console.log(userObject);
  return userObject;
};
