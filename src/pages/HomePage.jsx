import React from "react";
import { SiTailwindcss } from "react-icons/si";
import SimpleSlider from "../components/carrusel/Carrusel";
import { NavBar } from "../components/navBar/navBar";
import { SobreMi } from "../components/sobreMi/SobreMi";
 
export const HomePage=()=>{ 
    return(
        <div className="my-auto min-h-screen flex flex-col items-center justify-center text-center">
            {/* <div className="h-[30%]">
            <SimpleSlider/>
            </div> */}
            <div className="h-[70%]">
            <h1 className="text-center font-vt3 text-[40px]">BIENVENIDOS A MI PORTAFOLIO FULLSTACK DEVELOPER</h1>
            <h1 className="text-center font-vt3 text-[40px]">SOBRE MI</h1>
            </div>
        </div>
    )
}
