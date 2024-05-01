import React from "react";

function Peliculas({ cambiarTituloPagina }) {
  cambiarTituloPagina("Películas"); // Cambia el título de la página al cargar este componente

  return (
    <div>
      <h1>Página de Películas</h1>
      <p>Aquí puedes ver nuestras películas disponibles.</p>
    </div>
  );
}

export default Peliculas;
