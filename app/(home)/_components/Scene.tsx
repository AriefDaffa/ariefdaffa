/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import * as THREE from 'three';
import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, useTexture, useProgress } from '@react-three/drei';
import { useTheme } from 'next-themes';

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const Ground = () => {
  const [floor, normal] = useTexture([
    '/model/SurfaceImperfections003_1K_var1.jpg',
    '/model/SurfaceImperfections003_1K_Normal.jpg',
  ]);

  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  const { progress } = useProgress();

  return (
    <div className="size-full relative">
      <div className="absolute size-full top-0 flex items-center justify-center">
        <div className="">Loading {progress}...</div>
      </div>
      <Canvas gl={{ alpha: false }} camera={{ position: [0, 3, 100], fov: 15 }}>
        <color
          attach="background"
          args={[theme === 'dark' ? 'black' : 'white']}
        />
        <fog
          attach="fog"
          args={[theme === 'dark' ? 'black' : 'white', 15, 20]}
        />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <VideoText position={[0, 1.3, -2]} /> */}
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
