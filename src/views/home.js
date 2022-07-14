// // Llamar a sessionStorage
// const sessionStorageCall = () => {
//   let userData = sessionStorage.getItem('user');
//   console.log(sessionStorage);
//   if (!userData) {
//     userData = {
//       username: '',
//       name: '',
//     };
//   } else {
//     userData = JSON.parse(sessionStorage.user);
//   }
//   return userData;
// };
// const userInfo = sessionStorageCall();
export const home = () => {
  const homeContent = `
  <nav>
    <img class="logo2"  src="img/viajeros.png" width="50px"/>
    <ul class="navBar">
      <li><a href="#/inicio">INICIO</a></li>
      <li><a href="#/viajeros">VIAJEROS</a></li>
      <li><a href="#/lugares">LUGARES</a></li>
    </ul> 
    <div class="burgerMenu">
      <img class="logo2"  src="img/viajeros.png" width="50px"/>
      <p>*</p>
    </div>
  </nav>
  <div id="mainContent">
  </div>
    `;
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'homeContainer');
  homeContainer.innerHTML = homeContent;
  return homeContainer;
};
