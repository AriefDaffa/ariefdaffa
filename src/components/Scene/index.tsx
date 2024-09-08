import {
  AccumulativeShadows,
  Bounds,
  OrbitControls,
  RandomizedLight,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import type { FC } from 'react';

import { Model } from './Laptop';

interface SceneProps {}

const Scene: FC<SceneProps> = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-100, -100, 100], fov: 20 }}
      style={{ height: '100vh', zIndex: 10 }}
      className="hidden lg:block"
    >
      <ambientLight intensity={1} />
      <spotLight castShadow position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <group position={[0.25, -1, 0]}>
        <Model />
        <AccumulativeShadows
          temporal
          frames={100}
          scale={12}
          alphaTest={0.85}
          position={[0, 0.04, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={10}
            ambient={0.5}
            position={[2.5, 5, -5]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <OrbitControls
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default Scene;
