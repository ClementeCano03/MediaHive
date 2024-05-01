import React from "react";

function CrearCuenta({ cambiarTituloPagina }) {
  cambiarTituloPagina("CrearCuenta"); // Cambia el título de la página al cargar este componente

  return (
    <div>
      <h1>Crear Cuenta</h1>
    </div>
  );
}

export default CrearCuenta;