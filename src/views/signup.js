//vista de registro, es SIGNUP
/* <button><a href="#/home">Registrarse</a></button> */
import {
    setDoc, doc, db,
    createUserWithEmailAndPassword,
    auth, 
} from '../firebase/firebaseconfig.js';

export const formSignUp = () => {
    const signUpContent = `
    <form id = "signUpForm">
        <input type= "text" placeholder= "Nombre" id = "name">
        <input type="text" placeholder="Email" id = "email">
        <input type="password" id = "password">
        <button type= "submit" id ="btn-signup">Registrarse</button>
        <a href="#/signin">Iniciar sesión</a>
    </form>
    `;
    const signUpContainer = document.createElement('div');
    signUpContainer.innerHTML =signUpContent;

    signUpContainer.querySelector('#btn-signup').addEventListener('click', signUpHandler);
    

    return signUpContainer;
};

//Añadir nuevo usuario (Document) a users (colección)
function createNewUser (name, email, userId){
    setDoc(doc(db, 'users', userId), {
        name,
        email
    });
    console.log('estoy llamando a createuser');
}

export const signUpHandler = (e) => {
    e.preventDefault();
    const signUpForm = document.querySelector('#signUpForm');
    const name = signUpForm['name'].value;
    const email = signUpForm['email'].value;
    const password = e.target.closest('#signUpForm').querySelector('#password').value;
    console.log(email + ' y ' + password)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Agregar nvo user
        const emailRegister = userCredential.user.email;
        const userIdRegister = userCredential.user.uid;
        console.log(userCredential);
        console.log(emailRegister, userIdRegister);
        createNewUser(name, emailRegister, userIdRegister);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error en signup', errorMessage, errorCode);
    });
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