import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home',            label: 'Home' },
  { href: '#how-it-works',    label: 'How It Works' },
  { href: '#menu',            label: 'Menu' },
  { href: '#delivery',        label: 'Delivery' },
  { href: '#transformations', label: 'Results' },
  { href: '#corporate',       label: 'Corporate' },
  { href: '#faq',             label: 'FAQ' },
  { href: '#blog',            label: 'Blog' },
  { href: '#contact',         label: 'Contact' },
  { href: '#about',           label: 'About' },
];

export default function MainNav() {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);

  /* ── Scroll detection ──────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when drawer is open ──────────────── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav className={`main-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* ── Logo ─────────────────────────────────────── */}
          <a href="#home" className="nav-logo" onClick={closeDrawer}>
            <span className="nav-logo-dot" />
            Bowlvana
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem',
                           fontWeight: 600, color: 'rgba(255,255,255,0.3)',
                           letterSpacing: '0.05em', marginLeft: '-4px' }}>.in</span>
          </a>

          {/* ── Desktop links ─────────────────────────────── */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────── */}
          <a href="#subscribe" className="nav-cta">Start My Plan</a>

          {/* ── Hamburger ─────────────────────────────────── */}
          <button
            className="nav-hamburger"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(prev => !prev)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              {drawerOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="19" y1="5" x2="5"  y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="4" y1="7"  x2="20" y2="7"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* ── Mobile overlay ──────────────────────────────── */}
      {drawerOpen && (
        <div className="nav-overlay" onClick={closeDrawer} aria-hidden="true" />
      )}

      {/* ── Mobile drawer ───────────────────────────────── */}
      {drawerOpen && (
        <nav className="nav-drawer" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeDrawer}>
              {link.label}
            </a>
          ))}
          <a
            href="#subscribe"
            onClick={closeDrawer}
            style={{
              margin: '16px 24px 0',
              padding: '14px 24px',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: '#080705',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              textAlign: 'center',
              border: 'none',
              letterSpacing: '0.1em',
            }}
          >
            Start My Plan
          </a>
        </nav>
      )}
    </>
  );
}
