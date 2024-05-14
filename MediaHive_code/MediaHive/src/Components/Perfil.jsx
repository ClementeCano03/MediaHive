import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import "../styles/Perfil.css";
import Perfil from "../images/Perfil.png";

function Usuario(){
    return (
        <>
            <img src={Perfil} alt="Perfil" className="perfil-image" />
            <div className="nombre">
                <h2>NOMBRE DE USUARIO <EditIcon /></h2>
            </div>

            <div className="descripcion">
                <h2>Descripción:</h2>
            </div>

            <p className="descripcion-text">Hola, soy Pedro y tengo 17 años. 
            Me gusta escribir opiniones sobre películas o series para ayudar a decidir que esa noche que no os poneis de acuerdo</p>
        </>
    );
}

export default Usuario;