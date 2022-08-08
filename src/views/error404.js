export default () => {
  // CREACIÓN DEL TEMPLATE
  const viewError = `
      <div id = 'view404'>
        <h1>Error 404, Página no encontrada</h1> <br>
        <img src="img/imgxf" >
      </div>
        `;
  // CREANDO NODO SECTION
  const section = document.createElement('section');
  section.setAttribute('class', 'error-style');
  section.innerHTML = viewError;
  return section;
};
