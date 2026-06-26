import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene } from '../../three/Scene/Scene.jsx';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="STRATA campaign hero">
      <div className="hero__canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0.85, 4.25], fov: 35, near: 0.1, far: 100 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          shadows="soft"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">DROP_001 // AFTER HOURS</p>
        <h1>STRATA</h1>
        <p className="hero__tagline">Utility in Every Layer.</p>
      </div>
    </section>
  );
}
