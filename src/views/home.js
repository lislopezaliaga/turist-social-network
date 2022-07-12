// Llamar a sessionStorage
const sessionStorageCall = () => {
  let userData = sessionStorage.getItem('user');
  console.log(sessionStorage);
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
const userInfo = sessionStorageCall();

export const home = () => {
  const homeContent = `
    <div>
        <input type="text" placeholder="buscar amigos">
    </div>
    <div class="contenidoTextPerfil">
      <h2>${userInfo.email}</h2>
      <p>${userInfo.name}</p>
    </div>
    `;
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = homeContent;
  return homeContainer;
};
