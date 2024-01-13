import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SobreMi } from "./components/sobreMi/SobreMi";
import SimpleSlider from "./components/carrusel/Carrusel";
import { Proyectos } from "./components/proyectos/Proyectos";
import { NavBar } from "./components/navBar/navBar";

function App() {
  return (
      <div className="flex h-full items-center ">
        <div className="w-[25%] bg-green-400 items-center">
        <NavBar/>
        </div>
        <div className="w-[75%] h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobreMi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/section3" element={<Proyectos />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
