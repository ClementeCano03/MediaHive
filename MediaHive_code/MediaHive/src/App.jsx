import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";
import LeftToolBar from "./Components/LeftToolBar";
import TopNavBar from "./Components/TopNavBar";

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
          <Musica/>
        }/>
      </Routes>
    </>
  );
}

export default App;
