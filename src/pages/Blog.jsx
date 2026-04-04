import React from 'react';

export default function Blog() {
  return (
    <section className="blog-section" style={{padding: '64px 20px', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)', marginBottom: 32, textTransform: 'uppercase', letterSpacing: '0.01em'}}>
          Bowlvana Blog & Recipes
        </h2>
        <p style={{fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto', color: 'var(--muted)'}}>
          Read our latest tips on healthy eating, recipes, and nutrition advice from our team.
        </p>
      </div>
    </section>
  );
}
