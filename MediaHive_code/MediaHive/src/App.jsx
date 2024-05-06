// App.js
import React from 'react';
import TopNavBar from './Components/TopNavBar';
import LeftToolBar from './Components/LeftToolBar';
import Musica from './Components/Musica';
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'flex-start' }}>
      <TopNavBar />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftToolBar />
        <Routes>
          <Route path="/musica" element={<Musica />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
