/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

'use client';

import * as THREE from 'three';
import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type ActionName = 'Bones|BonesAction';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001_Material001_0: THREE.Mesh;
    Plane001_Material001_0: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    '/model/switch-transformed.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="_rootJoint"
          position={[-0.633, 0.041, 0.076]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name="Bone001_01" rotation={[0.574, Math.PI / 2, 0]}>
            <group
              name="Cylinder001"
              rotation={[-Math.PI / 2, -0.997, -Math.PI / 2]}
            >
              <mesh
                name="Cylinder001_Material001_0"
                geometry={nodes.Cylinder001_Material001_0.geometry}
                material={materials['Material.001']}
              />
            </group>
          </group>
          <group name="Bone_00" rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <group
              name="Plane001"
              position={[-0.065, 0.633, -0.076]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                name="Plane001_Material001_0"
                geometry={nodes.Plane001_Material001_0.geometry}
                material={materials['Material.001']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/switch-transformed.glb');
