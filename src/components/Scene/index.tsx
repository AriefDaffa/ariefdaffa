import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Text } from '@react-three/drei'
import type { FC } from 'react'

import  Model  from './Laptop'
import  Orbit  from './helper/Orbit'

interface SceneProps {}

const Scene: FC<SceneProps> = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0, 99],
        fov: 20,
        zoom: 5,
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
          <Model isClicked={isClicked} handleClick={handleClick} />
        </group>
        <Bounds fit clip observe>
          {!isClicked &&
            <>
              <Text
                font="/font/Inter-Bold.woff"
                scale={[5, 5, 5]}
                position={[0, 0, -20]}
                fontWeight={400}
              >
                Hi, welcome!
              </Text>
              {/* <Text
                font="/font/Inter-Bold.woff"
                scale={[0.7, 0.7, 0.7]}
                position={[0, -3, -20]}
                fontWeight={400}
              >
                (try touching the laptop)
              </Text> */}
            </>
          }
        </Bounds>
      </Suspense>
      <Orbit isClicked={isClicked} />
    </Canvas>
  )
}

export default Scene
