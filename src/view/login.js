
export const formLogIn = () => {
    const formInit = `
    <form>
        <input type="text" placeholder="Email">
        <input type="password">
        <button>Inicia Sesión</button>
    </form>
          `;
    const formInitializacion = document.createElement('form');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};
  