import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

import "../Styles/detallesPeliculasSeries-style.css";

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

    const fullStars = Math.floor(movie.vote_average / 2);
    const halfStar = movie.vote_average % 2 === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className="detallesPeliculas">
            <div className="mx-auto px-5 py-5 d-flex align-items-start">

                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ height: '400px', width: 'auto' }} />
                </div>
                <div className="mx-auto px-5 py-3">
                    <h3>{movie.title}</h3>
                    <div>
                        {'⭐'.repeat(fullStars)}
                        {'☆'.repeat(halfStar)}
                        {'☆'.repeat(emptyStars)}
                        <span style={{ color: 'black' }}> {movie.vote_average}</span>
                    </div>
                    <div className="py-4">
                        <p style={{ fontSize: '20px' }}>{movie.overview}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default detallesPeliculas;