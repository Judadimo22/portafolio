import React from "react";
import { SiTailwindcss } from "react-icons/si";
import SimpleSlider from "../components/carrusel/Carrusel";
import { NavBar } from "../components/navBar/navBar";
import { SobreMi } from "../components/sobreMi/SobreMi";
 
export const HomePage=()=>{ 
    return(
        <div className="items-center h-screen my-auto">
            <SimpleSlider/>
            <h1 className="text-center">BIENVENIDOS A MI PORTAFOLIO FULLSTACK DEVELOPER</h1>
            <h1 className="text-center">SOBRE MI</h1>
            <h2></h2>
            <label htmlFor=""><SiTailwindcss/></label>
        </div>
    )
}
