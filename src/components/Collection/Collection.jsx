import { assets } from '../../utils/assets.js';
import './Collection.css';

export function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="collection__header">
        <p className="section__kicker" data-reveal>
          Collection
        </p>
        <h2 className="section__title" data-reveal>
          DROP_001
        </h2>
        <p className="collection__copy" data-reveal>
          Two forms from the AFTER HOURS study: base layer and utility shell,
          composed as silhouettes rather than products.
        </p>
      </div>
      <div className="collection__grid">
        {assets.products.map((product, index) => (
          <article className="collection__item" key={product.name} data-reveal>
            <div className="collection__image media-frame" data-parallax={index === 0 ? '7' : '11'}>
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="collection__meta">
              <span>0{index + 2}</span>
              <h3>{product.name}</h3>
              <p>{index === 0 ? 'Dense cotton jersey, clean geometry.' : 'Volume pockets, mobile architecture.'}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
