import React, { useRef, useState } from "react";
import {Carousel} from "react-bootstrap";
import "../styles/Musica2.css"

function Musica(/*{ cambiarTituloPagina }*/) {
  //cambiarTituloPagina("Música"); // Cambia el título de la página al cargar este componente

  const [cancion, setCancion] = useState('')
  const [canciones, setCanciones] = useState([])
  const carouselRef = useRef(null);

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
    <br/>
      {/*Barra de buscador*/}
      <form onSubmit={handleSearch} className="formulario d-flex p-12"  style={{alignItems: 'center', justifyContent: 'center' }}>
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

      {/*Resultados*/}
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
            ></iframe><br/> */}
            
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

      <div className="listaCanciones" style={{ marginLeft: '10px', position: 'relative' }}>
      <div id="populares" className="carousel-container mx-auto px-5 py-3">
        <h3>Últimos estrenos</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
                  <div className="col d-flex justify-content-center">
                    <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  
            </div>
          </Carousel.Item>
        </Carousel>

        <h3>Más populares</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
                  <div className="col d-flex justify-content-center">
                    <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  
            </div>
          </Carousel.Item>
        </Carousel>

        <h3>Top 10 España</h3>
        <Carousel ref={carouselRef} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
                  <div className="col d-flex justify-content-center">
                    <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/1jPff2HChF9ZahcdogUaCX?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
                  
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  <div className="col d-flex justify-content-center">
                  <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
                  
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      
    </div>




    </>
    
  );
}

export default Musica;