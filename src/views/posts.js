import { actualizarPosts } from '../firebase/firestore.js';
// import useTimeAgo from './timeago.js';

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
      // const a = await getUserById(dato.userId, 'users');
      // const timeago = useTimeAgo(+element.data().timestamp.toDate());
      // console.log(timeago);
      // getUserById(dato.userId, 'users').then((userPost) => {
      // ${userPost.name}
      // console.log(userPost);
      const postContent = `
        <div class="postNameImage">
          <img src="${dato.photoCreator}" width="50px">
          <h3>${dato.nameCreator}</h3>
          <span>${dato.dateTime}</span>
        </div>
        <div class="postText">
          <p> ${dato.publication}</p>
        </div>
        <div>
        <img src='${dato.imgPost}'>
        </div>
        <div class="postReaction">
          <button>me gusta</button>
          <h3> 3 personas les gusta</h3>
        </div>
            `;
      postContainerGeneral.innerHTML += postContent;
      postContainer.appendChild(postContainerGeneral);
    });
  });
};
