
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Add this line
import TopNavBar from './Components/TopNavBar';
import LeftToolBar from './Components/LeftToolBar';
import Musica from './Components/Musica';
import Perfil from './Components/Perfil';
import Editar from './Components/Editar';
import Hive from './Components/Hive';

import "./styles/App.css"

function App(){
  return(
        <Routes>
        <Route path='/musica' element={
          <>
            <TopNavBar name="musica"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Musica />
                  </div>
              </div>
          </>
        }/>

        <Route path='/perfil' element={
          <>
            <TopNavBar name="Perfil"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Perfil />
                  </div>
              </div>
          </>
        }/>
        <Route path='/editar' element={
          <>
            <TopNavBar name="Perfil"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Editar />
                  </div>
              </div>
          </>
        }/>
        <Route path='/hive' element={
          <>
            <TopNavBar name="Biblioteca"/>
              <div style={{display: "flex"}}>
                <LeftToolBar/>
                  <div className="contenido">
                    <Hive />
                  </div>
              </div>
          </>
        }/>
        </Routes>
  
  );
}

export default App;
