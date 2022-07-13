export const publicationView = () => {
  const publicationContent = `
  <div>
    <img src="">
    <h2>Noelia</h2>
  </div>
  <div>
    <img src="">
    <p>agrega una imagen</p>
  </div>
  <input placeholder="Escribe Algo">
  <button>publicar</button>
  <button>cancelar</button>
        `;
  const publicationContainer = document.createElement('div');
  publicationContainer.setAttribute('class', 'sectionPublication');
  publicationContainer.innerHTML = publicationContent;
  return publicationContainer;
};
