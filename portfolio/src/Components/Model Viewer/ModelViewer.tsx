
 import { OrbitControls, Environment } from '@react-three/drei';
 import { Canvas } from '@react-three/fiber';
 import { Wizard } from '../Wizard/Wizard';

 export const ModelViewer: React.FC = () => {
    
         return (
            <div id="ViewerContainer" className='flex items-center  justify-center h-full w-full   '>

            <Canvas
             id='Canvas'
             className='flex w-full items-center justify-center ' 
            
             >
                <Wizard/>
                <Environment preset='forest'/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>


            </div>
     
         );

        };
