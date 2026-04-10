import React from 'react';

const QUICK_LINKS = [
  { href: '#home',            label: 'Home' },
  { href: '#how-it-works',    label: 'How It Works' },
  { href: '#menu',            label: 'Menu' },
  { href: '#subscribe',       label: 'Subscribe' },
  { href: '#delivery',        label: 'Delivery' },
  { href: '#transformations', label: 'Results' },
  { href: '#corporate',       label: 'Corporate' },
  { href: '#faq',             label: 'FAQ' },
  { href: '#blog',            label: 'Blog' },
  { href: '#contact',         label: 'Contact' },
  { href: '#about',           label: 'About' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050403',
        borderTop: '1px solid rgba(210,159,0,0.12)',
        padding: '60px 48px 32px',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', marginInline: 'auto' }}>

        {/* ── Top row ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 48,
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 16,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, boxShadow: '0 0 18px rgba(210,159,0,0.4)',
              }}>
                🍜
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem', fontWeight: 700,
                color: 'var(--gold-light)',
              }}>
                Bowlvana
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem', fontWeight: 600,
                color: 'var(--text-faint)',
              }}>
                .in
              </span>
            </div>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: 300,
              marginBottom: 24,
            }}>
              Hyderabad's first diet-based cloud kitchen.
              Fresh, high-protein meals — crafted by chefs, guided by nutritionists,
              delivered to your door.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="tel:8498803808" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                📞 8498803808
              </a>
              <a href="mailto:bowlvana.core@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                ✉️ bowlvana.core@gmail.com
              </a>
              <span style={{ color: 'var(--text-faint)', fontSize: '0.85rem' }}>
                📍 Hyderabad, Telangana
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 18,
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.slice(0, 6).map(l => (
                <a key={l.href} href={l.href}
                  style={{ color: 'var(--text-muted)', fontSize: '0.87rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* More links */}
          <div>
            <h4 style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 18,
            }}>
              More
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.slice(6).map(l => (
                <a key={l.href} href={l.href}
                  style={{ color: 'var(--text-muted)', fontSize: '0.87rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {l.label}
                </a>
              ))}
              <a href="https://wa.me/918498803808" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '0.87rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom row ──────────────────────────────────── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>
            © 2026 Bowlvana.in · All rights reserved · Hyderabad, Telangana
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>
            Fresh · High-Protein · Delivered Daily
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          footer { padding-inline: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
