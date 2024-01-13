import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export const NavBar = () => {
    const location = useLocation();
    const [colorHome, setColorHome] = useState("");
    const [colorSobreMi, setColorSobreMi] = useState("");
    const [colorProyectos, setColorProyectos] = useState("");
    const [colorSkills, setColorSkills] = useState("");
    const [colorContacto, setColorContacto] = useState("");
    useEffect(() => {
        if (location.pathname === "/") {
          setColorHome("text-black");
          setColorSobreMi("text-black");
          setColorProyectos("text-black");
          setColorSkills("text-black");
          setColorContacto("text-black");
        } else if (location.pathname === "/sobreMi") {
            setColorHome("text-black");
            setColorSobreMi("text-blue-500");
            setColorProyectos("text-black");
            setColorSkills("text-black");
            setColorContacto("text-black");
        } else if (location.pathname === "/proyectos") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-blue-500");
            setColorSkills("text-black");
            setColorContacto("text-black");
        } else if (location.pathname === "/skills") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-black");
            setColorSkills("text-blue-500");
            setColorContacto("text-black");
        } else if (location.pathname === "/contacto") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-black");
            setColorSkills("text-black");
            setColorContacto("text-blue-500");
        }
      }, [location.pathname]);

    return (
        <div className="text-center bg-slate-400 h-screen my-auto items-center flex flex-col bg-yellow-300">
            <div className="bg-red-200 items-center">
            <Link to="/">
            <h1 className={`${colorHome}`}>Home</h1>
            </Link>
            <Link to="/sobreMi">
            <h1 className={`${colorSobreMi}`}>Sobre mi</h1>
            </Link>
            <Link to="/proyectos">
            <h1 className={`${colorProyectos}`}>Proyectos</h1>
            </Link>
            <Link to="/skills">
            <h1 className={`${colorSkills}`}>Skills</h1>
            </Link>
            <Link to="/contacto">
            <h1 className={`${colorContacto}`}>Contacto</h1>
            </Link>
            </div>
        </div>
    )
}