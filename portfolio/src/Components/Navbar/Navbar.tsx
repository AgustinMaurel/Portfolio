'use client'

import { FaHome } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useEffect, useState } from "react";
import CustomButtonNavbar from "../CustomButtonNavbar/CustomButtonNavbar";
import Link from "next/link";


export default function Navbar(){

    const [isClient, setIsClient]= useState<boolean>(false)
    useEffect(()=>{
        setIsClient(true)
    },[])
    return (
        <nav className="flex fixed top-0 z-50 justify-center items-center text-lg  h-14 bg-licor w-full border-none">
                
            {isClient?<div className="flex justify-between items-center h-full w-full max-w-screen-lg ">

                    <div  className=" flex h-full justify-center items-center gap-2 CustomButtonNavbar hover:cursor-pointer" >
                    <Link href={"/#About"}>
                    <FaHome className="CustomButtonNavbar hover:cursor-pointer w-6 h-6"  href=""/>
                    </Link>

                    <CustomButtonNavbar title={"Inicio"} href="/#About" styles="CustomButtonNavbar  w-full"/>

                    </div>
                

                <ul className="flex  items-center justify-end gap-4 w-full ">
                    <CustomButtonNavbar title={"About"} href="#About" styles="CustomButtonNavbar"/>
                    <CustomButtonNavbar title={"Skills"} href="#Skills" styles="CustomButtonNavbar"/>
                    <CustomButtonNavbar title={"Recommendations"} href="#Recommendations" styles="CustomButtonNavbar"/>
                    
                    <GrLanguage
                    className="CustomButtonNavbar hover:cursor-pointer"
                    
                    />
                </ul>
            
            </div>: ''}
        </nav>
    )
}

