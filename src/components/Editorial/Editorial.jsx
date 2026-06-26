import { assets } from '../../utils/assets.js';
import './Editorial.css';

export function Editorial() {
  const gallery = [
    ...assets.editorial.map((image, index) => ({ image, label: `After Hours editorial ${index + 1}` })),
    ...assets.environments.slice(1).map((image, index) => ({ image, label: `After Hours environment ${index + 1}` })),
  ];

  return (
    <section className="section editorial">
      <div className="editorial__copy">
        <p className="section__kicker" data-reveal>
          Editorial
        </p>
        <h2 className="section__title" data-reveal>
          AFTER HOURS
        </h2>
        <p className="editorial__text" data-reveal>
          Concrete, fog, projection, shadow. A field study in the spaces
          utility moves through after dark.
        </p>
      </div>
      <div className="editorial__gallery">
        {gallery.map((item, index) => (
          <figure className={`editorial__image editorial__image--${index + 1}`} key={item.image} data-reveal>
            <div className="media-frame" data-parallax={index % 3 === 0 ? '6' : '12'}>
              <img src={item.image} alt={item.label} loading="lazy" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
