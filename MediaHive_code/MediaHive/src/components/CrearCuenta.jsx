import React from "react";
import '../Styles/CrearCuenta.css';
import imagen from "../Images/MediaHive_icon.png";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function CrearCuenta() {

  return(
    <div className="content-crear-cuenta">
      <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>
      
        <div className="crear-cuenta-container">
          <img className="imagen-crear-cuenta" src={imagen} alt="Icono de MediaHive"/>
          <div class="form-container">
            <label for="nombreUsuario" class="label-crear-cuenta">Nombre de usuario</label>
            <input type="text" name="nombreUsuario" maxLength={20} required class="input-crear-cuenta"/>
            <label for="correoElectrónico" class="label-crear-cuenta">Correo electrónico</label>
            <input type="email" name="correoElectrónico" required class="input-crear-cuenta"/>
            <label for="contraseña" class="label-crear-cuenta">Contraseña</label>
            <input type="password" name="contraseña" required class="input-crear-cuenta"/>
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
  );
}

export default CrearCuenta;