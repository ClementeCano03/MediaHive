import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import '../Styles/TopNavBar.css';

function TopNavBar(props){
    const username = localStorage.getItem('username');
    const profileImage = localStorage.getItem('profileImage');
    //localStorage.clear();


    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web" class="img-navbar"/>
                <h2 class="h2-navbar">MediaHive</h2>
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
                        <h5 className="registro">Registrarse</h5>
                        <h5>
                            <Link to="/InicioSesion">
                                <button className="inicioSesion">Iniciar Sesion</button>
                            </Link>
                        </h5>
                    </>
                )}
            </div>
        </nav>
    );
}

export default TopNavBar;