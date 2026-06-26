import { assets } from '../../utils/assets.js';
import './Navbar.css';

export function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top" aria-label="STRATA home">
        <img src={assets.wordmark} alt="STRATA" />
      </a>
      <nav className="navbar__nav" aria-label="Primary navigation">
        <a href="#manifesto">Manifesto</a>
        <a href="#collection">Drop</a>
        <a href="#details">Details</a>
      </nav>
      <p className="navbar__drop">DROP_001</p>
    </header>
  );
}
