export const perfilView = () => {
  const perfilContent = `
    
    <div>
      <img id="imgPerfil" src="">
      <h2>hola</h2> 
    </div>
    <div>
      <div>
        <h3>Descripción</h3>
        <p>Arquitecto, viajero y amante de las mascotas</p>
      </div>
      <div>
        <h3>País</h3>
        <p>Colombia</p>
      </div>
      <div>
        <h3>Intereses</h3>
        <p>Viajes de playa</p>
          <p> mascotas</p>
          <p> Paisajes de campo</p>
      </div>
    </div>

      `;
  const perfilContainer = document.createElement('section');
  perfilContainer.setAttribute('class', 'sectionPerfil');
  perfilContainer.innerHTML = perfilContent;
  return perfilContainer;
};
