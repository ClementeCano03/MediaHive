import React from "react";
import TopNavBar from "./TopNavBar";
import LeftToolBar from "./LeftToolBar";
import '../Styles/CrearCuenta.css';

function CrearCuenta() {

  const divStyle = {
    backgroundColor: '#E3E9EA',
    backgroundImage: 'none',
  };

  return(
    <div className="app-container" style={divStyle}>
      <TopNavBar />
      <div className="content">
        <LeftToolBar />
        <div className="container">
          <div className="crear-cuenta-container">
            <img src="../Images/MediaHive_icon.png"/>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default CrearCuenta;