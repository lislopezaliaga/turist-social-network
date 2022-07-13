export const postView = () => {
  const postContent = `
    <div>
    <img src="">
    <h3>Maria</h3>
  </div>
  <div>
    <p> Me encanto el viaje</p>
    <img src="" alt="">
  </div>
  <div>
    <button>me gusta</button>
    <h3> 3 personas les gusta</h3>
  </div>
      `;
  const postContainer = document.createElement('div');
  postContainer.setAttribute('class', 'postContainer');
  postContainer.innerHTML = postContent;
  return postContainer;
};
