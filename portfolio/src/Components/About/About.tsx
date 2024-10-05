'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="About" className=" cursor-all-scroll flex flex-col fixed -top-48  items-start h-[500px] justify-start mt-14 max-w-screen-md   lg:grid lg:grid-cols-2       ">
            
             

                    <ModelViewer />
                    <Description/>
                 
        
                     
             </div>

    )
}