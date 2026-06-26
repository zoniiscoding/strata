import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { AdditiveBlending, Color } from 'three';

const PARTICLE_COUNT = 130;
const PARTICLE_VERTEX_SHADER = `
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  uniform float uTime;
  varying float vAlpha;

  void main() {
    vec3 drift = position;
    drift.x += sin(uTime * aSpeed + aPhase) * 0.035;
    drift.y += cos(uTime * aSpeed * 0.7 + aPhase) * 0.028;

    vec4 mvPosition = modelViewMatrix * vec4(drift, 1.0);
    gl_PointSize = aSize * (260.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = smoothstep(-2.6, 1.8, position.z) * 0.18 + 0.08;
  }
`;
const PARTICLE_FRAGMENT_SHADER = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float falloff = 1.0 - smoothstep(0.12, 0.5, length(center));
    gl_FragColor = vec4(uColor, falloff * vAlpha);
  }
`;

function seededRandom(seed) {
  return Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;
}

export function HeroParticles() {
  const particlesRef = useRef();
  const materialRef = useRef();
  const particleData = useMemo(() => {
    const values = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const phases = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const x = seededRandom(index + 1);
      const y = seededRandom(index + 17);
      const z = seededRandom(index + 31);
      const size = seededRandom(index + 49);

      values[index * 3] = (x - 0.5) * 5.8;
      values[index * 3 + 1] = (y - 0.5) * 4.1;
      values[index * 3 + 2] = (z - 0.5) * 4.8;
      sizes[index] = 0.008 + size * 0.016;
      phases[index] = seededRandom(index + 63) * Math.PI * 2;
      speeds[index] = 0.08 + seededRandom(index + 81) * 0.18;
    }

    return {
      phases,
      positions: values,
      sizes,
      speeds,
    };
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsed;
    }

    if (!particlesRef.current) {
      return;
    }

    particlesRef.current.rotation.y = elapsed * 0.01;
    particlesRef.current.position.y = Math.sin(elapsed * 0.18) * 0.035;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particleData.positions}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-aSize" count={PARTICLE_COUNT} array={particleData.sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aPhase" count={PARTICLE_COUNT} array={particleData.phases} itemSize={1} />
        <bufferAttribute attach="attributes-aSpeed" count={PARTICLE_COUNT} array={particleData.speeds} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={PARTICLE_VERTEX_SHADER}
        fragmentShader={PARTICLE_FRAGMENT_SHADER}
        uniforms={{ uTime: { value: 0 }, uColor: { value: new Color('#eaeaea') } }}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}
