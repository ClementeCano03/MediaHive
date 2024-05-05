import React from "react";
import TopNavBar from "./TopNavBar";
import LeftToolBar from "./LeftToolBar";
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
    
    <div className="app-container" style={divStyle}>
      <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>
      <TopNavBar />
      <div className="content">
        <LeftToolBar /> 
        <div className="container">

          <div className="crear-cuenta-container">
            <img className="imagen" src={imagen} alt="Icono de MediaHive"/>

            <div className="form-container">
              <label for="nombreUsuario">Nombre de usuario</label>
              <input type="text" name="nombreUsuario"/>
              <label for="correoElectrónico">Correo electrónico</label>
              <input type="email" name="correoElectrónico"/>
              <label for="contraseña">Contraseña</label>
              <input type="password" name="contraseña"/>
            </div>

            <Button 
              component={Link} 
              to="/Inicio" 
              variant="contained" 
              sx={{
                backgroundColor: '#00A9D3', 
                '&:hover': {
                  backgroundColor: '##0a6f94', // Change this to yourpreferred hover color
                  color: 'black', // Change this to your preferredtext color on hover
                }
              }}
              color="primary" 
              className="boton-aceptar">
                ACEPTAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearCuenta;