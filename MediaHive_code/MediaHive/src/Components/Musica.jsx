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

    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  return (
    <>
      {/*Barra de buscador*/}
      <form onSubmit={handleSearch}>
        <input type="text" value={cancion} onChange={e => setCancion(e.target.value)}/>
        <button type="submit">
          Buscar
        </button>
      </form>

      {canciones.map((cancion, index) => (
        
          <div key={index}>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url}/>
            <h2 style={{color:"black"}}>
              {cancion.data.name}
            </h2>
            <a href={cancion.data.uri}>
              <button>
                Play Song
              </button>
            </a>
          </div>
        
      ))}

    </>
    
  );
}

export default Musica;
