import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

useGLTF.preload('/crafting_table.glb');

const CraftingTable = () => {
  const { scene } = useGLTF('/crafting_table.glb');

  useEffect(() => {
    scene.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        // Set the shadow properties on the Mesh
        node.castShadow = true;
        node.receiveShadow = true;

        // Handle the case where the material might be an array
        const materials = Array.isArray(node.material)
          ? node.material
          : [node.material];

        materials.forEach((material) => {
          // Check if the material has a color property and supports shadows
          if (
            material instanceof THREE.MeshStandardMaterial ||
            material instanceof THREE.MeshPhysicalMaterial ||
            material instanceof THREE.MeshBasicMaterial ||
            material instanceof THREE.MeshLambertMaterial ||
            material instanceof THREE.MeshPhongMaterial ||
            material instanceof THREE.MeshToonMaterial
          ) {
            // Material is compatible, so no need to replace
          } else {
            // Replace the material with one that supports shadows
            node.material = new THREE.MeshStandardMaterial({
              color: new THREE.Color('white'), // Default color or set as needed
            });
          }
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      castShadow
      receiveShadow
      //   position={[-0.07, 0, -5]}
      position={[-0.07, 0, -2]}
      scale={[1.8, 1.8, 1.8]}
    />
  );
};

export default CraftingTable;
