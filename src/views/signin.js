export const formLogIn = () => {
    const formInit = `
    <div>
        <input type="text" placeholder="Email">
        <input type="password">
        <button>Inicia Sesión</button>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};
