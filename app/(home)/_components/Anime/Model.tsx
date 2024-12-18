/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import * as THREE from 'three';
import React, { useEffect } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type ActionName = 'Take 001';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    base_mesh_lambert2_0: THREE.Mesh;
    Object_42: THREE.SkinnedMesh;
    Object_43: THREE.SkinnedMesh;
    Object_44: THREE.SkinnedMesh;
    Object_45: THREE.SkinnedMesh;
    Object_46: THREE.SkinnedMesh;
    Object_47: THREE.SkinnedMesh;
    Object_48: THREE.SkinnedMesh;
    Object_49: THREE.SkinnedMesh;
    Object_50: THREE.SkinnedMesh;
    Object_51: THREE.SkinnedMesh;
    Object_52: THREE.SkinnedMesh;
    Object_53: THREE.SkinnedMesh;
    Object_54: THREE.SkinnedMesh;
    Object_55: THREE.SkinnedMesh;
    Object_56: THREE.SkinnedMesh;
    Object_57: THREE.SkinnedMesh;
    Object_58: THREE.SkinnedMesh;
    Object_59: THREE.SkinnedMesh;
    Object_60: THREE.SkinnedMesh;
    Object_61: THREE.SkinnedMesh;
    Object_62: THREE.SkinnedMesh;
    Object_64: THREE.SkinnedMesh;
    Object_65: THREE.SkinnedMesh;
    Object_66: THREE.SkinnedMesh;
    Object_67: THREE.SkinnedMesh;
    Object_68: THREE.SkinnedMesh;
    Object_69: THREE.SkinnedMesh;
    Object_70: THREE.SkinnedMesh;
    Object_71: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    lambert2: THREE.MeshStandardMaterial;
    lineB_mt: THREE.MeshStandardMaterial;
    lineC_mt: THREE.MeshStandardMaterial;
    lineA_mt: THREE.MeshStandardMaterial;
    CosA_mt: THREE.MeshStandardMaterial;
    CosB_mt: THREE.MeshStandardMaterial;
    Body_mt: THREE.MeshStandardMaterial;
    HairA_mt: THREE.MeshStandardMaterial;
    HairB_mt: THREE.MeshStandardMaterial;
    Face_mt: THREE.MeshStandardMaterial;
    Cheek_mt: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>();
  const { scene, animations } = useGLTF('/model/shibahu-transformed.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Take 001']?.reset().fadeIn(0.5).play();

    return () => actions['Take 001']?.reset().fadeOut(0.5);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <mesh
          name="base_mesh_lambert2_0"
          geometry={nodes.base_mesh_lambert2_0.geometry}
          material={materials.lambert2}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_42"
          geometry={nodes.Object_42.geometry}
          material={materials.lineB_mt}
          skeleton={nodes.Object_42.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_43"
          geometry={nodes.Object_43.geometry}
          material={materials.lineC_mt}
          skeleton={nodes.Object_43.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_44"
          geometry={nodes.Object_44.geometry}
          material={materials.lineC_mt}
          skeleton={nodes.Object_44.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_45"
          geometry={nodes.Object_45.geometry}
          material={materials.lineC_mt}
          skeleton={nodes.Object_45.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_46"
          geometry={nodes.Object_46.geometry}
          material={materials.lineC_mt}
          skeleton={nodes.Object_46.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_47"
          geometry={nodes.Object_47.geometry}
          material={materials.lineC_mt}
          skeleton={nodes.Object_47.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_48"
          geometry={nodes.Object_48.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_48.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_49"
          geometry={nodes.Object_49.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_49.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_50"
          geometry={nodes.Object_50.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_50.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_51"
          geometry={nodes.Object_51.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_51.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_52"
          geometry={nodes.Object_52.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_52.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_53"
          geometry={nodes.Object_53.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_53.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_54"
          geometry={nodes.Object_54.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_54.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_55"
          geometry={nodes.Object_55.geometry}
          material={materials.CosA_mt}
          skeleton={nodes.Object_55.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_56"
          geometry={nodes.Object_56.geometry}
          material={materials.CosA_mt}
          skeleton={nodes.Object_56.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_57"
          geometry={nodes.Object_57.geometry}
          material={materials.CosB_mt}
          skeleton={nodes.Object_57.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_58"
          geometry={nodes.Object_58.geometry}
          material={materials.CosA_mt}
          skeleton={nodes.Object_58.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_59"
          geometry={nodes.Object_59.geometry}
          material={materials.CosB_mt}
          skeleton={nodes.Object_59.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_60"
          geometry={nodes.Object_60.geometry}
          material={materials.CosA_mt}
          skeleton={nodes.Object_60.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_61"
          geometry={nodes.Object_61.geometry}
          material={materials.CosB_mt}
          skeleton={nodes.Object_61.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_62"
          geometry={nodes.Object_62.geometry}
          material={materials.Body_mt}
          skeleton={nodes.Object_62.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_64"
          geometry={nodes.Object_64.geometry}
          material={materials.Body_mt}
          skeleton={nodes.Object_64.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_65"
          geometry={nodes.Object_65.geometry}
          material={materials.HairA_mt}
          skeleton={nodes.Object_65.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_66"
          geometry={nodes.Object_66.geometry}
          material={materials.HairB_mt}
          skeleton={nodes.Object_66.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_67"
          geometry={nodes.Object_67.geometry}
          material={materials.HairB_mt}
          skeleton={nodes.Object_67.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_68"
          geometry={nodes.Object_68.geometry}
          material={materials.HairB_mt}
          skeleton={nodes.Object_68.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_69"
          geometry={nodes.Object_69.geometry}
          material={materials.Face_mt}
          skeleton={nodes.Object_69.skeleton}
          morphTargetDictionary={nodes.Object_69.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_69.morphTargetInfluences}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_70"
          geometry={nodes.Object_70.geometry}
          material={materials.lineA_mt}
          skeleton={nodes.Object_70.skeleton}
          morphTargetDictionary={nodes.Object_70.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_70.morphTargetInfluences}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_71"
          geometry={nodes.Object_71.geometry}
          material={materials.Cheek_mt}
          skeleton={nodes.Object_71.skeleton}
          morphTargetDictionary={nodes.Object_71.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_71.morphTargetInfluences}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/shibahu-transformed.glb');
