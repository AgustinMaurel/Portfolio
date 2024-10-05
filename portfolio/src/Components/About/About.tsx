'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="About" className=" flex  flex-col top-0 left-56 fixed lg:grid lg:grid-cols-2 auto-cols-max grid-flow-col grid-col  max-w-screen-md   ">
            

                    <ModelViewer />
                    <Description/>
        
                     
             </div>

    )
}