'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="Intro" className=" cursor-all-scroll flex flex-col w-screen h-full relative -top-0  items-start justify-start md:items-center md:justify-center lg:flex-row lg:items-center lg:justify-center xl:pt-20  xl:justify-start xl:items-start xl:max-w-screen-sm xl:pl-2 xl:w-6/12  xl:grid  xl:grid-cols-2 xl:fixed xl:-top-56 2xl:max-w-screen-md   ">
            
             

                    <Description/>
                    <ModelViewer />
                 
        
                     
             </div>

    )
}