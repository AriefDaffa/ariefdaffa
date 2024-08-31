import { Center, Text3D } from '@react-three/drei';
import type { FC } from 'react';

interface Text2Props {}

const Text2: FC<Text2Props> = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[1, -0.8, 0]}>
      <Center>
        <Text3D
          font="/Inter_Medium_Regular.json"
          size={0.3}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          // castShadow
          // receiveShadow
        >
          Start scrolling!
          <meshStandardMaterial color="gray" />
        </Text3D>
      </Center>
    </mesh>
  );
};

export default Text2;
