import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Inicio from "./Components/Inicio";
import Musica from "./Components/Musica";

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/musica' element={<Musica/>}/>
      </Routes>
    </>
  );
}

export default App;
