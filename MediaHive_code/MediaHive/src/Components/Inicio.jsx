import React from "react";
import LeftToolBar from "./LeftToolBar";
import TopNavBar from "./TopNavBar";

function Inicio() {

  return (
    <>
    <TopNavBar/>
    <div className="contenido">
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
    <LeftToolBar/>
    
    </>
    
  );
}

export default Inicio;
