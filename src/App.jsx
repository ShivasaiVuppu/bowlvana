import React from 'react';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Menu from './pages/Menu';
import Subscribe from './pages/Subscribe';
import Delivery from './pages/Delivery';
import Transformations from './pages/Transformations';
import Corporate from './pages/Corporate';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="app-shell">
      <MainNav />
      <main className="site-content">
        <section id="home">
          <Home />
        </section>
        <section id="subscribe">
          <Subscribe />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="corporate">
          <Corporate />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="transformations">
          <Transformations />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="delivery">
          <Delivery />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer className="site-footer" style={{ marginTop: '2rem', padding: '2rem 20px', textAlign: 'center', background: 'var(--bg)', color: 'var(--text)' }}>
          © 2026 Bowlvana.in · Hyderabad · Cloud kitchen experience
        </footer>
      </main>
    </div>
  );
}

export default App;
