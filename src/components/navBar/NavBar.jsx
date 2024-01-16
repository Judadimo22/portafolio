import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from '../../assets/avatar.png'


export const NavBar = () => {
    const location = useLocation();
    const [colorHome, setColorHome] = useState("");
    const [colorSobreMi, setColorSobreMi] = useState("");
    const [colorProyectos, setColorProyectos] = useState("");
    const [colorSkills, setColorSkills] = useState("");
    const [colorContacto, setColorContacto] = useState("");
    useEffect(() => {
        if (location.pathname === "/") {
          setColorHome("text-white");
          setColorSobreMi("text-black");
          setColorProyectos("text-black");
          setColorSkills("text-black");
          setColorContacto("text-black");
        } else if (location.pathname === "/sobreMi") {
            setColorHome("text-black");
            setColorSobreMi("text-white");
            setColorProyectos("text-black");
            setColorSkills("text-black");
            setColorContacto("text-black");
        } else if (location.pathname === "/proyectos") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-white");
            setColorSkills("text-black");
            setColorContacto("text-black");
        } else if (location.pathname === "/skills") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-black");
            setColorSkills("text-white");
            setColorContacto("text-black");
        } else if (location.pathname === "/contacto") {
            setColorHome("text-black");
            setColorSobreMi("text-black");
            setColorProyectos("text-black");
            setColorSkills("text-black");
            setColorContacto("text-white");
        }
      }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center font-vt3 text-[20px]">
            <img className="h-[150px]" src={avatar} alt="" />
            <div className="">
            <Link to="/">
            <h1 className={`${colorHome} my-[40px]`}>Home</h1>
            </Link>
            <Link to="/sobreMi">
            <h1 className={`${colorSobreMi} my-[40px] `}>Sobre mi</h1>
            </Link>
            <Link to="/proyectos">
            <h1 className={`${colorProyectos} my-[40px]`}>Proyectos</h1>
            </Link>
            <Link to="/skills">
            <h1 className={`${colorSkills} my-[40px]`}>Skills</h1>
            </Link>
            <Link to="/contacto">
            <h1 className={`${colorContacto} my-[40px]`}>Contacto</h1>
            </Link>
            </div>
        </div>
    )
}