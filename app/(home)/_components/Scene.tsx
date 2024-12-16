/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { useTheme } from 'next-themes';

import { Model } from './Model';

const Scene = () => {
  const { theme } = useTheme();
  const { progress } = useProgress();

  return (
    <div className="relative w-full h-screen md:h-[calc(100vh-210px)]">
      {progress !== 100 && (
        <div className="absolute size-full top-0 flex items-center justify-center z-30">
          <div className="">Loading {progress}%</div>
        </div>
      )}
      <div className="absolute right-4 bottom-4 z-20 text-right">
        <div className="text-sm">Model by</div>
        <div className="">腱鞘炎の人</div>
      </div>
      <Canvas
        gl={{ alpha: false }}
        camera={{ position: [10, 10, 100], fov: 15 }}
      >
        <color
          attach="background"
          args={[theme === 'dark' ? 'black' : 'white']}
        />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Model position={[0, -120, 0]} scale={[90, 90, 90]} />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
