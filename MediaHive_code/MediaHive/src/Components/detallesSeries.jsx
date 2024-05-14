import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/detallesPeliculasSeries-style.css";

function detallesSeries({ cambiarTituloPagina }) {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const language = 'es-ES';

    useEffect(() => {
        const fetchSerie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setSerie(data);
        };

        fetchSerie();
    }, [id]);

    if (!serie) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.title} />
        </div>
    )
}


export default detallesSeries;