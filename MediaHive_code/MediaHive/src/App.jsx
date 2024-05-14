import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./Components/TopNavBar";
import LeftToolBar from "./Components/LeftToolBar";
import Peliculas from "./Components/Peliculas";
import Detalles from "./Components/detalles";
import Series from "./Components/Series";

function App() {
  return (
    <Router>
      <TopNavBar />
      <div style={{ display: 'flex' }}>
        <LeftToolBar />
        <Routes>
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/" element={<Peliculas />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
