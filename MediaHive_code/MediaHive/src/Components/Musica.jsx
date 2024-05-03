import React, { useState } from "react";

import LeftToolBar from "./LeftToolBar";
import TopNavBar from "./TopNavBar";

//import "../styles/Musica.css"

function Musica(/*{ cambiarTituloPagina }*/) {
  //cambiarTituloPagina("Música"); // Cambia el título de la página al cargar este componente

  const [cancion, setCancion] = useState('')
  const [canciones, setCanciones] = useState([])

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
      {/*Barra de buscador*/}
      <form onSubmit={handleSearch} className="formulario"style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

      {/*Resultados*/}
      {canciones.map((cancion, index) => (
          <div key={index}>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url}/>
            <h2 style={{color:"black"}}>
              {cancion.data.name}
            </h2>
            <a href={cancion.data.uri}>
              <button>
                Abrir canción en spotify
              </button>
            </a>
            <iframe
              src={`https://open.spotify.com/embed/track/${cancion.data.id}?utm_source=generator`}
              width="30%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
      ))}

    </>
    
  );
}

export default Musica;