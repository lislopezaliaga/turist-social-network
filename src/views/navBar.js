export const navBar = () => {
    const navContent = `
        <header>
            <ul>
            <li><a href="#/inicio">Inicio</a></li>
            <li><a href="#/amigos">Amigos</a></li>
            <li><a href="#/publicar">Publicar</a></li>
            </ul>
        </header>
    `;
    const navContainer = document.createElement('div');
    navContainer.innerHTML = navContent;
    return navContainer;
};