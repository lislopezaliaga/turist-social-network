//vista inicio de sesión
export const formSignIn = () => {
    const formInit = `
    <div>
        <input type="text" placeholder="Email">
        <input type="password">
        <button><a href = "#/home">Inicia Sesión</a></button>
        <a href= "#/signup">Registrarse</a>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};
