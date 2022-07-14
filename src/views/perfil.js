export const perfilView = () => {
  const tring = localStorage.getItem('USER');
  // const usuarioid = JSON.stringify();
  console.log(JSON.parse(tring).id);
  // eslint-disable-next-line no-undef
  const perfilContent = `
    
    <div class="divPerfil">
      <img id="imgPerfil" src="">
      <h2>hola</h2> 
    </div>
    <div class="divPerfil">
      <div class="divPerfil">
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
