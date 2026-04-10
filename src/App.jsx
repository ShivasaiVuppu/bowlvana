import React from 'react';
import MainNav      from './components/MainNav';
import Footer       from './components/footer';
import Home         from './pages/Home';
import HowItWorks   from './pages/HowItWorks';
import Menu         from './pages/Menu';
import Subscribe    from './pages/Subscribe';
import Delivery     from './pages/Delivery';
import Transformations from './pages/Transformations';
import Corporate    from './pages/Corporate';
import FAQ          from './pages/FAQ';
import Blog         from './pages/Blog';
import Contact      from './pages/Contact';
import About        from './pages/About';

/**
 * App
 * Single-page layout.  Every page component renders as a full-width
 * section with an id that the sticky nav links target via anchor (#).
 * No React Router needed — navigation is pure anchor scrolling.
 */
export default function App() {
  return (
    <>
      {/* ── Sticky navigation ─────────────────────────── */}
      <MainNav />

      {/* ── Page sections ─────────────────────────────── */}
      <main>
        <Home />
        <HowItWorks />
        <Menu />
        <Subscribe />
        <Delivery />
        <Transformations />
        <Corporate />
        <FAQ />
        <Blog />
        <Contact />
        <About />
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <Footer />
    </>
  );
}
