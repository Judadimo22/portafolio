import React from "react";
import { Link } from "react-router-dom";
import { Proyectos } from "../proyectos/Proyectos";

export const SobreMi = () => {
    return(
        <div className="px-[50px] pt-[50px]">
            <h1 className="text-left font-vt3 text-[40px] text-[#00FFFF]">SOBRE MI</h1>
            <h2 className="text-left font-vt3 text-[30px] text-white">Hola, soy Juan David Diaz, fullstack developer certificado con experiencia en desarrollo web. Cuento con gran habilidad técnica a la hora de desarrollar proyectos web utilizando las tecnologías que dominan el mercado laboral, teniendo una excelente organización, iniciativa y capacidad de trabajo en equipo y trabajar de la manera más eficiente posible. Busco ampliar mi campo laboral en el desarrollo web.</h2>
            <h2 className="text-left font-vt3 text-[30px] text-white">Si tienes interés en mi perfil, no dudes en contactarme.</h2>
        </div>
    )
}