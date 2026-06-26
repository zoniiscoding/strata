import { CameraRig } from '../Camera/CameraRig.jsx';
import { HeroParticles } from '../Effects/HeroParticles.jsx';
import { SceneEffects } from '../Effects/SceneEffects.jsx';
import { WireframeVolume } from '../Effects/WireframeVolume.jsx';
import { SceneLights } from '../Lights/SceneLights.jsx';
import { HoodieModel } from '../Models/HoodieModel.jsx';

export function Scene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5.2, 10.5]} />
      <CameraRig />
      <SceneLights />
      <HoodieModel />
      <WireframeVolume />
      <HeroParticles />
      <SceneEffects />
    </>
  );
}
