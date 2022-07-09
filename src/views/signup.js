//vista de registro, es SIGNUP
/* <button><a href="#/home">Registrarse</a></button> */

import{createNewUser} from '../firebase/firestore.js'
import{addUser,emailVerificationHandler} from '../firebase/auth.js'
import { doc } from '../firebase/firebaseconfig.js';



export const formSignUp = () => {
    const signUpContent = `
    <form id = "signUpForm">
        <div class="imgLogo">
            <img src="img/viajeros.png" width="200px"/>
        </div>
        <h2 class="bienvenidos">Bienvenido a Travels </h2>
        <label id="complete"></label>
        <input type= "text" placeholder= " Nombre" id ="name"  Required>
        <label id="nameAlert"></label>
        <input type="email" placeholder="  Correo Electrónico" id = "email" Required>
        <label id="invalidEmail"></label>
        <input type="password" placeholder="  Contraseña" id = "password" Required>
        <label id="invalidPassword"></label>
        <div class="termsConditions">
            <input type="checkbox" required="">
            <p class="smallText">Acepto los <span>Términos y condiciones</span> de las Políticas de Privacidad.</p>
        </div>
        <button type= "submit" id ="btn-signup">Registrarse</button>
        <p class="smallText">¿Ya tienes una cuenta?<a href="#/signin">Inicia sesión</a></p>
       
    </form>
    `;
    const signUpContainer = document.createElement('div');
    signUpContainer.innerHTML =signUpContent;

    signUpContainer.querySelector('#btn-signup').addEventListener('click', signUpHandler);

    return signUpContainer;
};


let expressionemail=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

function verifyCompletedInput (name, email, password){
    const invalidEmail = document.querySelector('#invalidEmail');
    const invalidPassword = document.querySelector('#invalidPassword');
    const complete = document.querySelector('#complete');
    
    if (name==""|| email=="" || password=="" ){
        complete.innerHTML ='Completa todos los datos';
        cleanErrorMsm (complete);
    }

    if (email !== '' ){
        if (expressionemail.test(email) == false){
            invalidEmail.innerHTML ='Ingrese un correo válido';
            cleanErrorMsm (invalidEmail);
        }
    }
}

export const signUpHandler = (e) => {
    e.preventDefault();
    const signUpForm = document.querySelector('#signUpForm');
    const name = signUpForm['name'].value;
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;
    console.log(email + ' y ' + password)

    verifyCompletedInput(name, email, password);

    addUser(email,password)
    .then((userCredential) => {
        // Agregar nuevo user
        const user = userCredential.user;
        const emailRegister = user.email;
        const userIdRegister = user.uid;
        console.log(userCredential);
        console.log(emailRegister, userIdRegister);

        emailVerificationHandler().then(() => {   
            createNewUser(name, emailRegister, userIdRegister);                    
        })
        window.location.hash = '#/signin';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        /* Mostrar errores al usuario al momento del registro de su cuenta  */
        if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            invalidPassword.innerHTML ='La contraseña debe tener al menos 6 caracteres';
            cleanErrorMsm (invalidPassword);

        } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            invalidEmail.innerHTML = 'El correo está asociado a una cuenta existente';
            cleanErrorMsm (invalidEmail);

        } else {
            console.log('error en signup', errorMessage, errorCode);
        }
    });
}

//Limpiar los mensajes de alerta dados al user
export const cleanErrorMsm = (containerMsm) => {
    setTimeout(() => {
        containerMsm.innerHTML = '';
    }, 4000);
}
