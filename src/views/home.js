export const home = () => {
    const homeContent = `
    <div>
        <header>
            <ul>
            <li><a href="#/inicio">Inicio</a></li>
            <li><a href="#/amigos">Amigos</a></li>
            <li><a href="#/publicar">Publicar</a></li>
            </ul>
        </header>
        <input type="text" placeholder="buscar amigos">
    </div>
    `;
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = homeContent;
    return homeContainer;
};
