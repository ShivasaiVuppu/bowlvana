import React from 'react';
import './styles.css';

function App() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 60; // Account for fixed nav height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-shell">
      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, background: '#000000', zIndex: 100, padding: '12px 0'}}>
        <div style={{display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)', marginRight: '60px'}}>
            🍱 Bowlvana
          </div>
          <div style={{display: 'flex', gap: '24px'}}>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} style={{color: '#fff', textDecoration: 'none', fontWeight: 700}}>Home</a>
            <a href="#subscribe" onClick={(e) => handleSmoothScroll(e, '#subscribe')} style={{color: '#fff', textDecoration: 'none', fontWeight: 700}}>Subscribe</a>
            <a href="#menu" onClick={(e) => handleSmoothScroll(e, '#menu')} style={{color: '#fff', textDecoration: 'none', fontWeight: 700}}>Menu</a>
          </div>
        </div>
      </nav>
      
      <main className="site-content" style={{paddingTop: '60px'}}>
        <section id="home" style={{padding: '80px 20px', textAlign: 'center', scrollMarginTop: '60px'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--accent)', marginBottom: '16px'}}>
            HEALTHY FOOD DELIVERY
          </h1>
          <p style={{fontSize: '1.3rem', color: '#333333', marginBottom: '32px'}}>
            (In Delhi NCR, Bengaluru, Mumbai, Pune & Hyderabad)
          </p>
          <a 
            href="#subscribe" 
            onClick={(e) => handleSmoothScroll(e, '#subscribe')}
            style={{
              fontSize: '1.2rem',
              padding: '16px 40px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#111',
              borderRadius: '30px'
            }}
          >
            Start Food Subscription
          </a>
        </section>
        
        <section id="subscribe" style={{padding: '80px 20px', textAlign: 'center', minHeight: '100vh', scrollMarginTop: '60px'}}>
          <h2 style={{fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '32px'}}>
            Food Subscription
          </h2>
          <p>Subscription section content goes here...</p>
        </section>
        
        <section id="menu" style={{padding: '80px 20px', textAlign: 'center', minHeight: '100vh', scrollMarginTop: '60px'}}>
          <h2 style={{fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '32px'}}>
            Food Menu
          </h2>
          <p>Menu section content goes here...</p>
        </section>
        
        <footer style={{ marginTop: '2rem', padding: '2rem 20px', textAlign: 'center', background: 'var(--bg)', color: 'var(--text)' }}>
          © 2026 Bowlvana.in · Hyderabad · Cloud kitchen experience
        </footer>
      </main>
    </div>
  );
}

export default App;
