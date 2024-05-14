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

function LeftToolBar() {

  return (
    <>
      <div id="leftnav" className="d-flex flex-column">
        {/* Barra lateral */}
        <ul id="barraLateral" className="nav nav-pills nav-flush flex-column mb-auto text-center">
          
          {/* Elemento de la barra lateral: Home */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className="nav-link py-3 border-bottom">
              <HomeIcon className="HomeIcon mr-2" /><br/>
              <span>Inicio</span>
            </li>
          </Link>

          {/* Elemento de la barra lateral: Musica */}
          <Link to="/musica" style={{ textDecoration: 'none' }}>
            <li className="nav-link py-3 border-bottom">
                <span>
                <AudiotrackIcon className="AudiotrackIcon mr-2" />
                </span>
                <span>Música</span>
            </li>
          </Link>

          {/* Elemento de la barra lateral: Peliculas */}
          <Link to="/peliculas" style={{ textDecoration: 'none' }}>
            <li className="nav-link py-3 border-bottom">
                <span>
                <MovieIcon className="MovieIcon mr-2" />
                </span>
                <span>Películas</span>
            </li>
          </Link>

          {/* Elemento de la barra lateral: Series */}
          <Link to="/series" style={{ textDecoration: 'none' }}>
            <li className="nav-link py-3 border-bottom">
                <span>
                <SlideshowIcon className="SlideshowIcon mr-2" /><br/>
                </span>
                <span>Series</span>
            </li>
          </Link>

          {/* Elemento de la barra lateral: Biblioteca */}
          <Link to="/biblioteca" style={{ textDecoration: 'none' }}>
            <li className="nav-link py-3 border-bottom">
                <span>
                <HiveIcon className="HiveIcon mr-2" />
                </span>
                <span>Biblioteca</span>
            </li>
          </Link>

          {/* Elemento de la barra lateral: Help */}
          <Link to="/ayuda" style={{ textDecoration: 'none' }}>
          <li className="nav-link py-3 border-bottom mt-auto">
              <span>
              <HelpOutlineIcon className="mr-2" /><br/>
              </span>
              <span>Ayuda</span>
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default LeftToolBar;
