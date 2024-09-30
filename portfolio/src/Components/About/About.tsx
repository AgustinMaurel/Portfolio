'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"
import Description from "../Description/Description"

export default function About(){

    
    return (
        <div id="About" className="grid w-full h-full min-h-screen grid-flow-col  pt-14 bg-amber-300">
                     <Description/>
                     <ModelViewer />
             </div>

    )
}