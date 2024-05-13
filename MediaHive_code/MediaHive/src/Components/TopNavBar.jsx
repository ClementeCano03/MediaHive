import React, { useState } from "react";
import imagen from "../Images/MediaHive_icon.png";
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import '../styles/TopNavBar.css';

function TopNavBar(props){
    const username = localStorage.getItem('username');
    const [tituloPagina, setTituloPagina] = useState("Inicio");

    const handleClick = (nuevoTitulo) => {
        setTituloPagina(nuevoTitulo);
    };

    return(
        <nav className="navbar">
            <div className="container-fluid align-items-center">
                <img className="imagen" src={imagen} href="home.jsx" alt="Imagen de la web"/>
                <h2 className="nombre">MediaHive</h2>
                <h3 className="tituloPagina">{props.name}</h3>
                {username ? (
                    <div className="usuario">
                        <Link to="/perfil">
                            <AccountBoxIcon className="icono-usuario"/>
                        </Link>
                        <h5 className="username">{username}</h5>
                    </div>
                ) : (
                    <>
                        <h5>
                            <Link to="/CrearCuenta">
                                <button className="crearCuenta">Registrarse</button>
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
    );
}

export default TopNavBar;
