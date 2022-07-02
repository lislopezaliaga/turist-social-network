//vista de registro
export const formSignIn = () => {
    const signInContent = `
    <div>
        <input type= "text" placeholder= "Nombre">
        <input type="text" placeholder="Email">
        <input type="password">
        <button><a href="#/home">Registrarse</a></button>
        <a href="#/signup">Iniciar sesión</a>
    </div>
    `;
    const signInContainer = document.createElement('div');
    signInContainer.innerHTML =signInContent;
    return signInContainer;
};