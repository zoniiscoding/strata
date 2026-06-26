import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Loader } from './components/Loader/Loader.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Collection } from './components/Collection/Collection.jsx';
import { Cursor } from './components/Cursor/Cursor.jsx';
import { Details } from './components/Details/Details.jsx';
import { Editorial } from './components/Editorial/Editorial.jsx';
import { Manifesto } from './components/Manifesto/Manifesto.jsx';
import { useLenis } from './hooks/useLenis.js';
import { useScrollStory } from './hooks/useScrollStory.js';

export default function App() {
  useLenis();
  useScrollStory();

  return (
    <>
      <Loader />
      <Cursor />
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
