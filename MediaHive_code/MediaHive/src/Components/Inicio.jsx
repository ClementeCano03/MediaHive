import React from "react";
import TopNavBar from "./TopNavBar";
import LeftToolBar from "./LeftToolBar";
import Home from "./Home";
import '../Styles/Inicio.css';

function Inicio() {

  return(
    <div className="app-container">
      <TopNavBar />
      <div className="content">
        <LeftToolBar />
        <Home />
      </div>
    </div>
  )
}

export default Inicio;
