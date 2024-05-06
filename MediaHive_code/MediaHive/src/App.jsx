import React from "react";
import TopNavBar from "./Components/TopNavBar";
import LeftToolBar from "./Components/LeftToolBar";
import Peliculas from "./Components/Peliculas";
import Series from "./Components/Series";

function App(){
  return(
    <>
      <TopNavBar />
      <div style={{ display: 'flex'}}>
        <LeftToolBar />
        <Series />
      </div>
      
    </>
  )
}

export default App
