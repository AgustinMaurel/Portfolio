'use client'
import { ModelViewer } from "../Model Viewer/ModelViewer"


export default function About(){

    
    return (
        <div id="About" className="flex w-full h-full min-h-screen justify-between items-center bg-amber-300">
                     <span>About</span> 
                     <ModelViewer />
             </div>

    )
}