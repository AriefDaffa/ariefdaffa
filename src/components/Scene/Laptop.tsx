import React, { useRef, useState } from 'react'
import { Bounds, Html, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import Screen from './Screen'

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model/laptop-transformed.glb') as any
  const group = useRef<THREE.Group>(null)
  const mesh = useRef<THREE.Mesh>(null)

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => setIsClicked(!isClicked)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // if (group.current) {
    //   group.current.rotation.x = THREE.MathUtils.lerp(
    //     group.current.rotation.x,
    //     Math.cos(t / 2) / 10,
    //     0.1
    //   );
    //   group.current.rotation.y = THREE.MathUtils.lerp(
    //     group.current.rotation.y,
    //     Math.sin(t / 4) / 20,
    //     0.1
    //   );
    //   group.current.rotation.z = THREE.MathUtils.lerp(
    //     group.current.rotation.z,
    //     Math.sin(t / 8) / 20,
    //     0.1
    //   );
    //   group.current.position.y = THREE.MathUtils.lerp(
    //     group.current.position.y,
    //     (-2 + Math.sin(t / 2)) / 2,
    //     0.1
    //   );
    // }

    if (mesh.current) {
      const targetRotationX = isClicked ? -Math.PI : -Math.PI / 2
      // Lerp towards the target rotation for smooth animation
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        targetRotationX,
        0.1,
      )
    }
  })

  return (
    <group onClick={handleClick} ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[0, 0.976, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        ref={mesh}
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        material={materials.ComputerScreen}
        position={[0, 0.65, -10.3]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[100, 100, 88.235]}
      >
        <Html
          className="content"
          scale={[-0.009, 0.009, 0.009]}
          position={[0, 0.1, 0]}
          transform
          occlude
        >
          <Screen />
        </Html>
      </mesh>
    </group>
  )
}

useGLTF.preload('/model/laptop-transformed.glb')
