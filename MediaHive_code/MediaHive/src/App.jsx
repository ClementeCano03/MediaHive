import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';

import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
import Biblioteca from "./Components/Biblioteca";
import Cancion from "./Components/Cancion";
import InicioSesion from "./Components/InicioSesion";
import CrearCuenta from "./Components/CrearCuenta";
import Ayuda from "./Components/Ayuda";


import "./styles/App.css"


function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/inicio' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/inicio/:nombreUsuario' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <Inicio />
              </div>
            </div>
          </>
        }/>
        <Route path='/InicioSesion' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <InicioSesion />
              </div>
            </div>
          </>
        }/>
        <Route path='/CrearCuenta' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div className="contenido">
                <CrearCuenta />
              </div>
            </div>
          </>
        }/>
        <Route path='/musica' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Musica />
                  </div>
              </div>
          </>
        }/>
        <Route path='/peliculas' element={
          <>
            <TopNavBar/>
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
            <TopNavBar/>
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
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Biblioteca />
                  </div>
              </div>
          </>
        }/>
        <Route path='/ayuda' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Ayuda />
                  </div>
              </div>
          </>
        }/>
        <Route path='/cancion/:id' element={
          <>
            <TopNavBar/>
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