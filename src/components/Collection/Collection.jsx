import { assets } from '../../utils/assets.js';
import './Collection.css';

export function Collection() {
  return (
    <section className="section collection" id="collection">
      <div>
        <p className="section__kicker">Collection</p>
        <h2 className="section__title">DROP_001</h2>
      </div>
      <div className="collection__grid">
        {assets.products.map((product) => (
          <article className="collection__item" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
