import {loginUsers} from '../firebase/config.js';
//vista inicio de sesión
export const formSignIn = () => {
    const formInit = `
    <div>
        <form id="formSignIn">
            <button id="buttonGoogle">continua con Google</button>
            <input id="emailSignIn" type="text" placeholder="Email">
            <input id="passwordSignIn" type="password">
            <button><a href = "#/home">Inicia Sesión</a></button>
            <a href= "#/signup">Registrarse</a>
        </form>
    </div>
    `;
    const formInitializacion = document.createElement('div');
    formInitializacion.innerHTML =formInit;
    return formInitializacion;
};

export const siginUsers=()=>{
    const formSignIn=document.querySelector('#formSignIn');
   
     formSignIn.addEventListener('submit',async(e)=>{
       e.preventDefault();
     // const nombre= formRegister['name'].value;
      const email= formSignIn['emailSignIn'].value;
      const password= formSignIn['passwordSignIn'].value;
      
       // await saveUsers(nombre,correo,contraseña);
       // formRegister.reset();
       try {
        await loginUsers(email,password);
        console.log(loginUsers(email,password));
       } catch (error) {
        console.log(error);
       
       }
       
       // console.log(addUsers());
    //    .then((userCredential) => {
    //      // Signed in
    //      const user = userCredential.user;
    //      console.log(user);
    //      // ...
    //    })
    //    .catch((error) => {
    //      const errorCode = error.code;
    //      console.log(errorCode );
    //      const errorMessage = error.message;
    //      console.log(errorMessage );
    //      // ..
    //    });
       
     })
   }
   
   
   
   
   