'use client'
import { useGLTF } from '@react-three/drei'





export function Wizard() {
  const { nodes, materials } = useGLTF('/wizard.glb')
  const cube  = nodes.Cube002_0
  const finalGeometry  = cube.geometry
  return (
    
    <group   dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={finalGeometry} 
          material={materials.color}
          scale={[0.245, 0.245, 0.212]}
          
          
        />
      </group>
    </group>
  )
}

useGLTF.preload('../../../Public/wizard.glb')