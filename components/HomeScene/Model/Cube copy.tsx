import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

useGLTF.preload('/minecraft_chest.glb');

const Cube = () => {
  const { scene, animations } = useGLTF('/minecraft_chest.glb');
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();
  const animationPlaying = useRef(true);
  const freezeAtScrollOffset = 0.6;
  const freezeTime = useRef(0);

  // Ensure the animation exists and start playing it
  useEffect(() => {
    if (actions['Chest_0_A|Chest_0_AAction']) {
      actions['Chest_0_A|Chest_0_AAction'].play();
      actions['Chest_0_A|Chest_0_AAction'].paused = false; // Ensure the animation is not paused
    } else {
      console.error('Animation not found:', 'Chest_0_A|Chest_0_AAction');
    }
  }, [actions]);

  // Update the animation based on scroll position
  useFrame(() => {
    if (actions['Chest_0_A|Chest_0_AAction']) {
      const duration = actions['Chest_0_A|Chest_0_AAction'].getClip().duration;
      const scrollOffset = scroll.offset;

      if (scrollOffset <= freezeAtScrollOffset) {
        // Continue animating normally
        actions['Chest_0_A|Chest_0_AAction'].timeScale = 1; // Normal playback
        actions['Chest_0_A|Chest_0_AAction'].time = duration * scrollOffset;
        animationPlaying.current = true;
        freezeTime.current = actions['Chest_0_A|Chest_0_AAction'].time; // Save the current animation time
      } else {
        // Freeze the animation at the current time
        if (animationPlaying.current) {
          actions['Chest_0_A|Chest_0_AAction'].paused = true;
          actions['Chest_0_A|Chest_0_AAction'].time = freezeTime.current; // Ensure animation is at the frozen time
          animationPlaying.current = false;
        }
      }

      // If the scroll position is above the freeze point, ensure the animation is paused
      if (scrollOffset > freezeAtScrollOffset) {
        actions['Chest_0_A|Chest_0_AAction'].paused = true;
        actions['Chest_0_A|Chest_0_AAction'].time = freezeTime.current;
      }
    }
  });

  return (
    <primitive
      object={scene}
      castShadow
      receiveShadow
      position={[0, 0, 0]}
      scale={[0.01, 0.01, 0.01]}
    />
  );
};

export default Cube;
