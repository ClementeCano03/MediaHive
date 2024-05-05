import React from "react";
import TopNavBar from "./Components/TopNavBar";
import LeftToolBar from "./Components/LeftToolBar";
import Peliculas from "./Components/Peliculas";

function App(){
  return(
    <>
      <TopNavBar />
      <div style={{ display: 'flex'}}>
        <LeftToolBar />
        <Peliculas />
      </div>
      
    </>
  )
}

export default App
