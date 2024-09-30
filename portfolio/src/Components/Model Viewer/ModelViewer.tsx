
 import { OrbitControls, Environment } from '@react-three/drei';
 import { Canvas } from '@react-three/fiber';
 import { Wizard } from '../Wizard/Wizard';

 export const ModelViewer: React.FC = () => {
    
         return (
            <div className='flex w-full h full items-center justify-center '>

            <Canvas style={{ height: '100%', width: '100%' }}>
                <Environment preset='apartment'/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <Wizard/>
            </Canvas>


            </div>
     
         );

        };
