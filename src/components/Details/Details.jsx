import { assets } from '../../utils/assets.js';
import './Details.css';

export function Details() {
  return (
    <section className="section details" id="details">
      <p className="section__kicker">Details</p>
      <h2 className="section__title">Tactile systems.</h2>
      <div className="details__grid">
        {assets.details.map((detail) => (
          <figure className="details__item" key={detail.name}>
            <img src={detail.image} alt={detail.name} />
            <figcaption>{detail.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
