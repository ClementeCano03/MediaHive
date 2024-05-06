import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/Inicio.css";

function Inicio() {

  return (
    <>
      <div className="content">
        <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link> 
        <div className="cuadro-texto">
          <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
          <p className="text-wrap">
              Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
              Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
              Debate en los diversos foros el último capítulo de tu serie en emisión. <br></br>
          </p>
          
          <Link to="/CrearCuenta">
            <Button id="botonCrearCuenta" variant="contained">
              Registrarse
            </Button>
          </Link>
          
          <Link to="/InicioSesion">
            <Button id="botonInicioSesion" component={Link} to="/InicioSesion" variant="contained">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Inicio;
