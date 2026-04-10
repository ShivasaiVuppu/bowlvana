import React from 'react';

const STEPS = [
  {
    number: '01',
    icon: '🎯',
    title: 'Share Your Goals',
    description:
      'Tell us your health goals, dietary preferences, and lifestyle needs. We build everything around you — not the other way around.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Personalized Nutrition Plan',
    description:
      "Our expert nutritionist crafts a fully customized meal plan inspired by New York's iconic bowl culture and adapted for Indian palates.",
  },
  {
    number: '03',
    icon: '👨‍🍳',
    title: 'Freshly Cooked Daily',
    description:
      'Every meal is prepared fresh each morning — zero cold storage, zero bulk prep. Clean, seasonal, high-quality ingredients only.',
  },
  {
    number: '04',
    icon: '🛵',
    title: 'Doorstep Delivery',
    description:
      'Our own fleet covers up to 7 km from our kitchen. Beyond that, we partner with Zomato, Swiggy, Rapido, and Uber for extended reach.',
  },
  {
    number: '05',
    icon: '📈',
    title: 'Track & Transform',
    description:
      'Ongoing support, progress tracking, and expert guidance from our team — so you hit your goals and keep them.',
  },
  {
    number: '06',
    icon: '🏆',
    title: "Hyderabad's First",
    description:
      "Bowlvana is Hyderabad's first dedicated diet-based cloud kitchen, trusted by hundreds of customers across the city.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-wrap bg-dark-2"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, display: 'inline-block', alignSelf: 'center' }} />
            The Process
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, display: 'inline-block', alignSelf: 'center' }} />
          </span>
          <h2 className="display-heading" style={{ marginBottom: 16 }}>
            How <em>Bowlvana</em> Works
          </h2>
          <p className="body-lead" style={{ maxWidth: 600, marginInline: 'auto' }}>
            A world-class nutrition experience built around your unique body and goals —
            from your first consultation to your doorstep.
          </p>
        </div>

        {/* ── Steps grid ──────────────────────────────────── */}
        <div className="grid-auto">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="glass-card"
              style={{ padding: '36px 32px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Background number */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 12, right: 20,
                  fontFamily: 'var(--font-display)',
                  fontSize: '4.5rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  opacity: 0.06,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {step.number}
              </span>

              <div style={{ fontSize: 38, marginBottom: 20 }}>{step.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--gold-light)',
                marginBottom: 12,
                lineHeight: 1.2,
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '0.93rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Pull quote ──────────────────────────────────── */}
        <blockquote style={{
          textAlign: 'center',
          marginTop: 72,
          paddingTop: 56,
          borderTop: '1px solid rgba(210,159,0,0.14)',
          maxWidth: 780,
          marginInline: 'auto',
        }}>
          <span aria-hidden style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.5, display: 'block', marginBottom: 20 }}>"</span>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(240,237,230,0.45)',
            lineHeight: 1.55,
          }}>
            Inspired by New York's signature bowls, Bowlvana brings global nutrition
            trends to Hyderabad — making clean eating easy, tasty, and accessible for everyone.
          </p>
          <span aria-hidden style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--gold)', lineHeight: 0.5, display: 'block', marginTop: 20 }}>"</span>
        </blockquote>

      </div>
    </section>
  );
}
