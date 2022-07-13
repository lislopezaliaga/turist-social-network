export const inicioView = () => {
  const inicioContent = `
    <div>
    </div>
      `;
  const inicioContainer = document.createElement('div');
  inicioContainer.setAttribute('id', 'divInicio');
  inicioContainer.innerHTML = inicioContent;
  return inicioContainer;
};
