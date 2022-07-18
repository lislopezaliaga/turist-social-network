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
  <div class="logoTitle">
    <img class="logo2"  src="img/travels.png" width="220px" />
  </div>
    <div class="menuItems">
    <a href="#/inicio">
      <div class="homePng">
        <img class="iconhead" src="../img/homeicon.png" alt="inicio">
      </div>
    </a>
    
    <a href="#/viajeros">
      <div class="homePng">
        <img class="iconhead" src="../img/viajero.png" alt="viajeros">
      </div>
    </a>
     
    <a href="#/lugares">
      <div class="homePng">
        <img class="iconhead" src="../img/lugar.png" alt="lugares">
      </div>
    </a>
    </div>
    <div class="burgerMenu">
      <img class="logomenuh"  src="../img/perfilViajeros.jpg"/>
      <select>
        
      </select>
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