import React, { useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import {Carousel} from "react-bootstrap";
import "../styles/Musica.css";

function Musica() {

  const [cancion, setCancion] = useState('')
  const carouselRef = useRef(null);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if(cancion.trim() === ''){
      alert('Debes ingresar una canción');
      return;
    }

    navigate(`/musica/${cancion}`)
    console.log(cancion);
    setCancion("");

  }


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
    

      <div
        className="listaCanciones"
        style={{ marginLeft: "10px", position: "relative" }}
      >
        <div id="populares" className="carousel-container mx-auto px-5 py-3">
          <h3>Últimos estrenos</h3>
          <Carousel ref={carouselRef} interval={null} indicators={false}>
            <Carousel.Item>
              <div className="carousel-item-content row align-items-center py-2">
                <div className="col d-flex justify-content-center">
                  <div>
                    <iframe
                      src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator"
                      width="245"
                      height="200"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                    <h6>Nombre de la canción</h6>
                  </div>
                </div>
                {/* Repeat for other columns */}
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Repeat for other carousels */}
        </div>
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
                <Link to="/cancion/7bywjHOc0wSjGGbj04XbVi" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" style={{ width: '180px', height: '180px' }}/>  
                 <h5 style={{textAlign: "center"}}>LUNA</h5>
                </Link>                  
              </div>
              <div className="col d-flex justify-content-center">
                <Link to="/cancion/69vlMrzHwATKzupwNcUPyK" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>La Santa</h5>
                </Link>                    
              </div>
              <div className="col d-flex justify-content-center">
                <Link to="/cancion/1dp62fHaXUP0Zh45voegpI" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02420c7ba982f6f92351fc0a2b" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>Lágrimas desordenadas</h5>
                </Link>                    
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
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/3ng8tfwvzR4BBwa9yaMms6" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>BADGYAL</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/5bi0gh89wRuH2OgjdAKFsb" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02f02899736a6ff8dd538ae70b" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>Santa</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/0LZy30mVmxqUpdQmaXKXBd" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02b41f34aa51be675c5cfd3d94" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>ADIVINO</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/62k8iliO7KTiYp7LWGPa5p" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e025327757614a832374e491778" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>X'CLUSIVO (REMIX)</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/6XjDF6nds4DE2BBbagZol6" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e021d0777b3259d0bd618f4a1f6" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>Gata Only</h5>
                </Link>                  
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content row align-items-center py-2">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/2bipvepI8ridFvIAImR5Xf" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02cd22e1599ed8847e9463dfc2" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>El Conjuntito</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/1NTluDanyn4ET8RTYi0H1I" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e021818c943fc42bfffaa670bea" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>YO LO SOÑÉ</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/7bywjHOc0wSjGGbj04XbVi" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02f1aad814a40ec7419c234242" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>LUNA</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/54qwF6zeJ0zjjcOxFGICli" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e024a7de707fb21914d8b2cbf3e" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>La Vida Sin Ti</h5>
                </Link>                  
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Link to="/cancion/6m5pxtjGX5rEzvGS1SUTVt" style={{ textDecoration: 'none' }}>
                  <img src="https://i.scdn.co/image/ab67616d00001e02ff85dfac3e0e346580f42910" style={{ width: '180px', height: '180px' }}/>  
                  <h5 style={{textAlign: "center"}}>LA RANGER (feat. Myke Towers</h5>
                </Link>                  
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