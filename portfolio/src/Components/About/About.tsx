'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="About" className="  flex flex-col fixed items-center mt-14 max-w-screen-md justify-center  lg:grid lg:grid-cols-2       ">
            
             

                    <ModelViewer />
                    <Description/>
                 
        
                     
             </div>

    )
}