import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { Box3, MathUtils, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';

const HOODIE_MODEL_PATH = '/models/hoodie.glb';
const TARGET_MODEL_HEIGHT = 2.72;

export function HoodieModel() {
  const modelRef = useRef();
  const { scene } = useGLTF(HOODIE_MODEL_PATH);
  const { center, modelScale, modelScene } = useMemo(() => {
    const clonedScene = scene.clone(true);
    const bounds = new Box3().setFromObject(clonedScene);
    const size = bounds.getSize(new Vector3());
    const boxCenter = bounds.getCenter(new Vector3());
    const scale = TARGET_MODEL_HEIGHT / size.y;

    clonedScene.traverse((node) => {
      if (!node.isMesh) {
        return;
      }

      node.castShadow = true;
      node.receiveShadow = true;

      if (node.material) {
        node.material = node.material.clone();
        node.material.color?.set('#ffffff');
        node.material.roughness = node.material.name?.includes('HOODIE') ? 0.82 : 0.76;
        node.material.metalness = 0;
        node.material.envMapIntensity = node.material.name?.includes('HOODIE') ? 0.42 : 0.28;
        if (node.material.name?.includes('HOODIE')) {
          node.material.emissive?.set('#080808');
          node.material.emissiveIntensity = 0.32;
        }
        node.material.needsUpdate = true;
      }
    });

    return {
      center: boxCenter,
      modelScale: scale,
      modelScene: clonedScene,
    };
  }, [scene]);

  useEffect(() => {
    return () => {
      modelScene.traverse((node) => {
        if (!node.isMesh || !node.material) {
          return;
        }

        if (Array.isArray(node.material)) {
          node.material.forEach((material) => material.dispose());
          return;
        }

        node.material.dispose();
      });
    };
  }, [modelScene]);

  useFrame(({ clock }) => {
    if (!modelRef.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    const breath = 1 + Math.sin(elapsed * 0.92) * 0.008 + Math.sin(elapsed * 1.47) * 0.003;
    modelRef.current.rotation.y = Math.sin(elapsed * 0.18) * 0.08 + elapsed * 0.035;
    modelRef.current.rotation.z = Math.sin(elapsed * 0.31) * 0.008;
    modelRef.current.position.y = Math.sin(elapsed * 0.48) * 0.038 + Math.sin(elapsed * 0.21) * 0.018;
    modelRef.current.scale.setScalar(MathUtils.lerp(modelRef.current.scale.x, breath, 0.08));
  });

  return (
    <group ref={modelRef} scale={1}>
      <primitive
        object={modelScene}
        position={[-center.x * modelScale, -center.y * modelScale, -center.z * modelScale]}
        scale={modelScale}
      />
    </group>
  );
}

useGLTF.preload(HOODIE_MODEL_PATH);
