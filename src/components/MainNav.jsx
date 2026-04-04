import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#menu', label: 'Menu' },
  { href: '#subscribe', label: 'Subscribe' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#transformations', label: 'Transformations' },
  { href: '#corporate', label: 'Corporate' },
  { href: '#faq', label: 'FAQ' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
  { href: '#about', label: 'About' },
];

export default function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    const onResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const showHamburger = isMobile && scrolled;
  return (
    <nav className="main-nav" style={{position:'sticky',top:0,zIndex:100}}>
      {/* Desktop nav or mobile at top */}
      <ul style={{
        display: showHamburger ? 'none' : 'flex',
        transition: 'all 0.2s',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#191919',
        borderRadius: 16,
        boxShadow: '0 2px 18px #0003',
        padding: '8px 0',
        margin: 0,
        listStyle: 'none',
      }}>
        {navLinks.map(link => (
          <li key={link.href} style={{margin: '0 4px'}}>
            <a href={link.href} style={{fontSize:'1.7rem',fontWeight:900,color:'#fff',padding:'8px 14px',borderRadius:10,transition:'background 0.2s, color 0.2s',textDecoration:'none'}}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger icon */}
      {showHamburger && (
        <button
          aria-label="Open menu"
          onClick={() => setShowMobileMenu(true)}
          style={{position:'absolute',right:18,top:10,background:'none',border:'none',cursor:'pointer',zIndex:102}}
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffd700" strokeWidth="2"/><circle cx="12" cy="7.5" r="1.5" fill="#ffd700"/><circle cx="12" cy="12" r="1.5" fill="#ffd700"/><circle cx="12" cy="16.5" r="1.5" fill="#ffd700"/></svg>
        </button>
      )}
      {/* Slide-out mobile menu */}
      {showMobileMenu && (
        <>
          <div
            onClick={() => setShowMobileMenu(false)}
            style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'#000a',zIndex:101}}
          />
          <div style={{position:'fixed',top:0,right:0,height:'100vh',width:'80vw',maxWidth:320,background:'#191919',zIndex:102,boxShadow:'-2px 0 18px #000a',display:'flex',flexDirection:'column',padding:'32px 0 0 0',alignItems:'center',animation:'slideInRight 0.2s'}}>
            <button
              aria-label="Close menu"
              onClick={() => setShowMobileMenu(false)}
              style={{position:'absolute',top:12,right:18,background:'none',border:'none',fontSize:'2rem',color:'#ffd700',cursor:'pointer'}}
            >×</button>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                style={{fontSize:'1.3rem',fontWeight:800,color:'#ffd700',padding:'18px 0',width:'100%',textAlign:'center',textDecoration:'none',borderBottom:'1px solid #2a2a2a'}}>
                {link.label}
              </a>
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
