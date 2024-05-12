import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import '../Styles/TopNavBar.css';

function TopNavBar(){
    const username = localStorage.getItem('username');
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
                {username ? (
                    <div className="usuario">
                        <AccountBoxIcon className="icono-usuario"/>
                        <h5 className="username">{username}</h5>
                    </div>
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