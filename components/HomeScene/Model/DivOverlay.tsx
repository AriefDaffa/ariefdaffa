import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, type FC } from 'react';
import { Group } from 'three';

interface DivOverlayProps {}

const DivOverlay: FC<DivOverlayProps> = () => {
  const scroll = useScroll(); // Hook to track scroll
  const divRef = useRef<HTMLDivElement>(null); // Reference to the HTML content

  const groupRef = useRef<Group>(null); // Reference to group containing HTML

  useFrame(({ camera }) => {
    const scrollValue = scroll.offset; // Get the normalized scroll value (0 to 1)

    // Calculate opacity for fade-out at 2% scroll
    const newOpacity = Math.max(1 - scrollValue / 0.02, 0);

    // Calculate scale for growing effect
    const newScale = Math.min(scrollValue / 0.02, 1); // Scale grows up to 1 at 2% scroll

    if (divRef.current) {
      // Apply dynamic styles directly to the HTML element
      divRef.current.style.opacity = newOpacity.toString();
      divRef.current.style.transform = `scale(${newScale})`;
    }

    // Ensure the group containing HTML is always facing the camera
    if (groupRef.current) {
      groupRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={groupRef}>
      <Html
        position={[0, 10, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        transform
      >
        {/* <div
          
          style={{
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            transition: 'opacity 0.1s, transform 0.1s', // Smooth transition effect
          }}
        >
          <h2 style={{ margin: 0, color: '#333' }}>Hello, 3D World!</h2>
          <p>This is an HTML element inside the canvas.</p>
        </div> */}
        <div
          ref={divRef}
          style={{ transition: 'opacity 0.5s' }}
          className="h-screen w-screen bg-black flex justify-center"
        >
          <div className="size-full max-w-screen-md flex justify-center items-center">
            <div className="text-white font-bold">Hi, and Welcome!</div>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default DivOverlay;
