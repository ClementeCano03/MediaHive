// App.js
import React from 'react';
import TopNavBar from './Components/TopNavBar';
import LeftToolBar from './Components/LeftToolBar';
import Musica from './Components/Musica';
import { Routes, Route } from 'react-router-dom';

import "./styles/App.css"

function App(){
  return(
        <Routes>
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
        </Routes>
  
  );
}

export default App;
