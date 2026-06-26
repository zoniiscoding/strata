import { Bloom, EffectComposer, N8AO, ToneMapping, Vignette } from '@react-three/postprocessing';

export function SceneEffects() {
  return (
    <EffectComposer multisampling={2}>
      <N8AO aoRadius={1.8} intensity={0.32} distanceFalloff={1.35} />
      <Bloom intensity={0.09} luminanceThreshold={0.78} luminanceSmoothing={0.24} mipmapBlur />
      <ToneMapping />
      <Vignette eskil={false} offset={0.2} darkness={0.42} />
    </EffectComposer>
  );
}
