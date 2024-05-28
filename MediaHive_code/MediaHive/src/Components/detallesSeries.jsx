
import React, { useEffect, useState, useRef } from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import "../styles/detallesPeliculasSeries-style.css";

function detallesSeries({ cambiarTituloPagina }) {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const language = 'es-ES';
    const [similarSeries, setSimilarSeries] = useState([]);

    const [comments, setComments] = useState([]);

    //Series guardadas en biblioteca
    const [seriesSaved, setSeriesSaved] = useState(() => {
        const savedSeries = localStorage.getItem('seriesSaved');
        return savedSeries ? JSON.parse(savedSeries) : [];
    });

    const handleSerieSave = () => {
        if (seriesSaved.includes(serie.id)) {
            setSeriesSaved(seriesSaved.filter(serieId => serieId !== serie.id));
        } else {
            setSeriesSaved([...seriesSaved, serie.id]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.elements[0].value;
        setComments([comment, ...comments]);
        event.target.reset();
    };


    useEffect(() => {
        const fetchSerie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}?api_key=fd04580a5174281296d7de8867bc1fa0&language=${language}`
            );
            setSerie(data);
        };

        const fetchSimilarSeries = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=fd04580a5174281296d7de8867bc1fa0&language=~${language}`);
            setSimilarSeries(response.data.results);
        };

        const savedSeries = JSON.parse(localStorage.getItem('seriesSaved'));
        if (savedSeries) {
            setSeriesSaved(savedSeries);
        }

        fetchSerie();
        fetchSimilarSeries();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('seriesSaved', JSON.stringify(seriesSaved));
    }, [seriesSaved]);

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
                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.title} style={{ height: '400px', width: 'auto' }} />
                </div>
                <div className="mx-auto px-5 py-3">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3>{serie.title}</h3>
                        <button onClick={handleSerieSave} style={{ border: 'none', background: 'transparent' }}>
                            <BookmarkAddIcon className="BookmarkIcon" style={{ marginLeft: '10px', color: 'black' }} />
                        </button>
                    </div>
                    <div>
                        {'⭐'.repeat(fullStars)}
                        {'☆'.repeat(halfStar)}
                        {'☆'.repeat(emptyStars)}
                        <span style={{ color: 'black' }}> {serie.vote_average}</span>
                    </div>
                    <div className="py-4">
                        <p style={{ fontSize: '20px' }}>{serie.overview}</p>
                    </div>
                </div>

                <div>
                    <h3 className="mx-auto py-2" style={{ textAlign: 'center' }}>Series similares</h3>
                    <div className="mx-auto px-5 py-3" style={{ display: 'flex', flexWrap: 'wrap', width: '350px' }}>
                        {similarSeries.slice(0, 4).map(similarSerie => (
                            <div key={similarSerie.id} style={{ width: '50%', padding: '10px' }}>
                                <Link to={`/detallesSeries/${similarSerie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${similarSerie.poster_path}`} alt={similarSerie.title} style={{ width: '100%', height: 'auto' }} />
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


export default detallesSeries;
