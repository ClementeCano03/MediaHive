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
import CrearCuenta from "./Components/CrearCuenta";
import DetallesPeliculas from "./Components/detallesPeliculas";
import DetallesSeries from "./Components/detallesSeries";
import Perfil from "./Components/Perfil";
import "./styles/App.css"

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <TopNavBar name="Inicio" className="top-nav-bar-app"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/Inicio' element={
          <>
            <TopNavBar name="Inicio" className="top-nav-bar-app"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/Inicio/:nombreUsuario' element={
          <>
            <TopNavBar name="Inicio" className="top-nav-bar-app"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/CrearCuenta' element={
          <>
            <TopNavBar name="Inicio" className="top-nav-bar-app"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <CrearCuenta />
              </div>
            </div>
          </>
        }/>
         <Route path='/perfil' element={
          <>
            <TopNavBar name="Tu Perfil" className="top-nav-bar-app"/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Perfil />
              </div>
            </div>
          </>
        }/>
        <Route path='/musica' element={
          <>
            <TopNavBar name="Música" className="top-nav-bar-app"/>
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
            <TopNavBar name="Resultados" className="top-nav-bar-app"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <MusicaResultados />
                  </div>
              </div>
          </>
        }/>
        <Route path='/peliculas' element={
          <>
            <TopNavBar name="Películas" className="top-nav-bar-app"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Peliculas />
                  </div>
              </div>
          </>
        }/>

        <Route path="/detallesPeliculas/:id" element={
          <>
            <TopNavBar name="Peliculas" className="top-nav-bar-app"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                <div className="contenido">
                  <DetallesPeliculas />
                </div>
              </div>
          </> 
        }/>
        <Route path="/detallesSeries/:id" element={
          <>
            <TopNavBar name="Series" className="top-nav-bar-app"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                <div className="contenido">
                  <DetallesSeries />
                </div>
              </div>

          </> 
        }/>

        <Route path='/series' element={
          <>
            <TopNavBar name="Series" className="top-nav-bar-app"/>
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
            <TopNavBar name="Biblioteca" className="top-nav-bar-app"/>
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
            <TopNavBar name="Canción" className="top-nav-bar-app"/>
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