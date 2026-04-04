
import React from 'react';

export default function Home() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1 style={{fontSize: '3.5rem', marginBottom: '16px', fontWeight: 900}}>
          HEALTHY FOOD DELIVERY
        </h1>
        <p style={{fontSize: '1.3rem', color: '#333333', marginBottom: '32px', fontWeight: 500}}>
          (In Delhi NCR, Bengaluru, Mumbai, Pune & Hyderabad)
        </p>
        <a 
          href="#subscribe" 
          className="cta-button" 
          onClick={(e) => handleSmoothScroll(e, '#subscribe')}
          style={{fontSize: '1.2rem', padding: '16px 40px', fontWeight: 700, textDecoration: 'none', display: 'inline-block'}}
        >
          Start Food Subscription
        </a>
      </div>
    </section>
  );
}
