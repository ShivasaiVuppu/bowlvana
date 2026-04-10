import React from 'react';

const DELIVERY_AREAS = [
  'Vanasthalipuram', 'Dilsukhnagar', 'Kothapet',
  'Uppal', 'Nagole', 'Hastinapuram',
  'BN Reddy', 'LB Nagar', 'Hayathnagar',
];

const DELIVERY_CARDS = [
  {
    icon: '🛵',
    title: 'Own Fleet — Up to 7 km',
    body: 'We operate our own delivery fleet to guarantee your food arrives hot, fresh, and on time. No third-party delays within our primary zone.',
  },
  {
    icon: '📍',
    title: 'Beyond 7 km?',
    body: 'We coordinate deliveries further out via trusted partners — Rapido, Ola, and Uber. Just share your location and we will sort it.',
  },
  {
    icon: '📱',
    title: 'Order on Zomato & Swiggy',
    body: 'Prefer your favourite food app? Bowlvana is listed on both Zomato and Swiggy for quick, familiar ordering.',
  },
  {
    icon: '⏱️',
    title: '30 – 45 Minute Delivery',
    body: 'Average delivery window from kitchen to doorstep. We send you a heads-up when your order is on its way.',
  },
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="section-wrap bg-dark-1"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            We Come To You
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Delivery <em>Information</em></h2>
          <p className="body-lead" style={{ maxWidth: 560, marginInline: 'auto' }}>
            Chef-crafted meals, delivered daily across Hyderabad.
            Never cold-stored. Always fresh.
          </p>
        </div>

        {/* ── Current areas highlight ─────────────────────── */}
        <div
          className="glass-card"
          style={{
            padding: '36px 40px',
            marginBottom: 32,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 220px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem', fontWeight: 700,
              color: 'var(--white)', marginBottom: 8,
            }}>
              Current Delivery Areas
            </div>
            <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              All areas within our primary 7 km delivery zone,
              served directly by our own riders.
            </p>
          </div>

          <div style={{
            flex: '2 1 380px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
          }}>
            {DELIVERY_AREAS.map(area => (
              <span
                key={area}
                style={{
                  background: 'var(--gold-dim)',
                  border: '1px solid var(--border)',
                  color: 'var(--gold-light)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* ── Info cards ──────────────────────────────────── */}
        <div className="grid-auto">
          {DELIVERY_CARDS.map(card => (
            <div key={card.title} className="glass-card" style={{ padding: '32px 28px' }}>
              <div style={{ fontSize: 36, marginBottom: 18 }}>{card.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem', fontWeight: 700,
                color: 'var(--gold-light)', marginBottom: 10,
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Quote ───────────────────────────────────────── */}
        <div style={{
          textAlign: 'center',
          marginTop: 64,
          paddingTop: 48,
          borderTop: '1px solid rgba(210,159,0,0.12)',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
            fontStyle: 'italic',
            color: 'rgba(240,237,230,0.38)',
            maxWidth: 680,
            marginInline: 'auto',
            lineHeight: 1.55,
          }}>
            "Your health journey deserves the best —
            Bowlvana delivers it, fresh and fast, every single day."
          </p>
        </div>

      </div>
    </section>
  );
}
