import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
import CrearCuenta from "./Components/CrearCuenta";

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        {/*        <Route path='/Musica' element={<Musica/>}/>
        <Route path='/Peliculas' element={<Peliculas/>}/>
        <Route path='/Series' element={<Series/>}/>
  */}
        <Route path='/CrearCuenta' element={<CrearCuenta/>}/>
      </Routes>
    </>
  );
}

export default App;
