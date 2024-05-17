import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/detallesPeliculasSeries-style.css";

function detallesPeliculas({ cambiarTituloPagina }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const language = 'es-ES';
    const [similarMovies, setSimilarMovies] = useState([]);

    const [comments, setComments] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.elements[0].value;
        setComments([comment, ...comments]);
        event.target.reset();
    };

    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setMovie(data);
        };

        const fetchSimilarMovies = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=fd04580a5174281296d7de8867bc1fa0&language=~${language}`);
            setSimilarMovies(response.data.results);
        };

        fetchMovie();
        fetchSimilarMovies();
    }, [id]);

    if (!movie) {
        return <div>Cargando...</div>
    }

    const fullStars = Math.floor(movie.vote_average / 2);
    const halfStar = movie.vote_average % 2 === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div id="detallesPeliculas">
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
                <div>
                    <h3 className="mx-auto py-3" style={{ textAlign: 'center' }}>Películas similares</h3>
                    <div className="mx-auto px-5 py-3" style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
                        {similarMovies.slice(0, 4).map(similarMovie => (
                            <div key={similarMovie.id} style={{ width: '50%', padding: '10px' }}>
                                <Link to={`/detallesPeliculas/${similarMovie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`} alt={similarMovie.title} style={{ width: '100%', height: 'auto' }} />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div>
                <h3 className="mx-auto py-3 px-5">Comentarios</h3>
                <div className="mx-auto px-5 py-3">
                    {comments.map((comment, index) => (
                        <div key={index} style={{ border: '1px solid black', margin: '10px 0', padding: '10px' }}>
                            {comment}
                        </div>
                    ))}
                </div>
                <h3 className="mx-auto py-3" style={{ textAlign: 'center' }}>Añadir un comentario</h3>
                <form onSubmit={handleSubmit} style={{ padding: '0 50px' }}>
                    <textarea placeholder="Escribe tu comentario aquí..." style={{ width: '100%', height: '100px', padding: '10px', resize: 'none' }}></textarea>
                    <button type="submit" style={{ display: 'block', margin: '10px auto' }}>Enviar</button>
                </form>
            </div>
        </div>
    )
}


export default detallesPeliculas;