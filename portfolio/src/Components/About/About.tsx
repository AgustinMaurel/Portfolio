'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="About" className=" content-center place-items-center grid grid-cols-2 auto-cols-max grid-flow-col grid-col w-full h-full min-h-screen max-w-screen-lg pt-14   ">
            

                    <ModelViewer />
                    <Description/>
        
                     
             </div>

    )
}