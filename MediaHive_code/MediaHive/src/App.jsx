import React from "react";
import TopNavBar from "./Components/TopNavBar";
import LeftToolBar from "./Components/LeftToolBar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Series from "./Components/Series";

{/* function App(){
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
*/}

function App() {

  <Routes>
    <Route path="/" element={<Series />}/>
  </Routes>

  
}

export default App
