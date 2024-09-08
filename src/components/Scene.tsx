import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
} from '@react-three/drei';
import { Mesh, Object3D } from 'three';
import type { GLTF } from 'three-stdlib';

// Extend the GLTF type to include custom properties
interface BunGLTF extends GLTF {
  nodes: {
    bunny: Mesh; // Specify that 'bunny' is a Mesh
  };
}

// Define a type guard to check if an Object3D is a Mesh
function isMesh(object: Object3D): object is Mesh {
  return (object as Mesh).isMesh !== undefined;
}

const Model = () => {
  const { scene } = useGLTF('/model/yellow_rubber_duck.glb');

  scene.traverse((object) => {
    if (object instanceof Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  return <primitive castShadow receiveShadow object={scene} />;
};

const Scene: React.FC = () => (
  <Canvas
    shadows
    camera={{ position: [2, 2, 10], fov: 20 }}
    style={{ height: '100vh' }}
  >
    <ambientLight intensity={1} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
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

// const Bun: React.FC<JSX.IntrinsicElements['mesh']> = (props) => {
//   // Cast the result of useGLTF to 'unknown' first and then to 'BunGLTF'
//   const gtf = useGLTF('/model/yellow_rubber_duck.glb') as unknown as BunGLTF;

//   // Perform runtime check to ensure 'nodes.bunny' is a Mesh
//   const bunny = gltf.nodes?.bunny;
//   if (!bunny || !isMesh(bunny)) {
//     console.warn('The bunny model is not available or is not a Mesh.');
//     return null; // Handle the case where the bunny is not available
//   }

//   return (
//     <primitive object={} />
//     // <mesh
//     //   castShadow
//     //   receiveShadow
//     //   geometry={bunny.geometry}
//     //   {...props}
//     //   dispose={null}
//     // >
//     //   <meshStandardMaterial color="black" />
//     // </mesh>
//   );
// };

export default Scene;
