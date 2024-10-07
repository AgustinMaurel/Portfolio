'use client'


import { MouseEvent, useEffect, useState } from "react";
import CustomButtonNavbar from "../CustomButtonNavbar/CustomButtonNavbar";

import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslations } from "next-intl";




export default function Navbar(){
    

    const t =useTranslations()

    const [section, setSection] = useState<string>("#About")

    const handleSection = (e : MouseEvent<HTMLAnchorElement> ) =>{
        console.log(e.target.hash)
        setSection(e.target.hash)
    }

    const activeClass="border-2 w-2/12 transition-all motion-reduce:transition-none ease-in-out duration-300"
    const offClass="border-2 w-1/12  transition-all motion-reduce:transition-none"

    const [isClient, setIsClient]= useState<boolean>(false)
    useEffect(()=>{
        setIsClient(true)    
    },[])

    return (
        <nav className="cursor-all-scroll flex flex-col fixed w-full  top-0 bottom-0 items-center justify-center  max-w-screen-md">
                
            {isClient?<div className="flex justify-between items-center h-full w-full max-w-screen-2xl ">

                    {/* <div  className=" flex h-full justify-center items-center gap-2 CustomButtonNavbar hover:cursor-pointer" >
                    <Link href={"/#About"}>
                    <FaHome className="CustomButtonNavbar hover:cursor-pointer w-6 h-6"  href=""/>
                    </Link>

                    <CustomButtonNavbar title={"Inicio"} href="/#About" styles="CustomButtonNavbar  w-full"/>

                    </div> */}
                

                <div className="flex flex-col  items-start justify-end gap-4 w-full ">
                        <div className={section.includes("About")? "flex w-full justify-start gap-2 items-center":"flex w-full opacity-40 justify-start gap-2 items-center"}>
                            <div className={section.includes("About") ? activeClass : offClass}/>
                             <CustomButtonNavbar handleClick={handleSection}  title={t("Navbar.about")} href="#About" styles="CustomButtonNavbar hover:font-semibold"/>
                        </div>
                        <div className={section.includes("Recommendations")? "flex w-full justify-start gap-2 items-center":"flex w-full opacity-40 justify-start gap-2 items-center"}>
                            <div className={section.includes("Recommendations") ? activeClass : offClass}/>
                             <CustomButtonNavbar handleClick={handleSection}  title={t("Navbar.recommendations")} href="#Recommendations" styles="CustomButtonNavbar hover:font-semibold"/>
                        </div>

                        <div className={section.includes("Skills")? "flex w-full justify-start gap-2 items-center":"flex w-full opacity-40 justify-start gap-2 items-center"}>
                            <div className={section.includes("Skills") ? activeClass :offClass}/>
                            <CustomButtonNavbar handleClick={handleSection} title={t("Navbar.skills")} href="#Skills" styles="CustomButtonNavbar hover:font-semibold"/>
                        </div>
                        <div className={section.includes("Projects")? "flex w-full justify-start gap-2 items-center":"flex w-full opacity-40 justify-start gap-2 items-center"}>
                            <div className={section.includes("Projects") ? activeClass : offClass}/>
                             <CustomButtonNavbar handleClick={handleSection} title={t("Navbar.projects")} href="#Projects" styles="CustomButtonNavbar hover:font-semibold"/>
                        </div>
                       
                   <LangSwitcher/>
                    
                    
                </div>
            
            </div>: ''}
        </nav>
    )
}

