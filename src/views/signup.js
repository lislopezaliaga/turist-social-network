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
        <h2 class="bienvenidos"> Bienvenidos a Viajeros </h2>
<<<<<<< HEAD
        <input type= "text" placeholder= "Nombre" id ="name"  Required>
        <label id="nameAlert"></label>
        <input type="email" placeholder="Email" id = "email" Required>
        <label id="invalidEmail"></label>
        <input type="password" placeholder="Contraseña" id = "password" Required>
=======
        <input type= "text" placeholder= "Nombre" id ="name" name = "name"  required = "required">
        <label id="nameAlert"></label>

        <input type="email" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Invalid email address" />
        <label id="invalidEmail"></label>

        <input type="password" placeholder="Contraseña" id = "password" name = "password" required = "required">
>>>>>>> 333f85ff6c267b480defd41430ba1f8f16dec2f5
        <label id="invalidPassword"></label>
        <div>
            <p>Acepto los <span>Términos y condiciones</span> de las Políticas de Privacidad.</p>
        </div>
        <button type= "submit" id ="btn-signup">Registrarse</button>
        <p>¿Ya tienes una cuenta?<a href="#/signin">Inicia sesión</a></p>
       
    </form>
    `;
    const signUpContainer = document.createElement('div');
    signUpContainer.innerHTML =signUpContent;

    signUpContainer.querySelector('#btn-signup').addEventListener('click', signUpHandler);

    return signUpContainer;
};
function validarDatos(){
    if (name==""|| email=="" || password=="" ){
        invalidPassword.innerHTML ='Completar todos los datos';
        setTimeout(() => {
            invalidPassword.innerHTML = '';
        }, 5000);
    }
    let expressionemail=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if ( expressionemail.test(email)==false ){
        invalidPassword.innerHTML ='Formato de email incorrecto';
        setTimeout(() => {
            invalidPassword.innerHTML = '';
        }, 5000);
    }

export const signUpHandler = (e) => {
    e.preventDefault();
    const signUpForm = document.querySelector('#signUpForm');
    const name = signUpForm['name'].value;
    const email = signUpForm['email'].value;
    const password = e.target.closest('#signUpForm').querySelector('#password').value;
    validarDatos();
    console.log(email + ' y ' + password)

    validarDatos(name, email, password);

    if(name.length!=0){
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
            console.log('error en signup', errorMessage, errorCode);
            /**Haciendo las validaciones  */
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                const invalidEmail=document.querySelector('#invalidEmail');
                invalidEmail.innerHTML = 'Ingrese un correo Válido';
                setTimeout(() => {
                  invalidEmail.innerHTML = '';
                }, 5000);
              } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                const invalidPassword=document.querySelector('#invalidPassword');
                invalidPassword.innerHTML ='La contraseña debe tener al menos 6 caractéres';
                setTimeout(() => {
                    invalidPassword.innerHTML = '';
                }, 5000);
              } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                invalidEmail.innerHTML = 'El correo está asociado a una cuenta existente';
                setTimeout(() => {
                    invalidEmail.innerHTML = '';
                }, 5000);
              } /* else if (error.message === 'Firebase: Error (auth/missing-email).'
                || !email.value.includes("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")) {
                invalidEmail.innerHTML = 'Ingrese un correo electrónico válido';
                setTimeout(() => {
                    invalidEmail.innerHTML = '';
                }, 5000);
              } */ else {
                console.log(error.message) 
              }
        });
    }/* else{
        const name = document.querySelector('#nameAlert');
        name.innerHTML="Ingrese un nombre de usuario";
        setTimeout(() => {
            name.innerHTML = '';
        }, 5000);
        console.log(name.length);
    } */
    
}
let expressionemail=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    console.log(expressionemail.test(name));
    if ( expressionemail.test(name)==false ){
        invalidPassword.innerHTML ='Formato de email incorrecto';
        setTimeout(() => {
            invalidPassword.innerHTML = '';
        }, 5000);
    }



    
/* signInWithRedirect(auth, provider);

getRedirectResult(auth)
.then((result) => {
// This gives you a Google Access Token. You can use it to access Google APIs.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
console.log(token);
// The signed-in user info.
const emailRegister = user.email;
const userIdRegister = user.uid;

createNewUser(emailRegister, userIdRegister);
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
console.log('error en signup', errorMessage, errorCode);

// The email of the user's account used.
const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
console.log(email + ' y '+ credential)
}); */