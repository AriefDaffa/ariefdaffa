import React from 'react';

import { Preload, useGLTF, View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import type { FC } from 'react';

interface BillboardProps {}

const Billboard: FC<BillboardProps> = () => {
  const { scene } = useGLTF('/model/laptop-transformed.glb');
  return (
    <Canvas
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      <primitive object={scene} />
      <ambientLight />
      <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
      <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </Canvas>
  );
};

export default Billboard;
