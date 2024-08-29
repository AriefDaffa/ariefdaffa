import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

useGLTF.preload('/minecraft_chest.glb');

const Cube = () => {
  const { scene, animations } = useGLTF('/minecraft_chest.glb');
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    const action = actions['Chest_0_A|Chest_0_AAction'];
    if (action) {
      action.reset().setLoop(THREE.LoopRepeat, Infinity).play();
      const duration = action.getClip().duration;
      action.time = duration * 0.4; // Set animation time to 40% of duration (corresponding to 60% scroll)
      action.paused = true; // Start with the animation paused at 60%
    } else {
      console.error('Animation not found:', 'Chest_0_A|Chest_0_AAction');
    }
  }, [actions]);

  useFrame(() => {
    const action = actions['Chest_0_A|Chest_0_AAction'];
    if (action) {
      const duration = action.getClip().duration;
      const scrollOffset = scroll.offset;

      if (scrollOffset >= 0.6) {
        action.timeScale = -1; // Reverse playback
        action.time = duration * (1 - scrollOffset); // Adjust time based on scroll
        action.paused = false; // Unpause the animation
        if (!action.isRunning()) {
          action.play();
        }
      } else {
        action.timeScale = 0; // Stop playback
        action.time = duration * 0.4; // Keep animation at 40% of its duration
        action.paused = true; // Pause the animation to keep it frozen at this frame
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
