import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/detallesPeliculasSeries-style.css";

function detallesPeliculas({ cambiarTituloPagina }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const language = 'es-ES';

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setMovie(data);
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    )
}


export default detallesPeliculas;