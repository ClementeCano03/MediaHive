
import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';

import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";
import Biblioteca from "./Components/Biblioteca";

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
        <Route path='/musica' element={
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
        <Route path='/peliculas' element={
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
        <Route path='/series' element={
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
        <Route path='/biblioteca' element={
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
