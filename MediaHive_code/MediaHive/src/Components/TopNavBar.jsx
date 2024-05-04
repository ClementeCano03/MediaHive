import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';

import '../styles/TopNavBar.css';

function TopNavBar(){
    const [tituloPagina, setTituloPagina] = useState("Inicio");

    const handleClick = (nuevoTitulo) => {
        setTituloPagina(nuevoTitulo);
    };

    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web"/>
                <h2>MediaHive</h2>
                <h3 className="tituloPagina">{tituloPagina}</h3>
                <h5 className="registro">Registrarse</h5>
                <h5>
                    <button className="inicioSesion">Iniciar Sesion</button>
                </h5>
                
            </div>
        </nav>
    );
}

export default TopNavBar;
