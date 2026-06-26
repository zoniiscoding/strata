import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { BoxGeometry, EdgesGeometry } from 'three';

export function WireframeVolume() {
  const volumeRef = useRef();
  const edgeGeometry = useMemo(() => new EdgesGeometry(new BoxGeometry(1, 1, 1)), []);

  useEffect(() => {
    return () => {
      edgeGeometry.dispose();
    };
  }, [edgeGeometry]);

  useFrame(({ clock }) => {
    if (!volumeRef.current) {
      return;
    }

    volumeRef.current.rotation.y = -clock.getElapsedTime() * 0.024;
    volumeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.14) * 0.025;
  });

  return (
    <lineSegments ref={volumeRef} geometry={edgeGeometry} scale={[3.9, 4.2, 3.35]}>
      <lineBasicMaterial color="#eaeaea" transparent opacity={0.052} depthWrite={false} />
    </lineSegments>
  );
}
