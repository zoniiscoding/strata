import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';

const CAMERA_BASE_POSITION = new Vector3(0, 0.86, 4.45);
const CAMERA_BASE_LOOK_AT = new Vector3(0, 0.06, 0);
const CAMERA_TARGET = new Vector3();
const LOOK_TARGET = new Vector3();
const DAMPED_LOOK_TARGET = new Vector3(0, 0.06, 0);

export function CameraRig() {
  const cameraRef = useRef();

  useFrame(({ clock, pointer }) => {
    if (!cameraRef.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    CAMERA_TARGET.set(
      CAMERA_BASE_POSITION.x + pointer.x * 0.18,
      CAMERA_BASE_POSITION.y + pointer.y * 0.075 + Math.sin(elapsed * 0.28) * 0.012,
      CAMERA_BASE_POSITION.z + Math.abs(pointer.x) * 0.045,
    );
    LOOK_TARGET.set(
      CAMERA_BASE_LOOK_AT.x + pointer.x * 0.055,
      CAMERA_BASE_LOOK_AT.y + pointer.y * 0.035 + Math.sin(elapsed * 0.22) * 0.01,
      CAMERA_BASE_LOOK_AT.z,
    );

    cameraRef.current.position.lerp(CAMERA_TARGET, 0.032);
    DAMPED_LOOK_TARGET.lerp(LOOK_TARGET, 0.04);
    cameraRef.current.lookAt(DAMPED_LOOK_TARGET);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={CAMERA_BASE_POSITION} fov={35} />;
}
