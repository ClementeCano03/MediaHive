import React from "react";
import imagen from "../images/MediaHive_icon.png";

import "../styles/TopNavBar.css";

function TopNavBar(){
    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web"/>
                <h2>MediaHive</h2>
                <h3 className="tituloPagina">Musica</h3>
                <h5 className="registro">Registrarse | Inicar Sesión</h5>
            </div>
        </nav>
    );
}

export default TopNavBar;
