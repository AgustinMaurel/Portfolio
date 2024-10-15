'use client'
import { useEffect, useState, Suspense } from 'react';
 import { OrbitControls, Environment, PerspectiveCamera, } from '@react-three/drei';
 import { Canvas } from '@react-three/fiber';
 import { Wizard } from '../Wizard/Wizard';
 import { Triangle } from 'react-loader-spinner';
 


 export const ModelViewer: React.FC = () => {

   const [isLargeScreen, setIsLargeScreen] = useState(false);
   
  

   useEffect(() => {
      const updateIsLargeScreen = () => setIsLargeScreen(window.innerWidth >= 1280); // xl breakpoint in Tailwind
  
      updateIsLargeScreen(); // Set initial value
      window.addEventListener('resize', updateIsLargeScreen);
      
      return () => window.removeEventListener('resize', updateIsLargeScreen);
      
    }, []);

         return (
            <div id="ViewerContainer" className='flex  items-center justify-center  xl:pt-0 w-screen h-[480px] xl:h-full xl:w-full   '>
               <Suspense fallback={
                  <Triangle
                     visible={true}
                     height="80"
                     width="80"
                     color="#DEBA6F"
                     ariaLabel="triangle-loading"
                     wrapperStyle={{}}
                     wrapperClass=" pb-20"
               />
               }>
            <Canvas
             id='Canvas'
          
             style={{width: `100%`, height: `100%`, position: `relative` , display:"flex", justifyItems:"center", overflow:"auto", touchAction:"pan-y"  }}
             >
                <Wizard /> 
                <Environment preset='forest'/>
                <OrbitControls  enableRotate={false} enablePan={true}  panSpeed={1}  enableZoom={false} autoRotate={true}/>
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
