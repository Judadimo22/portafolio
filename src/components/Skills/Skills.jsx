import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiDart, SiChakraui, SiTailwindcss, SiReact, SiNodedotjs, SiGithub, SiVite,  SiFigma, SiSlack,  SiExpress, SiAxios, SiFlutter, SiTrello  } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io5";

export const Skills = () => {
    return (
        <div className="px-[50px] pt-[50px]">
            <h1 className="text-center font-vt3 text-[40px] text-[#00FFFF]">SKILLS</h1>
            <h2 className="font-vt3 text-[25px] text-white text-center mt-[50px]">Lenguajes</h2>
            <div className='flex justify-around px-[200px] mt-[20px]'>
                <span className='text-[50px]'><SiJavascript/></span>
                <span className='text-[50px]'><SiHtml5/></span>
                <span className='text-[50px]'><SiCss3/></span>
                <span className='text-[50px]'><SiDart/></span>
            </div>
            <h2 className="font-vt3 text-[25px] text-white text-center mt-[70px]">Frameworks y librerías</h2>
            <div className='flex justify-around px-[200px] mt-[20px]'>
                <span className='text-[50px]'><SiChakraui/></span>
                <span className='text-[50px]'><SiTailwindcss/></span>
                <span className='text-[50px]'><SiReact/></span>
                <span className='text-[50px]'><SiNodedotjs/></span>
                <span className='text-[50px]'><SiAxios/></span>
                <span className='text-[50px]'><SiFlutter/></span>
            </div>
            <h2 className="font-vt3 text-[25px] text-white text-center mt-[70px] flex-wrap">Tecnologías y herramientas</h2>
            <div className='flex justify-around px-[200px] mt-[20px]'>
                <span className='text-[50px]'><SiGithub/></span>
                <span className='text-[50px]'><IoLogoNpm/></span>
                <span className='text-[50px]'><SiVite/></span>
                <span className='text-[50px]'><SiFigma/></span>
                <span className='text-[50px]'><SiSlack/></span>
                <span className='text-[50px]'><SiExpress/></span>
                <span className='text-[50px]'><SiTrello/></span>
            </div>
        </div>
    )
}