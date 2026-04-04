import React from 'react';

export default function About() {
  return (
    <section className="about-section" style={{padding: '64px 20px', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)', marginBottom: 32, textTransform: 'uppercase', letterSpacing: '0.01em'}}>
          About Bowlvana
        </h2>
        <p style={{fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto', color: 'var(--muted)'}}>
          Bowlvana is Hyderabad's trusted cloud kitchen for healthy, high-protein meals. Our mission is to make clean eating easy, tasty, and accessible for everyone.
        </p>
      </div>
    </section>
  );
}