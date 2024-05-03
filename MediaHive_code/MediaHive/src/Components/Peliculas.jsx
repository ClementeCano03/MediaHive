import React from "react";
import { Carousel } from "react-bootstrap";
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import "../styles/peliculas-styles.css";

function Peliculas({ cambiarTituloPagina }) {
  //cambiarTituloPagina("Películas");

  // Ref para el carrusel
  const carouselRef = useRef(null);

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
                <img src="imagen.jpg" alt="Imagen de la película" style={{ width: '150px', height: 'auto' }}/>
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
