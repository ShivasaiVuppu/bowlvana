import React from 'react';

const FEATURES = [
  'Customizable meal plans for teams of any size',
  'High-protein, diet-based menus engineered to boost workplace productivity',
  'Fresh, hygienic food prepared daily — delivered on time, every time',
  'Flexible pricing for daily, weekly, or one-off events and meetings',
  'Dietary accommodations: vegetarian, vegan, gluten-free, and more',
  'Hassle-free bulk ordering with a dedicated account manager',
  'Trusted by companies and startups across Hyderabad',
];

export default function Corporate() {
  return (
    <section
      id="corporate"
      className="section-wrap bg-dark-3"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Enterprise
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Corporate &amp; <em>Bulk Orders</em></h2>
          <p className="body-lead" style={{ maxWidth: 600, marginInline: 'auto' }}>
            Healthy, delicious catering for your office, event, or large group.
            Where performance meets nutrition.
          </p>
        </div>

        {/* ── Two-column ──────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
          className="corporate-grid"
        >

          {/* Left — feature list */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem', fontWeight: 700,
              color: 'var(--white)', marginBottom: 32, lineHeight: 1.2,
            }}>
              Everything your team<br />
              <em style={{ color: 'var(--gold-light)' }}>needs to thrive</em>
            </h3>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FEATURES.map(f => (
                <li key={f} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 1,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#080705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ color: 'var(--text-muted)', lineHeight: 1.55, fontSize: '0.93rem' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — contact card */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 36px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>🏢</div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.45rem', fontWeight: 700,
              color: 'var(--white)', marginBottom: 10, lineHeight: 1.2,
            }}>
              Book a Free<br />
              <em style={{ color: 'var(--gold-light)' }}>Consultation</em>
            </h3>

            <p style={{
              color: 'var(--text-muted)', fontSize: '0.88rem',
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Tell us about your team size, frequency, and dietary needs.
              We will send you a custom quote within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a
                href="tel:8498803808"
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                📞 Call / WhatsApp
              </a>
              <a
                href="mailto:bowlvana.core@gmail.com"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                ✉️ Email Us
              </a>
            </div>

            {/* Contact info */}
            <div style={{
              marginTop: 28,
              padding: '18px 20px',
              background: 'var(--gold-dim)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
            }}>
              <div style={{ fontWeight: 700, color: 'var(--gold-light)', marginBottom: 4, fontSize: '0.95rem' }}>
                📱 8498803808
              </div>
              <div style={{ color: 'var(--text-faint)', fontSize: '0.8rem' }}>
                bowlvana.core@gmail.com
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .corporate-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
