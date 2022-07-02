export const home = () => {
    const homeContent = `
    <div>
        <input type="text" placeholder="buscar amigos">
    </div>
    `;
    const homeContainer = document.createElement('div');
    homeContainer.innerHTML = homeContent;
    return homeContainer;
};
