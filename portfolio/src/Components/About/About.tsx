'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="Intro" className=" cursor-all-scroll flex flex-col  items-start justify-start pt-20 max-w-screen-md   2xl:grid 2xl:grid-cols-2   2xl:fixed 2xl:-top-64    ">
            
             

                    <Description/>
                    <ModelViewer />
                 
        
                     
             </div>

    )
}