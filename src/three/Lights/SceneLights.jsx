export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.36} />
      <spotLight
        position={[-2.7, 3.35, 3.15]}
        angle={0.46}
        penumbra={0.92}
        intensity={15}
        color="#f4f1eb"
        castShadow
        decay={2}
        distance={8}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00012}
      />
      <spotLight
        position={[2.45, 2.45, 3.2]}
        angle={0.52}
        penumbra={0.9}
        intensity={3.2}
        color="#f0f3f2"
        decay={2}
        distance={7}
      />
      <spotLight
        position={[0.4, 2.3, -3.2]}
        angle={0.44}
        penumbra={0.82}
        intensity={5.8}
        color="#ffffff"
        decay={2}
        distance={7}
      />
      <pointLight
        position={[0.9, -0.65, -1.55]}
        intensity={1.15}
        color="#00ff22"
        distance={3.8}
        decay={2}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <mesh position={[0, 0.2, -1.9]}>
        <planeGeometry args={[6.5, 4.5]} />
        <meshBasicMaterial color="#020202" />
      </mesh>
      <rectAreaLight
        position={[-0.9, 2.55, 2.35]}
        rotation={[-0.68, -0.18, -0.04]}
        width={4.8}
        height={2.9}
        intensity={2.35}
        color="#f6f3ef"
      />
    </>
  );
}
