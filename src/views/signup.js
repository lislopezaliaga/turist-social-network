//vista de registro
export const formSingUp = () => {
    const formInit = `
    <div>
        <input type= "text" placeholder= "Nombre">
        <input type="text" placeholder="Email">
        <input type="password">
        <button><a href="#/home">Registrarse</a></button>
        <a href="#/signin">Iniciar sesión</a>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};