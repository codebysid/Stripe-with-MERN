import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Shop = React.lazy(() => import("./components/Shop"));
const Cancel =React.lazy(()=>import('./components/Cancel'))
const Success = React.lazy(()=>import('./components/Success'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shop/>}/>        
        <Route path="/success" element={<Success/>}/>        
        <Route path="/cancel" element={<Cancel/>}/>        

      </Routes>
    </div>
  );
}

export default App;
