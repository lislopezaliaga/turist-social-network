
import {saveTask} from '../firebase/config.js';

//vista de registro
//no funciona con el href nuestro botón
export  const formSingUp = () => {
    const formInit = `
    <div>
    <form id="formRegister">
        <input type= "text" placeholder= "Nombre" id="name">
        <input type="text" placeholder="Email" id="email">
        <input type="password" id="pasword">
        <button ><a href="#/home">Registrarse</a></button>
        <a href="#/signin">Iniciar sesión</a>
    </form>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
  
};
export const register=()=>{
 const formRegister=document.querySelector('#formRegister');

  formRegister.addEventListener('submit',async(e)=>{
    e.preventDefault();
   const nombre= formRegister['name'].value;
   const correo= formRegister['email'].value;
   const contraseña= formRegister['pasword'].value;
   
    await saveTask(nombre,correo,contraseña);
  })}




