import { assets } from '../../utils/assets.js';
import './Manifesto.css';

export function Manifesto() {
  return (
    <section className="section manifesto" id="manifesto">
      <div className="manifesto__media" data-parallax="9">
        <img src={assets.environment.brutalistHallway} alt="" loading="lazy" />
      </div>
      <div className="manifesto__content">
        <p className="section__kicker" data-reveal>
          Manifesto
        </p>
        <h2 className="manifesto__statement" data-reveal>
          Utility is not a feature.
          <span>It is a philosophy.</span>
        </h2>
        <p className="manifesto__copy" data-reveal>
          Layered systems for movement, shelter, and after-hours precision.
        </p>
      </div>
    </section>
  );
}
