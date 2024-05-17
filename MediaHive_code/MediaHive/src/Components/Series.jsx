import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'

import { Carousel } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import "../Styles/series-styles.css";

function Series() {

  // Ref para el carrusel
  const carouselRef = useRef(null);

  //constantes para peticiones a api
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const language = "es-ES"

  //constantes para guardar las peliculas
  const [series, setSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [upcomingSeries, setUpcomingSeries] = useState([]);

  //constantes para el buscador
  const [searchKey, setSearchKey] = useState("");
  const [searchedSeries, setSearchedSeries] = useState([]);

  //funcion para obtener las series populares
  const fetchSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: language,
      },
    });

    localStorage.setItem('series', JSON.stringify(results));
    setSeries(results);
  };

  //funcion para realizar peticion de top 10 peliculas a la api
  const fetchTopSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: language,
        page: 1,
      },
    });

    const sortedResults = results.sort((a, b) => b.vote_average - a.vote_average);

    localStorage.setItem('topSeries', JSON.stringify(sortedResults));
    setTopSeries(sortedResults);
  };

  //funcion para realizar peticion de estrenos a la api
  const fetchUpcomingSeries = async () => {
    const { data: { results } } = await axios.get(`${API_URL}/tv/on_the_air`, {
      params: {
        api_key: API_KEY,
        language: language,
      },
    });

    localStorage.setItem('upcomingSeries', JSON.stringify(results));
    setUpcomingSeries(results);
  };

  //funcion para el buscador
  const searchSeries = async (event) => {
    event.preventDefault();

    const response = await axios.get(`${API_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        language: language,
        query: searchKey,
      },
    });

    setSearchedSeries(response.data.results);
  };

  useEffect(() => {
    const cachedSeries = localStorage.getItem('series')
    const cachedTopSeries = localStorage.getItem('top')
    const cachedUpcomingSeries = localStorage.getItem('upcoming')

    if (cachedSeries) {
      setSeries(JSON.parse(cachedSeries))
    } else {
      fetchSeries();
    }

    if (cachedTopSeries) {
      setTopSeries(JSON.parse(cachedTopSeries))
    } else {
      fetchTopSeries();
    }

    if (cachedUpcomingSeries) {
      setUpcomingSeries(JSON.parse(cachedUpcomingSeries))
    }
    else {
      fetchUpcomingSeries();
    }

  }, []);

  return (
    <div id="series" className="d-flex flex-column flex-grow-1">
      <h1 className="visually-hidden">Página de Series</h1>

      {/*Formulario para buscar series*/}
      <form id="buscadorSeries" className="d-flex justify-content-center mx-auto py-5 w-75" onSubmit={searchSeries}>
        <input type="text" placeholder="Buscar..." className="flex-grow-1 " onChange={(e) => setSearchKey(e.target.value)} />
        <button type="send">Buscar</button>
      </form>

      {/*Contenedor para el resultado de búsqueda*/}
      <div className="search-results d-flex justify-content-center align-items-center flex-wrap">
        {searchedSeries.slice(0, 5).map((serie) => (
          <div key={serie.id} className="m-3 d-flex flex-column align-items-center">
            <Link to={`/detallesSeries/${serie.id}`}>
              <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
            </Link>
          </div>
        ))}
      </div>

      {/* Carrusel de series populares*/}
      <div id="populares" className="carousel-container mx-auto px-5 py-3">
        <h2>Populares</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {series.length > 0 && (
                <>
                  {series.slice(0, 5).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {series.length > 0 && (
                <>
                  {series.slice(5, 10).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Carrusel de top 10 series*/}
      <div id="top10" className="carousel-container mx-auto px-5 py-3">
        <h2>Top 10 series</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {topSeries.length > 0 && (
                <>
                  {topSeries.slice(0, 5).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {topSeries.length > 0 && (
                <>
                  {topSeries.slice(5, 10).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Carrusel de guardadas*/}
      <div id="guardadas" className="carousel-container mx-auto px-5 py-3">
        <h2>Guardadas</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col">
                <img src="imagen.jpg" alt="Imagen de la película" style={{ width: '150px', height: 'auto' }} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Carrusel de estrenos*/}
      <div id="estrenos" className="carousel-container mx-auto px-5 py-3">
        <h2>En emisión</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {upcomingSeries.length > 0 && (
                <>
                  {upcomingSeries.slice(0, 5).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              {upcomingSeries.length > 0 && (
                <>
                  {upcomingSeries.slice(5, 10).map((serie, index) => (
                    <div key={serie.id} className="col d-flex justify-content-center">
                      <Link to={`/detallesSeries/${serie.id}`}>
                        <img src={`${URL_IMAGE + serie.poster_path}`} style={{ height: '200px', width: 'auto' }} />
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
}

export default Series;