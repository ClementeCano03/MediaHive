import React, { useState, useRef, useEffect } from "react";
import "../styles/Ayuda.css";
import Accordion from 'react-bootstrap/Accordion';

// Importar iconos de Material-UI
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MovieIcon from '@mui/icons-material/Movie';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HiveIcon from '@mui/icons-material/Hive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

//-------------------------------------------------------------//
// Importar imágenes de las secciones
    //
import barranav from "../Images/Ayuda/barra.png";
import Ultimosestrenos from "../Images/Ayuda/estrenos.png";
import Maspopulares from "../Images/Ayuda/popu.png";
import Top10 from "../Images/Ayuda/top.png";
    // 
import resultados from "../Images/Ayuda/resultados.png";
import artista from "../Images/Ayuda/artista.png";
    //
import reproductor from "../Images/Ayuda/repro.png";
import titulo from "../Images/Ayuda/titulo.png";
import artis from "../Images/Ayuda/artis.png";
import valorar from "../Images/Ayuda/valorar.png";
import favoritos from "../Images/Ayuda/fav.png";
import comentarios from "../Images/Ayuda/comen.png";
import vercomentarios from "../Images/Ayuda/coments.png";


//-------------------------------------------------------------//
function Ayuda() {
    

return (
    <Accordion defaultActiveKey="0" flush className="items">

            <Accordion.Item eventKey="0" className="quienes-somos">
                <Accordion.Header>
                    <GroupsIcon id="icono-grupo"/>
                    <strong>¿Quiénes somos?</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="manual-novato">
                <Accordion.Header>
                    <MenuBookIcon id="icono-manual"/>    
                    <strong>Manual para novatos</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="musica">
                <Accordion.Header>
                    <AudiotrackIcon id="icono-musica"/>
                    <strong>Sección Música</strong>
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <strong>¿Qué aparece al inicio de la seccion?</strong>
                            </Accordion.Header>
                            <Accordion.Body>
                            En nuestra sección de música podrás encontrar las últimas novedades, los temas más populares y el top 10 de España. 
                            Además, podrás buscar tus canciones favoritas y escucharlas online o reproducirlas en Spotify.
                
                                <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <strong>Barra de navegación</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={barranav} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        En la barra de navegación podrás buscar la canción que desees.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <strong>Últimos estrenos</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={Ultimosestrenos} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        Aquí podrás descubrir las últimas canciones que se han lanzado.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                    <strong>Más populares</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={Maspopulares} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        Aquí podrás ver las canciones más escuchadas del momento.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                    <strong>Top 10 España</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={Top10} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        Aquí podrás ver las 10 canciones más escuchadas en España.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <strong>Buscar una canción</strong>
                            </Accordion.Header>
                            <Accordion.Body>
                                Podrás buscar una canción por título o por artista.
                                <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                    <strong>Buscar una canción por título</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={resultados} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        <strong>1.</strong> Cuando buscas el título de una canción, aparecerán los resultados de la búsqueda.
                                        El primer resultado será la canción que buscas, y los demás serán canciones relacionadas.<br/>
                                        <strong>2.</strong> Puedes escuchar la canción online o abrirla en Spotify.<br/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                    <strong>Buscar una canción por artista</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={artista} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                        Cuando buscas un artista, aparecerán sus canciones más populares y podrás escucharlas online o abrirlas en Spotify.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            <strong>¿Qué veo cuando busco una canción?</strong>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Accordion defaultActiveKey="0" flush className="sub-items-musica">
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                    <strong>Reproductor de la canción online</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={reproductor} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                    <strong>Título de la canción</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={titulo} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                    <strong>Artista</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={artis} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                    <strong>Valorar la canción</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={valorar} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                    <strong>Guardar en favoritos</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={favoritos} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                    <strong>Escribir comentarios</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={comentarios} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                    <Accordion.Header>
                                    <strong>Ver los comentarios</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <img src={vercomentarios} style={{ width: '1000px', height: '500px', 
                                        display: 'flex', marginLeft:'500px', marginBottom:'25px'}}/>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="peliculas">
                <Accordion.Header>
                    <MovieIcon id="icono-peliculas"/>
                    <strong>Sección Películas</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="series">
                <Accordion.Header>
                    <SlideshowIcon id="icono-series"/>
                    <strong>Sección Series</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="biblioteca">
                <Accordion.Header>
                    <HiveIcon id="icono-biblioteca"/>
                    <strong>Tu Biblioteca</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className="perfil">
                <Accordion.Header>
                    <AccountBoxIcon id="icono-perfil"/>
                    <strong>Tu Perfil</strong>
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>
        </Accordion>
);
}

export default Ayuda;


/*
<Accordion defaultActiveKey="0" flush className="items">
            <Accordion.Item eventKey="0" className="quienes-somos">
                <Accordion.Header>
                    <GroupsIcon id="icono-grupo"/>
                    ¿Quiénes somos?
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="manual-novato">
                <Accordion.Header>
                    <MenuBookIcon id="icono-manual"/>    
                    Manual para novatos
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="musica">
                <Accordion.Header>
                    <AudiotrackIcon id="icono-musica"/>
                    Sección Música
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="peliculas">
                <Accordion.Header>
                    <MovieIcon id="icono-peliculas"/>
                    Sección Películas
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="series">
                <Accordion.Header>
                    <SlideshowIcon id="icono-series"/>
                    Sección Series
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="biblioteca">
                <Accordion.Header>
                    <HiveIcon id="icono-biblioteca"/>
                    Tu Biblioteca
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className="perfil">
                <Accordion.Header>
                    <AccountBoxIcon id="icono-perfil"/>
                    Tu Perfil
                </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </Accordion.Item>
        </Accordion>
*/

/*

*/