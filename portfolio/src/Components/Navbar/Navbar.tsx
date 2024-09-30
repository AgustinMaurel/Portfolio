'use client'

import { FaHome } from "react-icons/fa";

import { GrLanguage } from "react-icons/gr";

export default function Navbar(){

    return (
<nav className="flex fixed top-0 justify-center items-center text-lg font-bold h-14 bg-gradient-to-t from-slate-700 to-black w-full border-none">
        
    <div className="flex justify-between items-center h-full w-full max-w-screen-lg ">

        <a className="flex justify-start gap-2 items-center w-full" href="">
            <FaHome/>
            <span  className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth">
              Inicio
            </span>
            </a>
        <ul className="flex items-center justify-between w-full ">
            <a className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth" href="#Skills">Skills</a>
            <a className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth" href="#About">About</a>
            <a className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth" href="">Rock</a>
            <a className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth" href="">3D</a>
            <a className="hover:text-blue-600 transition-all duration-300 ease-in-out scroll-smooth" href="#Recomendaciones">Recomendaciones</a>
            <GrLanguage/>
        </ul>
    
    </div>
</nav>
    )
}

