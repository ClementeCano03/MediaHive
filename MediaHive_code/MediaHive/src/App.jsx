import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./Components/TopNavBar";
import LeftToolBar from "./Components/LeftToolBar";
import Peliculas from "./Components/Peliculas";
import DetallesPeliculas from "./Components/detallesPeliculas";
import DetallesSeries from "./Components/detallesSeries";
import Series from "./Components/Series";

function App() {
  return (
    <Router>
      <TopNavBar />
      <div style={{ display: 'flex' }}>
        <LeftToolBar />
        <Routes>
          <Route path="/detallesPeliculas/:id" element={<DetallesPeliculas />} />
          <Route path="/detallesSeries/:id" element={<DetallesSeries />} />
          <Route path="/" element={<Series />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
