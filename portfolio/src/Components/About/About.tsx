'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="Intro" className=" cursor-all-scroll flex flex-col fixed -top-64 items-start h-[500px] justify-start pt-20 max-w-screen-md   lg:grid lg:grid-cols-2       ">
            
             

                    <Description/>
                    <ModelViewer />
                 
        
                     
             </div>

    )
}