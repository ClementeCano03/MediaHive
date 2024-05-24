import React, { useEffect, useState } from "react";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

import '../Styles/Cancion.css';
import { useParams } from "react-router-dom";

function Cancion(props) {

  // Autores de comentarios
  const autores = [
    "John Doe", "Alice Smith", "Michael Johnson", "Emily Brown", "David Lee",
    "Emma Garcia", "Daniel Martinez", "Olivia Wilson", "James Taylor", "Sophia Anderson",
    "William Clark", "Ava Rodriguez", "Benjamin Hernandez", "Mia Moore", "Jacob Perez",
    "Charlotte Davis", "Alexander Gonzalez", "Amelia Martinez", "Ethan Wilson", "Harper Lopez",
    "Liam Thompson", "Isabella Carter", "Christopher Thomas", "Sophia Baker", "Ryan Reed",
    "Madison Young", "Elijah Scott", "Scarlett Evans", "Nathan Morris", "Grace Turner"
  ];

  // Comentarios
  const comentarios = [
    "¡Qué gran canción!",
    "Me encanta esta melodía",
    "La letra es realmente inspiradora",
    "No puedo dejar de escuchar esta canción",
    "Este ritmo me hace bailar",
    "La peor canción que he escuchado en mi vida",
    "No entiendo por qué esta canción es tan popular",
    "La letra no tiene sentido",
    "No me gusta el ritmo de esta canción",
    "Es aburrida y monótona",
    "Simplemente genial",
    "Increíblemente hermosa",
    "Me hace sentir emociones que no puedo describir",
    "Es la mejor canción que he escuchado en mucho tiempo",
    "La recomendaría a todo el mundo",
    "No puedo parar de escucharla",
    "Cada vez que la escucho, descubro algo nuevo",
    "Una obra maestra",
    "Me inspira a ser mejor cada día",
    "Simplemente horrible",
    "No me esperaba menos de esta canción",
    "Una decepción total",
    "Le falta algo",
    "No me hace sentir nada",
    "Podría mejorar",
    "Me deja indiferente",
    "Más de lo mismo",
    "No la recomendaría",
    "No es para mí",
    "Una sorpresa agradable"
  ];

  // Estado para almacenar los comentarios aleatorios actuales
  const [comentariosAleatorios, setComentariosAleatorios] = useState([]);

  // Estado para almacenar el comentario del usuario
  const [userComment, setUserComment] = useState("");

  // Estado para rastrear las estrellas resaltadas y seleccionadas
  const [highlightedStars, setHighlightedStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  // Función para manejar el evento onMouseOver de las estrellas
  const handleStarHover = (index) => {
    setHighlightedStars(index); // Resalta hasta el índice especificado
  };

  // Función para manejar el evento onMouseOut de las estrellas
  const handleStarMouseOut = () => {
    setHighlightedStars(selectedStars); // Restaura el resaltado según las estrellas seleccionadas
  };

  // Función para manejar el clic en una estrella
  const handleStarClick = (index) => {
    setSelectedStars(index); // Establece las estrellas seleccionadas
    setHighlightedStars(index); // Resalta hasta el índice especificado
  };

  // Función para obtener un elemento aleatorio de un array
  const obtenerElementoAleatorio = (array) => {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  };

  // Función para generar 5 comentarios aleatorios y únicos
  const generarComentariosAleatorios = () => {
    const comentariosAleatorios = [];
    while (comentariosAleatorios.length < 4) {
      const comentario = obtenerElementoAleatorio(comentarios);
      const autor = obtenerElementoAleatorio(autores);
      if (!comentariosAleatorios.some((com) => com.texto === comentario)) {
        comentariosAleatorios.push({ texto: comentario, autor });
      }
    }
    setComentariosAleatorios(comentariosAleatorios);
  };

  // Función para manejar el envío del comentario del usuario
  const handleUserCommentSubmit = () => {
    if (userComment.trim() !== "") {
      const nuevoComentario = { texto: userComment, autor: "Usuario" };
      setComentariosAleatorios((prevComments) => [...prevComments, nuevoComentario]);
      setUserComment(""); // Limpiar el cuadro de texto después de enviar el comentario
    }
  };

  // Función para manejar el cambio en el cuadro de texto del comentario del usuario
  const handleUserCommentChange = (event) => {
    setUserComment(event.target.value); // Actualiza el comentario del usuario
  };

  let { id } = useParams();
  const [titulo, setTitulo] = useState('')
  const [artista, setArtista] = useState('')
  const [imagen, setImagen] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cf42432a51mshc59efc010eefd05p1b512djsn94445674b732',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong() {
    try {
      let url = `https://spotify23.p.rapidapi.com/tracks/?ids=${id}`;
      let data = await fetch(url, options);
      let res = await data.json();
      setTitulo(res.tracks[0].name);
      getArtist(res.tracks[0].artists[0].id);
      console.log(res);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  async function getArtist(idArtista) {
    try {
      let url2 = `https://spotify23.p.rapidapi.com/artists/?ids=${idArtista}`;
      let data2 = await fetch(url2, options);
      let res2 = await data2.json();
      setArtista(res2.artists[0].name);
      setImagen(res2.artists[0].images[0].url);
      console.log(res2);

    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  /* Función para guardar la canción */
  const handleCancionSave = () => {
    if (localStorage.getItem('cancionesSaved') === null) {
      localStorage.setItem('cancionesSaved', JSON.stringify([id]));
    } else {
      let cancionesSaved = JSON.parse(localStorage.getItem('cancionesSaved'));
      if (!cancionesSaved.includes(id)) {
        cancionesSaved.push(id);
        localStorage.setItem('cancionesSaved', JSON.stringify(cancionesSaved));
      }
    }
  }

  useEffect(() => {
    // Esta función se llamará directamente después de abrir la página
    getSong();
    generarComentariosAleatorios();
  }, []);

  return (
    <div>
      {
      // <div className="MusicaContainer">
      //   {/* Contenedor de la canción */}
      //   <iframe
      //     className="SongContainer"
      //     src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
      //     width="50%"
      //     height="55%"
      //     frameBorder="0"
      //     allowFullScreen="true"
      //     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      //     loading="lazy"
      //   ></iframe>

      //   {/* Contenedor del título y la información */}
      //   <div className="SongInfoContainer">
      //     {/* Título de la canción con emoticono */}
      //     <h3 className="SongTitle">
      //       {titulo}
      //       <button onClick={handleCancionSave} style={{ border: 'none', background: 'transparent' }}>
      //         <BookmarkAddIcon className="BookmarkIcon" style={{ marginLeft: '10%', marginBottom: '7%', color: 'black' }} />
      //       </button>
      //     </h3>

      //     {/* Estrellas */}
      //     <div className="StarContainer">
      //       {[1, 2, 3, 4, 5].map((index) => (
      //         <StarIcon
      //           key={index}
      //           onMouseOver={() => handleStarHover(index)}
      //           onMouseOut={handleStarMouseOut}
      //           onClick={() => handleStarClick(index)}
      //           className="StarIcon"
      //           style={{ color: index <= highlightedStars ? 'yellow' : 'inherit' }}
      //         />
      //       ))}
      //     </div>
      //   </div>

      //   {/* Contenedor de la imagen y el artista */}
      //   <div className="Artista"> 
      //     <img src={imagen} />
      //     <h3>{artista}</h3>
      //   </div>

      // </div> 
    }

<div>
  <div className="row">
    <div className="MusicaContainer col-md-7">
      {/* Contenedor de la canción */}
      <iframe
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="80%"
        height="400px"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div className="col-md-5" style={{ paddingTop: '30px' }}>
      {/* Contenedor del título y la información */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {/* Título de la canción con emoticono */}
        <div>
          <h3 className="SongTitle">
            {titulo}
            <button onClick={handleCancionSave} style={{ border: 'none', background: 'transparent' }}>
              <BookmarkAddIcon className="BookmarkIcon" style={{ marginLeft: '10%', marginBottom: '7%', color: 'black' }} />
            </button>
          </h3>
        </div>
        {/* Estrellas */}
        <div className="StarContainer">
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
              key={index}
              onMouseOver={() => handleStarHover(index)}
              onMouseOut={handleStarMouseOut}
              onClick={() => handleStarClick(index)}
              className="StarIcon"
              style={{ color: index <= highlightedStars ? 'yellow' : 'inherit' }}
            />
          ))}
        </div>
        {/* Contenedor de la imagen y el artista */}
        <div className="Artista"> 
          <img src={imagen} />
          <h3>{artista}</h3>
        </div>
      </div>
    </div>   
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-md-6">
      <h4 className="CommentTitle">Comentarios:</h4>
      <div className="tabla">
        {comentariosAleatorios.map((comment, index) => (
          <div key={index} className="CommentBox">
            <p><strong>{comment.autor}</strong>: {comment.texto}</p>
          </div>
        ))}
      </div>
      <Button variant="contained" color="secondary" className="NextCommentButton" onClick={generarComentariosAleatorios}>
        Ver más comentarios
      </Button>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-4">
      <div className="UserInputContainer">
          {/* Cuadro de texto para la opinión del usuario */}
          <textarea
            placeholder="Escribe tu opinión aquí..."
            value={userComment}
            onChange={handleUserCommentChange}
            className="UserOpinion"
            style={{ width: '100%', height: '100px' }}
          />
          {/* Botón para añadir comentario */}
          
        </div>
        <Button variant="contained" color="primary" className="CommentButton" onClick={handleUserCommentSubmit}>
          Añadir comentario
        </Button>
      </div>
    </div>
  </div>
        
         
    </div>
  );
}

export default Cancion;