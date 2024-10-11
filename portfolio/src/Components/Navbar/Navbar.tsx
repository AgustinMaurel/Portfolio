'use client'

import { MouseEvent, useEffect, useState } from "react";
import CustomButtonNavbar from "../CustomButtonNavbar/CustomButtonNavbar";

import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslations } from "next-intl";


export default function Navbar(){
    
    const t =useTranslations("Navbar")

    const [section, setSection] = useState<string>("#About")

    const handleSection = (e : MouseEvent<HTMLAnchorElement> ) =>{
     
        setSection(e.target.hash)
    }

    const activeClassLine="border-2 w-16 flex transition-all text-ecru motion-reduce:transition-none ease-in-out duration-300"

    const offClassLine="border-2 w-8 transition-all motion-reduce:transition-none"
   
    const classSectionOn = "cursor-pointer flex w-full text-ecru font-semibold justify-center gap-2 items-center"
   
    const classSectionOff = "cursor-pointer flex w-full opacity-40 justify-start gap-2 items-center"

    const [isClient, setIsClient]= useState<boolean>(false)
    useEffect(()=>{
        setIsClient(true)    
    },[])
    
    return (
        <nav className="cursor-all-scroll hidden xl:flex flex-col fixed  xl:pt-32 2xl:pt-0 top-0 bottom-0 items-center justify-center lg:lg:pl-2  max-w-screen-md">
                
            {isClient?<div className="flex justify-between items-center h-full w-full max-w-screen-2xl ">

                   
                

                <div className="flex flex-col  items-start justify-end gap-4 w-full ">

                        <div className={section.includes("About")? classSectionOn: classSectionOff}>
                            <div className={section.includes("About") ? activeClassLine : offClassLine}/>
                             <CustomButtonNavbar handleClick={handleSection}  title={t("about")} href="#About" styles="CustomButtonNavbar flex justify-start w-full hover:font-semibold"/>
                        </div>

                        <div className={section.includes("Recommendations")? classSectionOn: classSectionOff}>
                            <div className={section.includes("Recommendations") ? activeClassLine : offClassLine}/>
                             <CustomButtonNavbar handleClick={handleSection}  title={t("recommendations")} href="#Recommendations" styles="CustomButtonNavbar flex w-full justify-start hover:font-semibold"/>
                        </div>

                        <div className={section.includes("Skills")? classSectionOn: classSectionOff}>
                            <div className={section.includes("Skills") ? activeClassLine :offClassLine}/>
                            <CustomButtonNavbar handleClick={handleSection} title={t("skills")} href="#Skills" styles="CustomButtonNavbar flex w-full  hover:font-semibold"/>
                        </div>
                        
                        <div className={section.includes("Projects")? classSectionOn: classSectionOff}>
                            <div className={section.includes("Projects") ? activeClassLine : offClassLine}/>
                             <CustomButtonNavbar handleClick={handleSection} title={t("projects")} href="#Projects" styles="CustomButtonNavbar flex w-full  hover:font-semibold"/>
                        </div>
                       
                   <LangSwitcher english={t("english")} spanish={t("spanish")}/>
                    
                    
                </div>
            
            </div>: ''}
        </nav>
    )
}

