import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section" style={{padding: '64px 20px', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)', marginBottom: 32, textTransform: 'uppercase', letterSpacing: '0.01em'}}>
          Contact Bowlvana
        </h2>
        <p style={{fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto', color: 'var(--muted)'}}>
          For all enquiries, call or WhatsApp <a href="tel:8498803808" style={{color: 'var(--accent)', textDecoration: 'none'}}>8498803808</a> or email <a href="mailto:vsaishiva99@gmail.com" style={{color: 'var(--accent)', textDecoration: 'none'}}>vsaishiva99@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}