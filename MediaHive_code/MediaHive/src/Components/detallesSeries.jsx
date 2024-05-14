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

    const fullStars = Math.floor(serie.vote_average / 2);
    const halfStar = serie.vote_average % 2 === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div id="detallesSeries">
            <div className="mx-auto px-5 py-5 d-flex align-items-start">
                
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.title} style={{ height: '400px', width: 'auto' }}/>
                </div> 
                <div className="mx-auto px-5 py-3">
                    <h3>{serie.name}</h3>
                    <div>
                        {'⭐'.repeat(fullStars)}
                        {'☆'.repeat(halfStar)}
                        {'☆'.repeat(emptyStars)}
                        <span style={{color: 'black'}}> {serie.vote_average}</span>
                    </div>
                    <div className="py-4">
                        <p style={{ fontSize: '20px' }}>{serie.overview}</p>
                    </div>
                </div>
                
            </div> 
        </div>
    )
}


export default detallesSeries;