'use client'
import { useEffect, useState, Suspense } from 'react';
 import { OrbitControls, Environment, PerspectiveCamera, } from '@react-three/drei';
 import { Canvas } from '@react-three/fiber';
 import { Wizard } from '../Wizard/Wizard';
 


 export const ModelViewer: React.FC = () => {

   const [isLargeScreen, setIsLargeScreen] = useState(false);
   const [flag3D, setFlag3D] =useState(false)
  

   useEffect(() => {
      const updateIsLargeScreen = () => setIsLargeScreen(window.innerWidth >= 1280); // xl breakpoint in Tailwind
  
      updateIsLargeScreen(); // Set initial value
      window.addEventListener('resize', updateIsLargeScreen);
      setFlag3D(true)
      return () => window.removeEventListener('resize', updateIsLargeScreen);
      
    }, []);

         return (
            <div id="ViewerContainer" className='flex items-center justify-center  xl:pt-0 w-screen h-[600px] xl:h-full xl:w-full   '>
               <Suspense fallback={flag3D}>
            <Canvas
             id='Canvas'
             className='flex w-full items-center justify-center ' 
           
             style={{width: `100%`, height: `100%`, position: `relative` , display:"flex", alignContent:"baseline", alignItems:"baseline", flex:"flex-col"}}
             >
                <Wizard /> 
                <Environment preset='forest'/>
                <OrbitControls  enableZoom={false} autoRotate={true}/>
                <PerspectiveCamera
                
                  makeDefault
                  position={isLargeScreen?[2.2, 0.9, 1.8]:[2.5, 0.9, 1.8]}
                  fov={isLargeScreen?70 :60}
                  zoom={isLargeScreen? 0.3: 0.6}
                  />
            </Canvas>
               </Suspense>


            </div>
     
         );

        };