import React from "react";

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

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 vh-100">
        {/* Barra lateral */}
        <ul id="barraLateral" className="nav nav-pills nav-flush flex-column mb-auto text-center">
          
          {/* Elemento de la barra lateral: Home */}
          <li className="nav-link py-3 border-bottom">
              <HomeIcon className="HomeIcon mr-2" />
              <span>Home</span>
          </li>

          {/* Elemento de la barra lateral: Musica */}
          <li className="nav-link py-3 border-bottom">
              <span>
              <AudiotrackIcon className="AudiotrackIcon mr-2" />
              </span>
              <span>Music</span>
          </li>

          {/* Elemento de la barra lateral: Peliculas */}
          <li className="nav-link py-3 border-bottom">
              <span>
              <MovieIcon className="MovieIcon mr-2" />
              </span>
              <span>Films</span>
          </li>

          {/* Elemento de la barra lateral: Series */}
          <li className="nav-link py-3 border-bottom">
              <span>
              <SlideshowIcon className="SlideshowIcon mr-2" />
              </span>
              <span>Series</span>
          </li>

          {/* Elemento de la barra lateral: Biblioteca */}
          <li className="nav-link py-3 border-bottom">
              <span>
              <HiveIcon className="HiveIcon mr-2" />
              </span>
              <span>Hive</span>
          </li>

          {/* Elemento de la barra lateral: Help */}
          <li className="nav-link py-3 border-bottom">
              <span>
              <HelpOutlineIcon className="mr-2" />
              </span>
              <span>Help</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftToolBar;
