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
    <img class="logo2"  src="img/viajeros.png" width="50px" />
    <h2> Travelers</h2>
  </div>
    <div class="menuItems">
    <a href="#/inicio">
      <div class="homePng">
        <img src="../img/home.png" alt="">

      </div>
    </a>
    
    <a href="#/viajeros">
      <div class="homePng">
        <img src="../img/backpack.png" alt="">

      </div>
    </a>
     
    <a href="#/lugares">
      <div class="homePng">
        <img src="../img/places.png" alt="">

      </div>
    </a>
    </div>
    <div class="burgerMenu">
      <img class="logo2"  src="../img/perfilViajeros.jpg"/>
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
