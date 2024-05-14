import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';

import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import MusicaResultados from "./Components/MusicaResultados";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
import Biblioteca from "./Components/Biblioteca";
import Cancion from "./Components/Cancion";

import "./styles/App.css"

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <TopNavBar name="Inicio"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/musica' element={
          <>
            <TopNavBar name="Música"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Musica/>
                  </div>
              </div>
          </>
        }/>
        <Route path='/musica/:busqueda' element={
          <>
            <TopNavBar name="Resultados"/>
              <div style={{display: "flex"}}>
                <LeftToolBar />
                  <div className="contenido">
                    <MusicaResultados />
                  </div>
              </div>
          </>
        }/>
        <Route path='/peliculas' element={
          <>
            <TopNavBar name="Películas"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Peliculas />
                  </div>
              </div>
          </>
        }/>
        <Route path='/series' element={
          <>
            <TopNavBar name="Series"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Series />
                  </div>
              </div>
          </>
        }/>
        <Route path='/biblioteca' element={
          <>
            <TopNavBar name="Biblioteca"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Biblioteca />
                  </div>
              </div>
          </>
        }/>
        <Route path='/cancion/:id' element={
          <>
            <TopNavBar name="Canción"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Cancion />
                  </div>
              </div>
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;
