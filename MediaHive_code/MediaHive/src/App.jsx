import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';

import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
import Biblioteca from "./Components/Biblioteca";
import CrearCuenta from "./Components/CrearCuenta";
import InicioSesion from "./Components/InicioSesion";

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div style={{ flex: 1}}>
              <Inicio/>
              </div>
            </div>
          </>
        }/>
        <Route path='/Inicio/:nomreUsuario' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div style={{ flex: 1}}>
              <Inicio/>
              </div>
            </div>
          </>
        }/>
        <Route path='/CrearCuenta' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div style={{ flex: 1}}>
              <CrearCuenta/>
              </div>
            </div>
          </>
        }/>
        <Route path='/InicioSesion' element={
          <>
            <TopNavBar/>
            <div style={{display: "flex"}}>
              <LeftToolBar/>
              <div style={{ flex: 1}}>
              <InicioSesion/>
              </div>
            </div>
          </>
        }/>
        <Route path='/Musica' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div style={{ flex: 1, backgroundColor: '#5D787D'}}>
                    <Musica />
                  </div>
              </div>
          </>
        }/>
        <Route path='/Peliculas' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div style={{ flex: 1}}>
                    <Peliculas />
                  </div>
              </div>
          </>
        }/>
        <Route path='/Series' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div style={{ flex: 1}}>
                    <Series />
                  </div>
              </div>
          </>
        }/>
        <Route path='/Biblioteca' element={
          <>
            <TopNavBar/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div style={{ flex: 1}}>
                    <Biblioteca />
                  </div>
              </div>
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;