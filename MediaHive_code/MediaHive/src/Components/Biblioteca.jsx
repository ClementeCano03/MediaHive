import  React, { useRef } from "react";
/*import imagen from '../images/Hive.png';*/
import {Carousel} from "react-bootstrap";
import "../styles/Hive.css";



function Hive() {
    const carouselRef = useRef(null);
    /*<div style={{ backgroundImage: `url(${imagen})`, backgroundSize: 'cover', height: '100vh' }}/>*/
    return (
        <>
        <div className="encabezado">
            <h1>Bienvenido a tu biblioteca</h1>
            <h3>Aqui podrás ver tus canciones, series y películas que hayas guardado.</h3>
        </div>
        <div className="canciones" style={{ marginLeft: '10px', position: 'relative' }}>
            <div className="carousel-container mx-auto px-5 py-3">

                <h2>Canciones</h2>
                <div className="cancion">
                    <Carousel ref={carouselRef} interval={null} indicators={false}>
                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/5UoT7c2R5nadqdwidFhZxa?utm_source=generator" width="245" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/0Cn8NxJZz7zUlsaA3rXoIU?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                                
                                    </div>
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/59PYgzOiOjGDzjDT5N5oOX?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                                
                                </div>
                                
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/4bTZeO72FwMa6wKOiqoynL?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                                
                                </div>
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/6K5BsR04ijf3FHNzjbaagD?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <iframe src="https://open.spotify.com/embed/track/0RDgqtvOHLwcI6yz9bjsZV?utm_source=generator" width="245" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>
                               
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>


                <h2>Series</h2>
                <div className="series">
                    <Carousel ref={carouselRef} interval={null} indicators={false}>
                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 1</h3>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 2</h3>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 3</h3>                                
                                </div>
                                
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 4</h3>                                
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 5</h3>                                
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Serie 6</h3>                               
                                </div>
                               
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                
                <h2 style={{marginTop: '100px'}}>Películas</h2>
                <div className="peliculas">
                    <Carousel ref={carouselRef} interval={null} indicators={false}>
                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 1</h3>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 2</h3>
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 3</h3>                                
                                </div>
                                
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-item-content row align-items-center py-2">
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 4</h3>                                
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 5</h3>                                
                                </div>
                                <div className="col-4 justify-content-center">
                                    <h3>Pelicula 6</h3>                               
                                </div>
                               
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

        </>
    );
}

export default Hive;