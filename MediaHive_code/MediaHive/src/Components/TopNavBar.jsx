import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';

import '../Styles/TopNavBar.css';

function TopNavBar(){
    const [tituloPagina, setTituloPagina] = useState("Inicio");

    const handleClick = (nuevoTitulo) => {
        setTituloPagina(nuevoTitulo);
    };

    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web" class="img-navbar"/>
                <h2 class="h2-navbar">MediaHive</h2>
                <h3 className="tituloPagina">{tituloPagina}</h3>
                <h5 className="registro">Registrarse</h5>
                <h5>
                <Link to="/InicioSesion">
                    <button className="inicioSesion">Iniciar Sesion</button>
                </Link>
                </h5>
                
            </div>
        </nav>
    );
}

export default TopNavBar;