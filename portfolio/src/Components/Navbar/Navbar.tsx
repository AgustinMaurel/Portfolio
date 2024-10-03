'use client'

import { FaHome } from "react-icons/fa";

import { GrLanguage } from "react-icons/gr";
import CustomButtonNavbar from "../CustomButtonNavbar/CustomButtonNavbar";
import Link from "next/link";

export default function Navbar(){

    return (
<nav className="flex fixed top-0 z-50 justify-center items-center text-lg   h-14 bg-licor w-full border-none">
        
    <div className="flex justify-between items-center h-full w-full max-w-screen-lg ">

        <Link className="flex hover:text-ecru justify-start gap-2 items-center w-full"    href="/">
            <FaHome/>
            <CustomButtonNavbar title={"Inicio"} href="/" styles="CustomButtonNavbar"/>
        </Link>

        <ul className="flex  items-center justify-between w-full ">
            <CustomButtonNavbar title={"About"} href="#About" styles="CustomButtonNavbar"/>
            <CustomButtonNavbar title={"Skills"} href="#Skills" styles="CustomButtonNavbar"/>
            <CustomButtonNavbar title={"Recommendations"} href="#Recommendations" styles="CustomButtonNavbar"/>
            
            <GrLanguage
            className="CustomButtonNavbar hover:cursor-pointer"
            
            />
        </ul>
    
    </div>
</nav>
    )
}

