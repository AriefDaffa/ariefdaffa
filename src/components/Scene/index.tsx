import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import type { FC } from 'react'

import { Model } from './Laptop'
import { OrbitControls } from '@react-three/drei'

interface SceneProps {}

const CustomOrbit = () => {
  const controlsRef = useRef<any>(null)

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotateSpeed={-0.1}
      zoomSpeed={0.25}
      minZoom={40}
      maxZoom={140}
      enablePan={false}
      dampingFactor={0.05}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 4} // -22.5 degrees
      maxAzimuthAngle={Math.PI / 4}
    />
  )
}

const Scene: FC<SceneProps> = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [6.7, -0.4, 99],
        fov: 20,
        zoom: 1.5,
      }}
      style={{ height: '100vh', zIndex: 10 }}
      className="hidden lg:block"
    >
      <ambientLight intensity={1} />
      <spotLight castShadow position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <group position={[0.25, -8, 0]}>
          <Model />
        </group>
      </Suspense>
      <CustomOrbit />
    </Canvas>
  )
}

export default Scene
