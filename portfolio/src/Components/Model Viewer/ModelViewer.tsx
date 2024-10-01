
 import { OrbitControls, Environment } from '@react-three/drei';
 import { Canvas } from '@react-three/fiber';
 import { Wizard } from '../Wizard/Wizard';

 export const ModelViewer: React.FC = () => {
    
         return (
            <div id="ViewerContainer" className='flex items-center justify-center  w-full'>

            <Canvas
             id='Canvas'
             className='flex h-full w-full min-h-screen items-center justify-center ' 
            
             >
                <Environment preset='forest'/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <Wizard/>
            </Canvas>


            </div>
     
         );

        };
