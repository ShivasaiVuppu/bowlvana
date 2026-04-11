import React, { useState, useEffect } from 'react';
import MainNav      from './components/MainNav';
import Footer       from './components/footer';
import Home         from './pages/Home';
import HowItWorks   from './pages/HowItWorks';
import Menu         from './pages/Menu';
import CategoryPage from './pages/CategoryPage';
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
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      // Check if we need to scroll to menu
      if (window.location.hash === '#menu' && sessionStorage.getItem('scrollToMenu') === 'true') {
        sessionStorage.removeItem('scrollToMenu');
        // Small delay to ensure the menu component is rendered
        setTimeout(() => {
          const menuElement = document.getElementById('menu');
          if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'auto' });
          }
        }, 50);
      }
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Check if we're on a category page
  const isCategoryPage = currentHash.startsWith('#category-');
  const categoryName = isCategoryPage 
    ? currentHash.replace('#category-', '').replace(/-/g, ' ').split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : '';

  return (
    <>
      {/* ── Sticky navigation ─────────────────────────── */}
      <MainNav />

      {/* ── Page sections ─────────────────────────────── */}
      <main>
        {isCategoryPage ? (
          <CategoryPage categoryName={categoryName} />
        ) : (
          <>
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
          </>
        )}
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <Footer />
    </>
  );
}
