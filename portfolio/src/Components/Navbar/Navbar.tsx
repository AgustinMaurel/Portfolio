'use client'

import { FaHome } from "react-icons/fa";

import { GrLanguage } from "react-icons/gr";

export default function Navbar(){

    return (
<nav className="flex fixed top-0 z-50 justify-center items-center text-lg   h-14 bg-licor w-full border-none">
        
    <div className="flex justify-between items-center h-full w-full max-w-screen-lg ">

        <a className="flex hover:text-ecru justify-start gap-2 items-center w-full" href="">
            <FaHome/>
            <span  className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth">
              Inicio
            </span>
            </a>
        <ul className="flex  items-center justify-between w-full ">
            <a className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth" href="#About">About</a>
            <a className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth" href="#Skills">Skills</a>
            <a className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth" href="">Rock</a>
            <a className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth" href="">3D</a>
            <a className="hover:text-ecru transition-all duration-300 ease-in-out scroll-smooth" href="#Recomendaciones">Recomendaciones</a>
            <GrLanguage
            className="hover:text-ecru"
            
            />
        </ul>
    
    </div>
</nav>
    )
}

