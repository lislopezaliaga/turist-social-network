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
  <nav class="nav">
    <img class="logo2"  src="img/travels.svg" width="220px" />
    <button class="nav-toggle"><i class="fa fa-bars"></i></button>
    <ul class="nav-menu">
      <li class="nav-menu-item">
        <a href="#/inicio" class="nav-menu-link nav-link"><img class="iconhead"   width=38px src="../img/hogar.png" alt="inicio"></a>
        <p class"textheaderi"> Inicio </p>
      </li>
      <li class="nav-menu-item">
        <a href="#/viajeros" class="nav-menu-link nav-link"><img class="iconhead" width=57px src="../img/mochileros.png" alt="viajeros"></a>
        <p class"textheaderi"> Mochileros </p>
      </li>
      <li class="nav-menu-item">
        <a href="#/lugares" class="nav-menu-link nav-link"><img class="iconhead"  width=38px src="../img/ubicaciones.png" alt="lugares"></a>
        <p class"textheaderi"> Lugares </p>
      </li>
    </ul>
    <div class="burgerMenu">
      <div id='perfilView'>
        <img class="logomenuh"  src="../img/user.png"/>
        <i class="fa fa-caret-down"></i>
        
      </div>
      <div id='optionsAccount'></div>
    </div>
  </nav>`;
  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'homeContainer');
  homeContainer.innerHTML = homeContent;

  const perfilview = homeContainer.querySelector('#perfilView');
  perfilview.addEventListener('click', () => {
    const optionsAccount = homeContainer.querySelector('#optionsAccount');
    const templateOptions = '<a href="#/perfil">Perfil</a><p>Cerrar Sesión</p>';
    optionsAccount.innerHTML = templateOptions;
  });
  return homeContainer;
};
