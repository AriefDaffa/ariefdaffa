import { Canvas, useFrame } from '@react-three/fiber';
import {
  Center,
  Html,
  OrbitControls,
  ScrollControls,
  Text3D,
} from '@react-three/drei';
import type { FC } from 'react';

import Light from './Helper/Light';
import Grid from './Model/Grid';
import Cube from './Model/Cube';
import OrthoCamera from './Helper/OrthoCamera';
import Text from './Model/Text';
import CraftingTable from './Model/CraftingTabe';
import Furnace from './Model/Furnace';
import Text2 from './Model/Text2';
import DivOverlay from './Model/DivOverlay';

interface HomeSceneProps {}

const HomeScene: FC<HomeSceneProps> = () => {
  return (
    <Canvas shadows>
      <color attach="background" args={['#ffffff']} />
      <Light />
      <ScrollControls pages={2}>
        <OrthoCamera />
        <DivOverlay />
        <Cube />
        {/* <CraftingTable />
        <Furnace /> */}
        {/* <Text /> */}
        {/* <Text2 /> */}
        <Grid number={23} lineWidth={0.026} height={0.5} />
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

        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default HomeScene;
