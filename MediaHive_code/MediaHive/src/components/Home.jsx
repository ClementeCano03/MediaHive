import React from "react";
import '../Styles/Homestyles.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
        <div>
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link> 
            <div class="cuadro-texto">
                <h2>¡Bienvenidos a nuestra comunidad sobre multimedia!</h2>
                <p class="text-wrap">
                    Organiza tus series, películas o música favoritos en un solo lugar de forma sencilla. <br></br>
                    Descubre cuáles son los contenidos en tendencia y vota por tu contenido favorito. <br></br>
                    Debate en los diversos foros el últmo capítulo de tu serie en emisión. <br></br>
                </p>
            </div>
            <button className="boton-crear-cuenta" onClick={() => navigate('./CrearCuenta')}>CREAR CUENTA</button>
        </div>
        </>
    );
}

export default Home;

    