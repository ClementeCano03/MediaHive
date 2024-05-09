import React from "react";
import '../Styles/CrearCuenta.css';
import imagen from "../Images/MediaHive_icon.png";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function CrearCuenta() {

  const divStyle = {
    backgroundColor: '#E3E9EA',
    backgroundImage: 'none',
  };

  return(
    <>
      <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>
      <div className="content" style={divstyle}>
          <div className="crear-cuenta-container">
            <img className="imagen" src={imagen} alt="Icono de MediaHive"/>

            <div className="form-container">
              <label for="nombreUsuario">Nombre de usuario</label>
              <input type="text" name="nombreUsuario" maxLength={20} required/>
              <label for="correoElectrónico">Correo electrónico</label>
              <input type="email" name="correoElectrónico" required/>
              <label for="contraseña">Contraseña</label>
              <input type="password" name="contraseña" required/>
            </div>

            <Button 
              component={Link} 
              to="/Inicio" 
              variant="contained" 
              sx={{
                backgroundColor: '#f0cb06', 
                '&:hover': {
                  backgroundColor: '#0a6f94', 
                  color: 'black', 
                }
              }}
              className="boton-aceptar">
                ACEPTAR
            </Button>
          </div>
        </div>
    </>
  )
}

export default CrearCuenta;