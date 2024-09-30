
import { useGLTF } from '@react-three/drei'

export function Wizard() {
  const { nodes, materials } = useGLTF('/wizard.glb')

  return (
    
    <group   dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry} 
          material={materials.color}
          scale={[1.045, 1.045, 1.12]} 
          
        />
      </group>
    </group>
  )
}

useGLTF.preload('wizard.glb')