import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate en lugar de useHistory
import { Link } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MovieIcon from "@mui/icons-material/Movie";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HiveIcon from "@mui/icons-material/Hive";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import "../styles/LeftToolBar.css";

function LeftToolBar({ cambiarTituloPagina }) {
  /*const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const handleClick = (titulo) => {
    cambiarTituloPagina(titulo);
    navigate(`/${titulo.toLowerCase()}`); // Utiliza navigate en lugar de history.push
  };*/

  const [seccionSeleccionada, setSeccionSeleccionada] = useState(null);

  const handleClick = (seccion) => {
    setSeccionSeleccionada(seccion);
    cambiarTituloPagina(seccion);
  };

  return (
    <>
      <div id="leftnav" className="d-flex flex-column flex-grow-1">
        {/* Barra lateral */}
        <ul id="barraLateral" className="nav nav-pills nav-flush flex-column mb-auto text-center">
          
          {/* Elemento de la barra lateral: Home */}
          {/*Cuando el usuario clica en "Home", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom ${seccionSeleccionada === 'Inicio' ? 'active' : ''}`} onClick={() => handleClick("Inicio")}>
              <HomeIcon className="HomeIcon mr-2" />
              <span>Inicio</span>
          </li>

          {/* Elemento de la barra lateral: Musica */}
          {/*Cuando el usuario clica en "Musica", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom ${seccionSeleccionada === 'Música' ? 'active' : ''}`} onClick={() => handleClick("Música")}>
              <span>
              <AudiotrackIcon className="AudiotrackIcon mr-2" />
              </span>
              <span>Música</span>
          </li>

          {/* Elemento de la barra lateral: Peliculas */}
          {/*Cuando el usuario clica en "Peliculas", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom ${seccionSeleccionada === 'Films' ? 'active' : ''}`} onClick={() => handleClick('Films')}>
              <span>
              <MovieIcon className="MovieIcon mr-2" />
              </span>
              <span>Películas</span>
          </li>

          {/* Elemento de la barra lateral: Series */}
          {/*Cuando el usuario clica en "Series", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom ${seccionSeleccionada === 'Series' ? 'active' : ''}`} onClick={() => handleClick('Series')}>
              <span>
              <SlideshowIcon className="SlideshowIcon mr-2" />
              </span>
              <span>Series</span>
          </li>

          {/* Elemento de la barra lateral: Biblioteca */}
          {/*Cuando el usuario clica en "Biblioteca", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom ${seccionSeleccionada === 'Hive' ? 'active' : ''}`} onClick={() => handleClick('Hive')}>
              <span>
              <HiveIcon className="HiveIcon mr-2" />
              </span>
              <span><br/>Hive</span>
          </li>

          {/* Elemento de la barra lateral: Help */}
          {/*Cuando el usuario clica en "Help", el contenedor queda marcado y cambia el titulo de la barra de navegación superior*/}
          <li className={`nav-link py-3 border-bottom mt-auto ${seccionSeleccionada === 'Help' ? 'active' : ''}`} onClick={() => handleClick('Help')}>
              <span>
              <HelpOutlineIcon className="HelpOutIcon mr-2" />
              </span>
              <span>Ayuda</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftToolBar;
