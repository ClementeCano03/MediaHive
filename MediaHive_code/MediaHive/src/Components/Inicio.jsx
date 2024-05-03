import React from "react";
import TopNavBar from "./TopNavBar";
import LeftToolBar from "./LeftToolBar";
import '../Styles/Inicio.css';

function Inicio() {

  return(
    <div className="app-container">
      <TopNavBar />
      <div className="content">
        <LeftToolBar />
        <>
        <div>
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link> 
            <div class="cuadro-texto">
                <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
                <p class="text-wrap">
                    Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
                    Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
                    Debate en los diversos foros el últmo capítulo de tu serie en emisión. <br></br>
                </p>
            </div>
            <button className="boton-crear-cuenta" onClick={() => navigate('/CrearCuenta')}>CREAR CUENTA</button>
        </div>
        </>
      </div>
    </div>
  )
}

export default Inicio;
