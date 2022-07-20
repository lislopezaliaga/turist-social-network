import { localStorageCall } from '../componentes/sessionStorage.js';
import { actualizarPosts, getUserById, updateLikes } from '../firebase/firestore.js';



export const postView = () => {
  actualizarPosts((querySnapshoot) => {
    /** Seleccionamos al container para añadir el post */
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';
    /** Creamos un div post content */
    const postContainerGeneral = document.createElement('div');
    postContainerGeneral.setAttribute('class', 'postsContent');
    postContainerGeneral.innerHTML = '';

    querySnapshoot.forEach((element) => {
      const dato = element.data();
      // console.log(element.id);
      const idPost = element.id;

      const postContent = `
      <div class="postindividual" id='${idPost}'>
        <div class="postNameImage">
          <img class="iconpost" src="${dato.photoCreator}" width="50px">
          <div>
            <h3 class="namepost">${dato.nameCreator}</h3>
            <span class="datepost"> ${dato.dateTime}</span>
          </div>
        </div>
        <div class="postText">
          <p class="texto"><i class="fa fa-quote-left"></i> ${dato.publication} <i class="fa fa-quote-right"></i></p>
        </div>
        <div class="imgpost">
        <img class="imgposted" src='${dato.imgPost}'>
        </div>
        <div class="postReaction">
          <i class="fa fa-heart like" name="${idPost}"></i>
          <h3> 3 personas les gusta</h3>
        </div>
      </div>
            `;
      postContainerGeneral.innerHTML += postContent;
      postContainer.appendChild(postContainerGeneral);
      const buttonLikes = postContainer.querySelector('.like');
      buttonLikes.addEventListener('click', likesHandler);
    });
  });
};

async function likesHandler(e) {
  const btnLike = e.target;

  const idUser = localStorageCall().id;
  console.log(idUser);

  const idPost = btnLike.getAttribute('name');
  console.log(idPost);

  const dataPost = await getUserById(idPost, 'posts');
  console.log(dataPost);

  if (dataPost.likes.includes(idUser)) {
    // esto es para quitar el like por usuario
    // subirLikes(idLike, dataPost.likes.filter((item) => item !== userData.id));
    // btnLike.style.color = '#8F7D7D';
    console.log('like dado');
  } else {
    // esto es para agregar like por usuario
    await updateLikes(idPost, [...dataPost.likes, idUser]);
    
    // console.log('like recien dado');

}
}