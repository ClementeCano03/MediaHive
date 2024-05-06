import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';

import "../styles/Musica.css"

function Musica() {

  const [cancion, setCancion] = useState('')
  const [canciones, setCanciones] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function handleSearch(e) {
    e.preventDefault();

    if(cancion.trim() === ''){
      alert('Debes ingresar una canción');
      return;
    }

    console.log(cancion);
    setCancion("");
    getSong(cancion);
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '733197fdcamsh9fd898d4b4b0d10p1493cdjsn7aa3fb3dcb4d',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong(cancion) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
      let data = await fetch(url, options);
      let res = await data.json();
      setCanciones(res.tracks.items);
      console.log(res);

    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };


  return (
    <>
      {/*
        <br/>
      {/*Barra de buscador
      <form onSubmit={handleSearch} className="formulario" style={{display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input type="text" value={cancion} onChange={e => setCancion(e.target.value)} style={{
          padding: '10px',
          borderRadius: '5px',
          border: '2px solid #ccc',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
        }}
        placeholder="Buscar canción..."
        />
        <button type="submit" style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#455559',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >Buscar</button>
      </form>
      <br/>

      {/*Resultados
      <div className="container" style={{backgroundColor: '#F5F5F5'}}>
      {canciones.map((cancion, index) => (
          <div className="d-flex border-bottom border-white" key={index}>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} style={{ width: '100px', height: '100px' }}/>
            <h2 class="align-self-center" style={{color:"black"}}>
              {cancion.data.name}
            </h2>
            {/* <iframe
              src={`https://open.spotify.com/embed/track/${cancion.data.id}?utm_source=generator`}
              width="30%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe><br/> 
            
            <a class="align-self-center" href={cancion.data.uri}>
              <button style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#455559',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}>
                Abrir canción en spotify
              </button>
            </a>
          </div>
      ))}
      </div>
      */}


      {/*Barra de buscador*/}
      <form onSubmit={handleSearch} className="formulario"style={{ alignItems: 'center', justifyContent: 'center' }}>
        <input id="inputBusqueda" type="text" value={cancion} onChange={e => setCancion(e.target.value)} style={{
          padding: '10px',
          borderRadius: '5px',
          border: '2px solid #283033',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
          width: '500px',
          height: '45px'
        }}
        placeholder="Buscar canción..."
        />
        <button id="botonBusqueda" type="submit" style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#283033',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            height: '45px'
          }}
        >Buscar</button>
      </form>

      {/* Resultados */}
      {canciones.length > 0 && (
        <Carousel 
          className="carousel" 
          interval={null}
        >
          {canciones.map((cancion, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-content">
                {/* <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="Portada de la canción" />
                <h4>{cancion.data.name}</h4> */}
                <iframe
                  src={`https://open.spotify.com/embed/track/${cancion.data.id}?utm_source=generator`}
                  width="100%"
                  height="300"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <a href={cancion.data.uri}>
                  <button id="botonSpotify" style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#283033',
                    color: 'white',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}>
                    Abrir canción en Spotify
                  </button>
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
    
  );
}

export default Musica;
