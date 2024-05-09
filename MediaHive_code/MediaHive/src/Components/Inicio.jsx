import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../Styles/Inicio.css';

function Inicio() {

  return(
      <>
        <div className="content">
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link> 
            <div class="cuadro-texto">
                <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
                <p class="text-wrap">
                    Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
                    Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
                    Debate en los diversos foros el últmo capítulo de tu serie en emisión. <br></br>
                </p>
            </div>
              <Button 
                component={Link} 
                to="/CrearCuenta" 
                variant="contained" 
                sx={{
                  backgroundColor: '#5D787D', 
                  '&:hover': {
                    backgroundColor: '#455559', // Change this to your preferred hover color
                    color: 'black', // Change this to your preferred text color on hover
                  }
                }}
                color="primary" 
                className="boton-crear-cuenta">
                  CREAR CUENTA
                </Button>
        </div>
      </>
  )
}

export default Inicio;
