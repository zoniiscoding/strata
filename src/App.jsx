import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Loader } from './components/Loader/Loader.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Collection } from './components/Collection/Collection.jsx';
import { Details } from './components/Details/Details.jsx';
import { Editorial } from './components/Editorial/Editorial.jsx';
import { Manifesto } from './components/Manifesto/Manifesto.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  useLenis();

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Collection />
        <Details />
        <Editorial />
      </main>
      <Footer />
    </>
  );
}
