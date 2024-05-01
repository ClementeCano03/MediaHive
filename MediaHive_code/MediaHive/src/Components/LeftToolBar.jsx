import React from "react";
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
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  const handleClick = (titulo) => {
    cambiarTituloPagina(titulo);
    navigate(`/${titulo.toLowerCase()}`); // Utiliza navigate en lugar de history.push
  };

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 vh-100">
        {/* Barra lateral */}
        <ul id="barraLateral" className="nav nav-pills nav-flush flex-column mb-auto text-center">
          {/* Elemento de la barra lateral: Home */}
          <li className="nav-item">
          <Link
              to="/inicio"
              className="nav-link py-3 border-bottom"
              aria-current="page"
              title="Inicio"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
              onClick={() => handleClick("Inicio")}
            >
              
                <HomeIcon className="HomeIcon mr-2" />
              
              <span>Home</span>
            </Link>
          </li>
          {/* Elemento de la barra lateral: Musica */}
          <li>
          <Link
              to="/musica"
              className="nav-link py-3 border-bottom"
              title="Música"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Music"
              onClick={() => handleClick("Música")}
            >
              <span>
                <AudiotrackIcon className="AudiotrackIcon mr-2" />
              </span>
              <span>Music</span>
            </Link>
          </li>

          {/* Elemento de la barra lateral: Peliculas */}
          <li>
          <Link
              to="/peliculas"
              className="nav-link py-3 border-bottom"
              title="Películas"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Films"
              onClick={() => handleClick("Películas")}
            >
              <span>
                <MovieIcon className="MovieIcon mr-2" />
              </span>
              <span>Films</span>
            </Link>
          </li>

          {/* Elemento de la barra lateral: Series */}
          <li>
            <Link
              onClick={() => handleClick("Series")}
              to="/series"
              id="series"
              href="Series.jsx"
              className="nav-link py-3 border-bottom"
              title="Series"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Series"
            >
              <span>
                <SlideshowIcon className="SlideshowIcon mr-2" />
              </span>
              <span>Series</span>
            </Link>
          </li>

          {/* Elemento de la barra lateral: Biblioteca */}
          <li>
            <Link
            
              onClick={() => handleClick("Biblioteca")}
              id="biblioteca"
              href="hive.jsx"
              className="nav-link py-3 border-bottom"
              title="Biblioteca"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Hive"
            >
              <span>
                <HiveIcon className="HiveIcon mr-2" />
              </span>
              <span>Hive</span>
          </Link> 
          </li>

          {/* Elemento de la barra lateral: Help */}
          <li>
            <Link
            
              onClick={() => handleClick("Ayuda")}
              id="ayuda"
              className="nav nav-flush flex-column text-center pt-5 nav-link py-3 border-bottom"
              href="ayuda.jsx"
              title="Help"
            >
              <span>
                <HelpOutlineIcon className="mr-2" />
              </span>
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftToolBar;
