import React from "react";
import imagen from "../images/MediaHive_icon.png";
import { Link } from 'react-router-dom';

import '../styles/TopNavBar.css';

function TopNavBar({tituloPagina}){
    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
            <Link to="/Components/Inicio.jsx" className="imagen-link">
                    <img className="imagen" src={imagen} alt="Imagen de la web"/>
            </Link>
                <h2>MediaHive</h2>
                <h3 className="tituloPagina">{tituloPagina}</h3>
                <h5 className="registro">Registrarse | Inicar Sesión</h5>
            </div>
        </nav>
    );
}

export default TopNavBar;
