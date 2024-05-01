import React from "react";

function Inicio({ cambiarTituloPagina }) {
  cambiarTituloPagina("Inicio"); // Cambia el título de la página al cargar este componente

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}

export default Inicio;
