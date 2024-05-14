import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import "../styles/Perfil.css";
import Imagen from "../images/Perfil.png";

function Perfil(){
    const [nombre, setNombre] = useState("NOMBRE DE USUARIO");
    const [descripcion, setDescripcion] = useState("Hola, soy Pedro y tengo 17 años. Me gusta escribir opiniones sobre películas o series para ayudar a decidir que esa noche que no os poneis de acuerdo");

    useEffect(() => {
        const nombreGuardado = localStorage.getItem('nombre');
        if (nombreGuardado) {
            setNombre(nombreGuardado);
        }
    }, []);

    return (
        <>
            <img src={Imagen} alt="Perfil" className="perfil-image" />
            <div className="nombre">
                <h2>{nombre} <Link to="/editar"><EditIcon /></Link></h2>
            </div>

            <div className="descripcion">
                <h2>Descripción:</h2>
            </div>

            <p className="descripcion-text">{descripcion}</p>
        </>
    );
}

export default Perfil;