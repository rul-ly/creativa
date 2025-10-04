import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreativaLanding from "./components/CreativaLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreativaLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;