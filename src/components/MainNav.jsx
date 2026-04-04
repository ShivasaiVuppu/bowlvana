import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#subscribe', label: 'Food Subscription' },
  { href: '#menu', label: 'Food Menu' },
  { href: '#corporate', label: 'Corporate Bookings' },
  { href: '#about', label: 'About' },
  { href: '#transformations', label: 'Transformations' },
  { href: '#corporate', label: 'Partner With Us' },
  { href: 'tel:+919560702561', label: 'Call Now', isPhone: true },
];

export default function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setShowMobileMenu(false);
  };

  return (
    <nav className="main-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#000000', zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.5)', padding: '12px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '2000px', margin: '0 auto', padding: '-10px', width: '5000%' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)', flexShrink: 0, marginRight: '60px' }}>
          🍱 Bowlvana
        </div>
        
        {!showHamburger ? (
          <ul style={{
            display: 'flex',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}>
            {navLinks.map(link => (
              <li key={link.href} style={{margin: 0}}>
                {link.isPhone ? (
                  <a 
                    href={link.href} 
                    style={{
                      fontSize:'1.2rem',
                      fontWeight:700,
                      color: '#ffffff',
                      padding:'8px 16px',
                      borderRadius:8,
                      transition:'background 0.2s, color 0.2s',
                      textDecoration:'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a 
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    style={{
                      fontSize:'1.2rem',
                      fontWeight:700,
                      color: '#ffffff',
                      padding:'8px 16px',
                      borderRadius:8,
                      transition:'background 0.2s, color 0.2s',
                      textDecoration:'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={() => setShowMobileMenu(true)}
            style={{background:'none',border:'none',cursor:'pointer',zIndex:102,padding:'8px'}}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {/* Slide-out mobile menu */}
      {showMobileMenu && (
        <>
          <div
            onClick={() => setShowMobileMenu(false)}
            style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'#000a',zIndex:101}}
          />
          <div style={{position:'fixed',top:0,right:0,height:'100vh',width:'80vw',maxWidth:320,background:'#ffffff',zIndex:102,boxShadow:'-2px 0 18px rgba(0,0,0,0.1)',display:'flex',flexDirection:'column',padding:'32px 0 0 0',alignItems:'center',animation:'slideInRight 0.2s'}}>
            <button
              aria-label="Close menu"
              onClick={() => setShowMobileMenu(false)}
              style={{position:'absolute',top:12,right:18,background:'none',border:'none',fontSize:'2rem',color:'#ff6600',cursor:'pointer'}}
            >×</button>
            {navLinks.map(link => (
              link.isPhone ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                  style={{fontSize:'1.1rem',fontWeight:600,color:link.isPhone ? '#ff6600' : 'var(--text)',padding:'18px 0',width:'100%',textAlign:'center',textDecoration:'none',borderBottom:'1px solid var(--border)'}}>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  style={{fontSize:'1.1rem',fontWeight:600,color:'var(--text)',padding:'18px 0',width:'100%',textAlign:'center',textDecoration:'none',borderBottom:'1px solid var(--border)'}}>
                  {link.label}
                </a>
              )
            ))}
          </div>
        </>
      )}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
}
