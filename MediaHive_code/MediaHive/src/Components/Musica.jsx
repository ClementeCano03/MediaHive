import React from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';

function Musica(/*{ cambiarTituloPagina }*/) {
  //cambiarTituloPagina("Música"); // Cambia el título de la página al cargar este componente

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      {/* Contenedor de la canción */}
      <iframe
        src="https://open.spotify.com/embed/track/3cg2Y9mIiYNdcPTLKaQgK3?utm_source=generator"
        width="30%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {/* Contenedor del título y el botón */}
      <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between" }}>
        {/* Título de la canción con emoticono */}
        <h3 style={{ marginBottom: "0.5rem" }}>
          Titulo Cancion <BookmarkAddIcon style={{ marginLeft: "0.5rem" }}/>
        </h3>

        {/* Estrellas */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
        </div>
      </div>

      {/* Botón para añadir comentario */}
      <Button variant="contained" color="primary">Añadir comentario</Button>
    </div>
  );
}

export default Musica;
