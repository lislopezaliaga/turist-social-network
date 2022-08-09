# A+Aventuras Social Network

## Índice

* [1. Resumen del proyecto](#1-Resumen-del-proyecto)
* [2. Resumen del proyecto](#2-Descripción-del-proyecto)
* [2.1. Objetivos de aprendizaje](#2.1-Vista-Final-de-Proyecto)
* [2.2. Vista Móvil](#2.2-Vista-Móvil)
* [2.3. Vista Desktop](#2.3-Vista-Desktop)
* [3. Investigación UX](#3-Investigación-UX)
* [Checklist](#9-checklist)

## 1. Resumen del proyecto -- 📝

Este proyecto tiene como finalidad construir una red social para viajeros, en la cual puedan compartir sus experiencias mediante fotografías y comentarios del lugar que visitaron. 

## 2. Descripción del proyecto 📎
//que problemas resuelve y principales usuarios del producto
La red social A+Aventuras va dirigida solo a usuarios viajeros

#### ¿Cuál es la necesidad o el problema que A+Aventuras busca solucionar?
A+Aventuras es una excelente plataforma para que cualquier usuario pueda promocionar el turismo de diferentes del mundo, al publicar redactar su experiencia y publicar una fotografía del lugar. 
#### ¿Para quién está diseñado A+Aventuras exactamente?
Para aquellos usuarios que buscan una red social donde puedan compartir el lugar de destino del viaje, las fotos y sus intereses al viajar.

### 2.1 Vista Final de Proyecto 👩🏻‍🎨🎨

Para el proyecto se opto por un estilo explorador, ya que nuestro objetivo es poder mostrar las publicaciones de los usuarios de forma clara, precisa y divertida, y que a su vez pueda ser atractiva ante la vista de otros viajeros y de esta forma, ellos se animen a realizar sus propias publicaciones.
 

### 2.2 Vista Móvil 📲

![prototipo1](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/signinM.png)

![prototipo2](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/signupM.png)

![prototipo3](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/PublicationM.PNG)
![prototipo4](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/PostM.PNG)
![prototipo5](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/mochilerosM.png)
![prototipo6](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/EditProfileM.png)


### 2.3 Vista Desktop  💻

![prototipo1](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/dDsignin.png)
![prototipo2](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/dSignup.png)
![prototipo3](https://github.com/lislopezaliaga/turist-social-network/blob/main/src/img/dPost.png)


### 3.2. Historias de Usuario y Criterios de Aceptación  📢📝
```
HU 1:  🗣️ Como usuario viajero QUIERO suscribirme a la red social A+Aventuras 
PARA crear mis publicaciones.

 📍 Criterios de Aceptación:
- [✔️] Registrarse como nuevo usuario
- [✔️] Ingresar como usuario de Google
- [✔️] Validar que no puede crear su cuenta con campos vacíos o información erronea.
- [✔️] Iniciar sesión con su cuenta creada
- [✔️] El usuario debe poder ingresar a Home una vez validado su correo
- [✔️] Crear test  de validación en los campos vacíos
- [✔️] Test de cambio de vista cuando inicia sesión


 🏁 Definición de terminado:
- [✔️] El usuario puede registrarse con su correo electrónico y un nickname único. Además, luego podrá  iniciar sesión con esa cuenta creada.
- [✔️] Debe existir validaciones para que el usuario pueda loguearse
- [✔️] La vista debe ser responsive, similitud con el prototipo de alta fidelidad.

```

```
HU 2:  🗣️ Como usuario viajero QUIERO poder subir una imagen y pequeña descripción del lugar que visité como una publicación PARA compartir el destino al que viajé con la comunidad viajera.

 📍 Criterios de Aceptación:
- [✔️] El usuario debe poder postear texto o imágenes en su muro, previa validación de contenido.
- [✔️] El usuario debe poder escoger otra imagen .
- [✔️] Al publicar el post se muestre en la parte superior del timeline.


 🏁 Definición de terminado:
- [✔️] El usuario puede realizar un post con su usuario registrado
- [✔️] Almacenar publicaciones de los usuarios
- [✔️] Diseño responsive, similitud con el prototipo de alta fidelidad

```
```
HU 3:  🗣️ Como usuario viajero QUIERO poder editar mis publicaciones PARA corregir cualquier error que cometí.

 📍 Criterios de Aceptación:
- [✔️] Aparezca un modal para poder editar el texto y/o imagen del post.
- [✔️]Al confirmar la edición se muestre en el timeline el post actualizado.


 🏁 Definición de terminado:
- [✔️] El usuario puede editar solo sus posts.
- [✔️] Se muestre en tiempo real actualizado su post.

```
HU 4:  🗣️ Como usuario viajero QUIERO poder eliminar mis publicaciones PARA que no exista en el muro ese post.

 📍 Criterios de Aceptación:
- [✔️] Tenga una opción de eliminar un post específico.
- [✔️]Antes de eliminar un post me dé la opción de confirmación a travez de un modal.
- [✔️]Una vez dada la confirmación ya no se debe mostrar en timeline.


 🏁 Definición de terminado:
- [✔️] El usuario puede eliminar solo sus posts.
- [✔️] Desaparezca el post de las demas publicaciones.

```
HU 5:  🗣️ Como usuario viajero QUIERO poder dar like a mis publicaciones y tambien a las de otro PARA demostrar que me encanta dicha publicación.

 📍 Criterios de Aceptación:
- [✔️] Tenga una opción para dar me gusta a la publicación.
- [✔️] Debe aumentar el contador de likes.
- [✔️] Poder quitar el like y disminuir el contador.



 🏁 Definición de terminado:
- [✔️] El usuario da like a los posts.
- [✔️] El contador de like aumenta en 1.

```
HU 6:  🗣️ Como usuario viajero QUIERO poder ver mis datos en la sección principal PARA ver mi información y foto de Perfil si es que me animo a cambiarla.

 📍 Criterios de Aceptación:
- [✔️] La vista principal tenga una pequeña sección de su imagen y nombre del usuario.
- [✔️] Cuente con datos principales como País/Descripción/Intereses .

 🏁 Definición de terminado:
- [✔️] El usuario puede ver su información personal.

```
```
HU 7:  🗣️ Como usuario viajero QUIERO poder editar mi perfil PARA cambiar la información que no me gusta.

 📍 Criterios de Aceptación:
- [✔️] Tenga una opción para editar su perfil.
- [✔️] En un modal aparezca los Datos del usario imagen y nombre y deccripción.
- [✔️] El usuario pueda cambiar de foto de perfil.
- [✔️] El usuario pueda cambiar sus datos en Inputs.
- [✔️] El usuario puede guardar los cambios y actualizar en tiempo real.



 🏁 Definición de terminado:
- [✔️] El usuario edita su perfil.
- [✔️] El usuario ve la actualización en tiempo real.

```

```
🗣️ HU 8: Como usuario viajero QUIERO poder ver a otros amigos viajeros PARA ver quienes son.


 📍 Criterios de Aceptación:
- [✔️] El usuario puede ver la información de todos los usuarios suscritos a la red social.


 🏁 Definición de terminado:
- [✔️]En la sección mochileros se ve todos los usuarios suscritos a nuestra red.


```
## 4. Autoras ✒️
Elaborado con 💛❤️ por:

😊 **Lisbeth Lopez** - [lislopezaliaga](https://github.com/lislopezaliaga)

😊 **Daniela Fuentes** - [fifete](https://github.com/fifete)

😊 **Paola Gamarra** - [gpaolag](https://github.com/gpaolag) 

## 6. Objetivos de aprendizaje 📄
### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

- [x] **Modelo de caja (box model): borde, margen, padding**

- [x] **Uso de flexbox en CSS**

- [x] **Uso de CSS Grid Layout**

### Web APIs

- [x] **Uso de selectores del DOM**

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [x] **Manipulación dinámica del DOM**

- [x] **Ruteado (History API, evento hashchange, window.location)**

### JavaScript

- [x] **Arrays (arreglos)**

- [x] **Objetos (key, value)**

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Variables (declaración, asignación, ámbito)**

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [x] **Uso de bucles/ciclos (while, for, for..of)**

- [x] **Funciones (params, args, return)**

- [x] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [x] **Uso de mocks y espías**

- [x] **Módulos de ECMAScript (ES Modules)**

- [x] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x] **Callbacks**

- [x] **Promesas**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [x] **Crear prototipos para obtener feedback e iterar**

- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

- [x] **Planear y ejecutar tests de usabilidad**

### Firebase

- [x] **Firebase Auth**

- [x] **Firestore**




