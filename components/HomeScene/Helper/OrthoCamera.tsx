// src/OrthoCamera.tsx
import { OrthographicCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';

const OrthoCamera = () => {
  const cameraRef = useRef<THREE.OrthographicCamera>(null);
  const scroll = useScroll();

  // Set the starting and ending zoom levels
  const startZoom = 1000; // Initial zoom level
  const endZoom = 100; // Zoom level when fully scrolled

  // Set the starting and ending positions for the camera
  const startPosition = new THREE.Vector3(0.1, 10, 0);
  const endPosition = new THREE.Vector3(10, 20, 20);

  // Ensure the camera initially looks at the center of the scene
  const targetPosition = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (cameraRef.current) {
      const scrollValue = scroll.offset; // Normalized scroll value between 0 and 1

      // Interpolate the zoom level between startZoom and endZoom
      const newZoom = THREE.MathUtils.lerp(startZoom, endZoom, scrollValue);
      cameraRef.current.zoom = newZoom;
      cameraRef.current.updateProjectionMatrix();

      // Interpolate the camera position between startPosition and endPosition
      const newPosition = new THREE.Vector3().lerpVectors(
        startPosition,
        endPosition,
        scrollValue
      );

      // Update the camera position and ensure it's always looking at the center
      cameraRef.current.position.copy(newPosition);
      cameraRef.current.lookAt(targetPosition); // Ensures the camera is always looking at the center
    }
  });

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      position={[0.1, 10, 0]} // Starting position directly above
      near={0.1}
      far={1000}
      zoom={100} // Initial zoom level
    />
  );
};

export default OrthoCamera;
