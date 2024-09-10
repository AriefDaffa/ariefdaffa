import React from 'react';
import { Canvas } from '@react-three/fiber';
import type { FC } from 'react';

import { Model } from './Laptop';

interface SceneProps {}

const Scene: FC<SceneProps> = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [-100, 100, 100],
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
      <group position={[0.25, -8, 0]}>
        <Model />
      </group>
      {/* <OrbitControls
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      /> */}
    </Canvas>
  );
};

export default Scene;
