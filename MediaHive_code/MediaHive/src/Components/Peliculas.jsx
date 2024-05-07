import React, { useState } from "react";

function Peliculas(/*{ cambiarTituloPagina }*/) {
  //cambiarTituloPagina("Películas"); // Cambia el título de la página al cargar este componente

  const [pelicula, setPelicula] = useState('')
  const [peliculas, setPeliculas] = useState([])

  function handleSearch(e) {
    e.preventDefault();

    if(pelicula.trim() === ''){
      alert('Debes ingresar una película');
      return;
    }

    console.log(pelicula);
    setPelicula("");
    getPelicula(pelicula);
  }

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '733197fdcamsh9fd898d4b4b0d10p1493cdjsn7aa3fb3dcb4d',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
    }
  };

  async function getPelicula(pelicula) {
    try {
      let url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${pelicula}`;
      let data = await fetch(url, options);
      let res = await data.json();
      console.log(res);
      if(res.data.length === 0){
        alert('No se han encontrado resultados');
        return;
      }
      setPeliculas(res.data);

    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  };

  return (
    <>
      <br/>
      {/*Barra de buscador*/}
      <form onSubmit={handleSearch} className="formulario" style={{display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input type="text" value={pelicula} onChange={e => setPelicula(e.target.value)} style={{
          padding: '10px',
          borderRadius: '5px',
          border: '2px solid #ccc',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
        }}
        placeholder="Buscar película..."
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

      <div className="container" style={{backgroundColor: '#F5F5F5'}}>
      {peliculas.map((pelicula, index) => (
          <div className="d-flex border-bottom border-white" key={index}>
            {pelicula.qid === 'movie' && (
              <>
                <img src={pelicula.image} style={{ width: '100px', height: '100px' }}/>
                <h2 className="align-self-center" style={{color:"black"}}>
                {pelicula.title}
                </h2>  
              </>
            )}
          </div>
      ))}
      </div>
    </>
  );
}

export default Peliculas;
