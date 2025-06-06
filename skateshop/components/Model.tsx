import * as React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/skateboard.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GripTape.geometry}
        material={nodes.GripTape.material}
        position={[0, 0.286, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel1.geometry}
        material={nodes.Wheel1.material}
        position={[0.238, 0.086, 0.635]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel2.geometry}
        material={nodes.Wheel2.material}
        position={[-0.237, 0.086, 0.635]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Deck.geometry}
        material={nodes.Deck.material}
        position={[0, 0.271, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel4.geometry}
        material={nodes.Wheel4.material}
        position={[-0.238, 0.086, -0.635]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolts.geometry}
        material={nodes.Bolts.material}
        position={[0, 0.198, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheel3.geometry}
        material={nodes.Wheel3.material}
        position={[0.237, 0.086, -0.635]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Baseplates.geometry}
        material={nodes.Baseplates.material}
        position={[0, 0.211, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truck1.geometry}
        material={nodes.Truck1.material}
        position={[0, 0.101, -0.617]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truck2.geometry}
        material={nodes.Truck2.material}
        position={[0, 0.101, 0.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/skateboard.gltf')