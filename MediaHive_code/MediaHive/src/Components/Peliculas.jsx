import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from 'react';

import { Carousel } from "react-bootstrap";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import "../styles/peliculas-styles.css";

function Peliculas({ cambiarTituloPagina }) {
  //cambiarTituloPagina("Películas");

  // Ref para el carrusel
  const carouselRef = useRef(null);

  //constantes para peticiones a api
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fd04580a5174281296d7de8867bc1fa0';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const language = "es-ES"

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  //funcion para realizar peticion a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: language,
      },
    })

    setMovies(results)
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div id="peliculas" className="d-flex flex-column flex-grow-1">
      <h1 class="visually-hidden">Página de Películas</h1>

      <form id="buscadorPelis" class="d-flex justify-content-center mx-auto py-5 w-75">
        <input type="search" placeholder="Buscar..." className="flex-grow-1 "></input>
        <button type="send">Buscar</button>
      </form>

      {/* Carrusel de peliculas populares*/}
      <div id="populares" className="carousel-container mx-auto px-5 py-3">
        <h2>Populares</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col d-flex justify-content-center">
                <img key={movies[0].id} src={`${URL_IMAGE + movies[0].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col d-flex justify-content-center">
                <img key={movies[1].id} src={`${URL_IMAGE + movies[1].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col d-flex justify-content-center">
                <img key={movies[2].id} src={`${URL_IMAGE + movies[2].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col d-flex justify-content-center">
                <img key={movies[3].id} src={`${URL_IMAGE + movies[3].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col d-flex justify-content-center">
                <img key={movies[4].id} src={`${URL_IMAGE + movies[4].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col">
                <img key={movies[5].id} src={`${URL_IMAGE + movies[5].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col">
                <img key={movies[6].id} src={`${URL_IMAGE + movies[6].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col">
                <img key={movies[7].id} src={`${URL_IMAGE + movies[7].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col">
                <img key={movies[8].id} src={`${URL_IMAGE + movies[8].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
              <div className="col">
                <img key={movies[9].id} src={`${URL_IMAGE + movies[9].poster_path}`} style={{ height: '200px', width: 'auto' }} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Carrusel de top 10 peliculas*/}
      <div id="top10" className="carousel-container mx-auto px-5 py-3">
        <h2>Top 10 peliculas</h2>
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
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
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
        <h2>Estrenos</h2>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
              <div className="col example-content">
                <img src="imagen.jpg" alt="Imagen de la película" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  )
}

export default Peliculas;
