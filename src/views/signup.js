//vista inicio de sesión
export const formSignUp = () => {
    const  signUpContent = `
    <div>
        <input type="text" placeholder="Email">
        <input type="password">
        <button><a href = "#/home">Inicia Sesión</a></button>
        <a href = "#/signin">Registrarse</a>
    </div>
    `;
    const signUpContainer = document.createElement('div');
    signUpContainer.innerHTML = signUpContent;
    return signUpContainer;
};
