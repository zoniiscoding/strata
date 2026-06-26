import { assets } from '../../utils/assets.js';
import './Details.css';

export function Details() {
  return (
    <section className="section details" id="details">
      <div className="details__intro">
        <p className="section__kicker" data-reveal>
          Details
        </p>
        <h2 className="section__title" data-reveal>
          Tactile systems.
        </h2>
      </div>
      <div className="details__stack">
        {assets.details.map((detail, index) => (
          <figure className="details__item" key={detail.name} data-reveal>
            <div className="details__media media-frame" data-parallax={index % 2 === 0 ? '8' : '13'}>
              <img src={detail.image} alt={detail.name} loading="lazy" />
            </div>
            <figcaption>
              <span>0{index + 1}</span>
              <strong>{detail.name}</strong>
              <p>
                {[
                  'A surface study in weight, grain, and repeat wear.',
                  'Visible construction, calibrated for durability.',
                  'Identity kept close to the body.',
                  'Hardware chosen for quiet resistance.',
                ][index]}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
