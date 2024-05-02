import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
//import Biblioteca from "./Components/Biblioteca";
//import Ayuda from "./Components/Ayuda";
//import InicioSesion from "./Components/InicioSesion";
import Home from "./Components/Home";
import CrearCuenta from "./Components/CrearCuenta";


function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/musica' element={<Musica/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        {/*<Route path='/biblioteca' element={<Biblioteca/>}/>*/}
        {/*<Route path='/ayuda' element={<Ayuda/>}/>*/}
        {/*<Route path='/iniciosesion' element={<InicioSesion/>}/>*/}
        <Route path='/crearcuenta' element={<CrearCuenta/>}/>
      </Routes>
      
    </>
  );
}

export default App;
