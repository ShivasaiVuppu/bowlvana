import React from 'react';

const TESTIMONIALS = [
  {
    emoji:  '💪',
    name:   'Rahul S.',
    loc:    'Dilsukhnagar',
    result: '−8 kg in 2 months',
    quote:  "Lost 8 kg in just two months on Bowlvana's plan. The food is incredible — I genuinely never felt like I was on a diet. This is sustainable eating.",
    stars:  5,
  },
  {
    emoji:  '⚡',
    name:   'Priya M.',
    loc:    'Uppal',
    result: 'Energy levels up',
    quote:  "As a working professional with zero time to cook, Bowlvana has been a game-changer. Healthy, tasty, on time — every single day. Absolutely love it.",
    stars:  5,
  },
  {
    emoji:  '🏋️',
    name:   'Kiran T.',
    loc:    'Kothapet',
    result: '+5 kg lean muscle',
    quote:  "I was struggling to hit my protein targets at the gym. Bowlvana's high-protein bowls fixed that immediately. My gains have been consistent ever since.",
    stars:  5,
  },
  {
    emoji:  '🌱',
    name:   'Sneha R.',
    loc:    'LB Nagar',
    result: 'Switched to clean eating',
    quote:  "I tried so many healthy meal options before Bowlvana. Nothing came close in terms of taste and quality. The tofu bowl is my daily go-to now.",
    stars:  5,
  },
  {
    emoji:  '🏢',
    name:   'Arjun K.',
    loc:    'Nagole',
    result: '15-person corporate team',
    quote:  "Our company switched to Bowlvana for office lunches. The whole team is healthier, more focused, and productivity has visibly improved. Highly recommend.",
    stars:  5,
  },
  {
    emoji:  '🎯',
    name:   'Divya P.',
    loc:    'Hastinapuram',
    result: 'Lost 12 kg in 3 months',
    quote:  "Three months, 12 kg down, and I still look forward to every meal. Bowlvana made healthy eating the most enjoyable part of my day.",
    stars:  5,
  },
];

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="section-wrap bg-dark-2"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Real Results
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Customer <em>Transformations</em></h2>
          <p className="body-lead" style={{ maxWidth: 560, marginInline: 'auto' }}>
            Real stories from real customers across Hyderabad who have
            transformed their health and lifestyle with Bowlvana.
          </p>
        </div>

        {/* ── Testimonial grid ────────────────────────────── */}
        <div className="grid-auto">
          {TESTIMONIALS.map(t => (
            <div
              key={t.name}
              className="glass-card"
              style={{ padding: '32px 28px' }}
            >
              {/* Avatar + result badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>
                  {t.emoji}
                </div>
                <span style={{
                  background: 'var(--gold-dim)',
                  border: '1px solid var(--border)',
                  color: 'var(--gold-light)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                }}>
                  {t.result}
                </span>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="var(--gold)">
                    <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 3 10.5l.6-3.2L1.2 5l3.3-.5z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'rgba(240,237,230,0.7)',
                lineHeight: 1.65,
                marginBottom: 20,
              }}>
                "{t.quote}"
              </p>

              {/* Name + location */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.9rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-faint)', marginTop: 2 }}>{t.loc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.93rem' }}>
            Ready to write your own transformation story?
          </p>
          <a href="#subscribe" className="btn-primary">
            Start My Journey
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
