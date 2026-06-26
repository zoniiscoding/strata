import { assets } from '../../utils/assets.js';
import './Editorial.css';

export function Editorial() {
  return (
    <section className="section editorial">
      <div className="editorial__copy">
        <p className="section__kicker">Editorial</p>
        <h2 className="section__title">AFTER HOURS</h2>
      </div>
      <div className="editorial__grid">
        {assets.editorial.map((image, index) => (
          <img src={image} alt={`After Hours editorial ${index + 1}`} key={image} />
        ))}
      </div>
    </section>
  );
}
