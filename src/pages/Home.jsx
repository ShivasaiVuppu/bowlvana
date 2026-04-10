import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="section-wrap"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `
          radial-gradient(ellipse 70% 60% at 80% 40%, rgba(210,159,0,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 40% 50% at 10% 80%, rgba(210,159,0,0.05) 0%, transparent 60%),
          var(--bg)
        `,
        paddingTop: 'calc(var(--nav-h) + 40px)',
      }}
    >
      {/* ── Decorative ring cluster ─────────────────────────── */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '18%', right: '4%', pointerEvents: 'none' }}>
        {[480, 340, 210].map((size, i) => (
          <div key={size} style={{
            position: 'absolute',
            width: size, height: size,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: `1px solid rgba(210,159,0,${0.06 + i * 0.04})`,
          }} />
        ))}
        {/* Floating bowl */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 88,
          filter: 'drop-shadow(0 0 48px rgba(210,159,0,0.45))',
          animation: 'float 5s ease-in-out infinite',
        }}>🍜</div>
      </div>

      <div className="container">
        <div style={{ maxWidth: 680 }}>

          <span className="section-eyebrow animate-fade-up">
            Hyderabad's #1 Diet Kitchen
          </span>

          <h1
            className="animate-fade-up delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6.5vw, 5.4rem)',
              fontWeight: 700,
              lineHeight: 1.06,
              color: 'var(--white)',
              marginBottom: 28,
            }}
          >
            Eat <span className="gold-shimmer">Clean.</span><br />
            Live <span className="gold-shimmer">Strong.</span><br />
            <em style={{ fontStyle: 'italic', color: 'rgba(240,237,230,0.45)', fontWeight: 400 }}>
              Delivered Daily.
            </em>
          </h1>

          <p
            className="body-lead animate-fade-up delay-2"
            style={{ maxWidth: 520, marginBottom: 44 }}
          >
            Chef-crafted, high-protein bowls — fresh to your door across Hyderabad.
            No cold storage. No preservatives. Just real, nourishing food.
          </p>

          <div
            className="animate-fade-up delay-3"
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <a href="#subscribe" className="btn-primary">
              Start My Plan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#menu" className="btn-outline">Browse Menu</a>
          </div>

          {/* ── Stats row ─────────────────────────────────── */}
          <div
            className="animate-fade-up delay-4"
            style={{
              display: 'flex',
              gap: 48,
              marginTop: 72,
              paddingTop: 40,
              borderTop: '1px solid rgba(255,255,255,0.07)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '500+',  label: 'Happy Customers' },
              { value: '7 km',  label: 'Fresh Delivery Radius' },
              { value: '50+',   label: 'Menu Items' },
              { value: '100%',  label: 'No Preservatives' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.1rem',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-faint)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
