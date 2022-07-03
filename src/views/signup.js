
import {addUsers} from '../firebase/config.js';

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
export const registerUsers=()=>{
 const formRegister=document.querySelector('#formRegister');

  formRegister.addEventListener('submit',async(e)=>{
    e.preventDefault();
  // const nombre= formRegister['name'].value;
   const correo= formRegister['email'].value;
   const contraseña= formRegister['pasword'].value;
   
    // await saveUsers(nombre,correo,contraseña);
    // formRegister.reset();
    await addUsers(correo,contraseña)
    // console.log(addUsers());
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode );
      const errorMessage = error.message;
      console.log(errorMessage );
      // ..
    });
    
  })
}




