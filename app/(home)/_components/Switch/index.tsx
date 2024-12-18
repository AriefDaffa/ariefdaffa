import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, useProgress } from '@react-three/drei';
import { useTheme } from 'next-themes';

import { Model } from './Model';

const Switch = () => {
  const { theme } = useTheme();
  const { progress } = useProgress();

  return (
    <div className="relative w-full h-screen md:h-[calc(100vh-210px)]">
      {progress !== 100 && (
        <div className="absolute size-full top-0 flex items-center justify-center z-30">
          <div className="">Loading {progress}%</div>
        </div>
      )}
      <Canvas gl={{ alpha: false }} camera={{ position: [5, 5, 10], fov: 15 }}>
        <color
          attach="background"
          args={[theme === 'dark' ? 'black' : 'white']}
        />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <Model position={[0, -120, 0]} scale={[90, 90, 90]} /> */}
            <Model position={[0, -100, 0]} scale={[1, 1, 1]} />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 60, 0]} intensity={10} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <SpotLight
            castShadow
            // ref={light}
            penumbra={1}
            distance={6}
            angle={0.35}
            attenuation={5}
            anglePower={4}
            intensity={2}
            // {...props}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Switch;
