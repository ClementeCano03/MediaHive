import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import '../styles/TopNavBar.css';

function TopNavBar(props){
    const username = localStorage.getItem('username');
    const profileImage = localStorage.getItem('profileImage');

    return(
        <div id="parent-container">
            <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web"/>
                <h2 className="nombre">MediaHive</h2>
                <h3 className="tituloPagina">{props.name}</h3>
                {username ? (
                    <Link to="/Perfil">
                        <div className="usuario-container-topnav">
                        {profileImage ? (  
                            <img src={profileImage} className="imagenPerfil-topnav"/>  
                        ) : (
                            <AccountBoxIcon style={{fill: "white"}} className="imagenPerfil-topnav"/>
                        )}
                            <h5 className="username-topnav">{username}</h5>
                        </div>
                    </Link>
                ) : (
                    <>
                        <h5>
                            <Link to="/CrearCuenta">
                                <button className="registro">Registrarse</button>
                            </Link>
                        </h5>
                        <h5>
                            <Link to="/InicioSesion">
                                <button className="inicioSesion">Iniciar Sesion</button>
                            </Link>
                        </h5>
                    </>
                )}
            </div>
        </nav>
    </div>
        
    );
}

export default TopNavBar;