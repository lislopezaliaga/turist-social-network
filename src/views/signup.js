export const formLogIn = () => {
    const formInit = `
    <div>
        <input type= "text" placeholder= "Nombre">
        <input type="text" placeholder="Email">
        <input type="password">
        <button>Registrarse</button>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};