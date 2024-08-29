import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { useEffect, useState, type FC } from 'react';

import Light from './Helper/Light';
import Grid from './Model/Grid';
import Cube from './Model/Cube';
import OrthoCamera from './Helper/OrthoCamera';

interface HomeSceneProps {}

// const CameraController: FC = () => {
//   const scroll = useScroll(); // Hook to access scroll state

//   useFrame((state) => {
//     const scrollY = scroll?.offset || 0; // Safely access scroll offset

//     // Initial and target positions
//     const initialPosition = [0, 20, 0];
//     const targetPosition = [10, 20, 20];

//     // Interpolate the camera position based on the scroll value
//     state.camera.position.x =
//       initialPosition[0] + (targetPosition[0] - initialPosition[0]) * scrollY;
//     state.camera.position.y =
//       initialPosition[1] + (targetPosition[1] - initialPosition[1]) * scrollY;
//     state.camera.position.z =
//       initialPosition[2] + (targetPosition[2] - initialPosition[2]) * scrollY;

//     // Lock the camera rotation
//     state.camera.rotation.set(-Math.PI / 2, 0, 0); // Example values to look directly down

//     // Ensure the camera's up direction remains constant
//     state.camera.up.set(0, 1, 0);
//   });

//   return null;
// };

const HomeScene: FC<HomeSceneProps> = () => {
  return (
    <Canvas
      shadows
      // orthographic
      // gl={{ preserveDrawingBuffer: true }}
      // camera={{ position: [10, 20, 20], zoom: 100 }}
      // camera={{ position: [0, 20, 0], zoom: 100 }}
    >
      <color attach="background" />
      <ScrollControls pages={2}>
        {/* <CameraController /> */}
        <OrthoCamera />
        <group>
          <Cube />
          {/* <Text
      config={{
        text: 'Inter',
        backside: true,
        backsideThickness: 0.15,
        samples: 16,
        resolution: 1024,
        transmission: 1,
        clearcoat: 1,
        clearcoatRoughness: 0.0,
        thickness: 0.3,
        chromaticAberration: 0.15,
        anisotropy: 0.25,
        roughness: 0,
        distortion: 0.5,
        distortionScale: 0.1,
        temporalDistortion: 0,
        ior: 1.25,
        color: 'white',
        shadow: '#94cbff',
        autoRotate: false,
      }}
    >
      Hello World
    </Text> */}
          <Grid number={23} lineWidth={0.026} height={0.5} />
        </group>
        <Light />
      </ScrollControls>
      <OrbitControls
        // autoRotate
        // autoRotateSpeed={-0.1}
        // zoomSpeed={0.25}
        // minZoom={40}
        // maxZoom={140}
        // enablePan={false}
        // dampingFactor={0.05}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI / 3}

        enableRotate={false} // Disable rotation
        enablePan={false} // Disable panning
        enableZoom={false} // Disable zooming with scroll
      />
    </Canvas>
  );
};

export default HomeScene;
