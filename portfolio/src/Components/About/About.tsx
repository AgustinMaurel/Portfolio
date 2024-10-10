'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="Intro" className=" cursor-all-scroll flex flex-col w-screen h-full relative  items-start justify-start xl:pt-20 md:items-center md:justify-center  xl:max-w-screen-md xl:pl-2 xl:w-6/12  xl:grid xl:grid-cols-2 xl:fixed xl:-top-64    ">
            
             

                    <Description/>
                    <ModelViewer />
                 
        
                     
             </div>

    )
}