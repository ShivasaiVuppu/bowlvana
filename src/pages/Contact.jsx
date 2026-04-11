import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_DETAILS = [
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: '8498803808',
    href:  'tel:8498803808',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'bowlvana.core@gmail.com',
    href:  'mailto:bowlvana.core@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Hyderabad, Telangana',
    href:  null,
  },
  {
    icon: '🕐',
    label: 'Operating Hours',
    value: 'Daily · 8 AM – 12 PM',
    href:  null,
  },
  {
    icon: '💬',
    label: 'WhatsApp Direct',
    value: 'wa.me/918498803808',
    href:  'https://wa.me/918498803808',
  },
];

const INITIAL_FORM = { name: '', email: '', mobile: '', subject: '', message: '' };

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      subject: form.subject || 'General Enquiry',
      message: form.message,
      enquiry_type: 'Contact Enquiry'
    };

    emailjs.send(
      'service_stuxbpj',    // EmailJS service ID
      'template_d747kcb',   // EmailJS template ID
      templateParams,
      'KM_lYNA3_b38eQcIs'  // EmailJS public key
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      setSuccess(true);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  const inputStyle = 'field-input';
  const labelStyle = 'field-label';

  return (
    <section
      id="contact"
      className="section-wrap bg-dark-3"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Reach Out
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Contact <em>Bowlvana</em></h2>
          <p className="body-lead" style={{ maxWidth: 520, marginInline: 'auto' }}>
            Questions, feedback, corporate enquiries, or just want to
            say hello — we would love to hear from you.
          </p>
        </div>

        {/* ── Two-column layout ───────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="contact-grid"
        >

          {/* Left — contact details */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem', fontWeight: 700,
              color: 'var(--white)', marginBottom: 28, lineHeight: 1.2,
            }}>
              Get in touch<br />
              <em style={{ color: 'var(--gold-light)' }}>directly</em>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {CONTACT_DETAILS.map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'var(--gold-dim)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.13em',
                      textTransform: 'uppercase',
                      color: 'var(--text-faint)',
                      marginBottom: 4,
                    }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('https') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{
                          fontWeight: 600,
                          color: 'var(--gold-light)',
                          fontSize: '0.93rem',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.93rem' }}>
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick button */}
            <a
              href="https://wa.me/918498803808"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 36, display: 'inline-flex' }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Right — contact form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 36px',
          }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>📩</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem', fontWeight: 700,
                  color: 'var(--gold-light)', marginBottom: 12,
                }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will get back to you
                  as soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-outline"
                  style={{ marginTop: 28, fontSize: '0.8rem' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label className={labelStyle}>
                    Full Name *
                    <input className={inputStyle} name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                  </label>
                  <label className={labelStyle}>
                    Mobile
                    <input className={inputStyle} name="mobile" value={form.mobile} onChange={handleChange} placeholder="9876543210" />
                  </label>
                </div>

                <label className={labelStyle}>
                  Email Address *
                  <input className={inputStyle} name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" />
                </label>

                <label className={labelStyle}>
                  Subject
                  <select className={inputStyle} name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Subscription Plan">Subscription Plan</option>
                    <option value="Corporate Order">Corporate Order</option>
                    <option value="Delivery Issue">Delivery Issue</option>
                    <option value="Order Feedback">Order Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className={labelStyle}>
                  Message *
                  <textarea
                    className={inputStyle}
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    style={{ resize: 'vertical' }}
                  />
                </label>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
