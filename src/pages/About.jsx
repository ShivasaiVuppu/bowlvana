import React from 'react';

const VALUES = [
  { icon: '🌱', title: 'Fresh & Clean',       desc: 'No preservatives. No artificial ingredients. Just real, nourishing food cooked fresh every single day.' },
  { icon: '🎯', title: 'Goal-Driven',         desc: 'Every meal is designed around your unique health goals — not a generic template.' },
  { icon: '🏙️', title: "Hyderabad's First",  desc: 'Bowlvana is Hyderabad\'s first dedicated diet-based cloud kitchen, built from the ground up for this city.' },
  { icon: '🌍', title: 'Global Inspiration',  desc: 'Inspired by New York\'s iconic bowl culture and adapted with love for the Indian palate.' },
  { icon: '❤️', title: 'Community',           desc: 'Hundreds of customers trust us daily to fuel their journeys — their transformations inspire everything we do.' },
  { icon: '🔬', title: 'Nutrition Science',   desc: 'Our nutritionist designs every plan based on sound dietary science, not trends or guesswork.' },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-wrap bg-dark-2"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Our Story
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">About <em>Bowlvana</em></h2>
        </div>

        {/* ── Story block ─────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          marginBottom: 80,
        }} className="about-story-grid">

          {/* Text */}
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
              fontStyle: 'italic',
              color: 'rgba(240,237,230,0.55)',
              lineHeight: 1.65,
              marginBottom: 28,
            }}>
              "We started Bowlvana with one conviction — that healthy food should
              be the most enjoyable part of your day, not a sacrifice."
            </p>

            <p className="body-lead" style={{ marginBottom: 20 }}>
              Bowlvana is Hyderabad's first dedicated diet-based cloud kitchen.
              Born from a passion for clean eating and a gap in the market,
              we set out to make nutritious, high-protein meals as accessible
              as ordering a pizza.
            </p>

            <p className="body-lead">
              Inspired by New York's iconic bowl culture and deeply rooted in
              Indian culinary traditions, every dish on our menu is a conversation
              between global nutrition science and local flavour.
            </p>

            <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#subscribe" className="btn-primary">
                Start My Plan
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Visual */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 36px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute',
              top: '30%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 200, height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(210,159,0,0.2) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }} />

            <div style={{ fontSize: 64, marginBottom: 16, animation: 'float 5s ease-in-out infinite' }}>🍜</div>

            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.8rem', fontWeight: 700,
              color: 'var(--gold-light)', marginBottom: 4,
            }}>
              Bowlvana
            </div>
            <div style={{ color: 'var(--text-faint)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 32 }}>
              Hyderabad · Est. 2024
            </div>

            {/* Mini stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { val: '1000+', lbl: 'Customers' },
                { val: '50+',   lbl: 'Menu Items' },
                { val: '7 km',  lbl: 'Delivery Radius' },
                { val: '100%',  lbl: 'Preservative-Free' },
              ].map(s => (
                <div key={s.lbl} style={{
                  background: 'var(--gold-dim)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 12px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Founders section ─────────────────────────────── */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem', fontWeight: 700,
            color: 'var(--white)',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            Meet Our <em style={{ color: 'var(--gold-light)' }}>Founders</em>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
          }} className="founders-grid">
            {/* Shiva Sai Vuppu */}
            <div className="glass-card" style={{ padding: '32px 28px', textAlign: 'center' }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                color: 'var(--dark-1)',
              }}>
                👨‍💼
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem', fontWeight: 700,
                color: 'var(--gold-light)', marginBottom: 8,
              }}>
                Shiva Sai Vuppu
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                marginBottom: 16,
              }}>
                Designated IT Professional & Social Media Manager
              </p>
              <p style={{
                fontSize: '0.87rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 16,
              }}>
                Drives management, recipe innovation, and digital marketing to build Bowlvana's brand presence.
              </p>
              <div style={{
                background: 'var(--gold-dim)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                fontSize: '0.85rem',
                color: 'var(--gold-light)',
                fontStyle: 'italic',
              }}>
                "Pioneering a healthier India through innovative nutrition"
              </div>
            </div>

            {/* Vamshidhar Reddy */}
            <div className="glass-card" style={{ padding: '32px 28px', textAlign: 'center' }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                color: 'var(--dark-1)',
              }}>
                👨‍🎓
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem', fontWeight: 700,
                color: 'var(--gold-light)', marginBottom: 8,
              }}>
                Vamshidhar Reddy
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                marginBottom: 16,
              }}>
                Masters Graduate & Customer Experience Lead
              </p>
              <p style={{
                fontSize: '0.87rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 16,
              }}>
                Masters in customer relations, dedicated to exceptional service and building lasting client partnerships.
              </p>
              <div style={{
                background: 'var(--gold-dim)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                fontSize: '0.85rem',
                color: 'var(--gold-light)',
                fontStyle: 'italic',
              }}>
                "Transforming India's wellness journey one customer at a time"
              </div>
            </div>
          </div>
        </div>

        {/* ── Values grid ─────────────────────────────────── */}
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem', fontWeight: 700,
            color: 'var(--white)',
            textAlign: 'center',
            marginBottom: 40,
          }}>
            What We <em style={{ color: 'var(--gold-light)' }}>Stand For</em>
          </h3>

          <div className="grid-3">
            {VALUES.map(v => (
              <div key={v.title} className="glass-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 34, marginBottom: 14 }}>{v.icon}</div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem', fontWeight: 700,
                  color: 'var(--gold-light)', marginBottom: 10,
                }}>
                  {v.title}
                </h4>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
