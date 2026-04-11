import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const INITIAL_FORM = {
  name:         '',
  gender:       '',
  age:          '',
  mobile:       '',
  email:        '',
  goal:         '',
  diet:         '',
  dietPlan:     '',
  allergies:    '',
  intolerances: '',
  notes:        '',
};

const BENEFITS = [
  { icon: '🎯', title: 'Personalized Meal Plans',    desc: 'Designed around your body, goals, and lifestyle' },
  { icon: '🍱', title: 'Freshly Cooked Daily',       desc: 'No cold storage, no bulk prep — ever' },
  { icon: '🚀', title: 'Fast Doorstep Delivery',     desc: 'Within 7 km via our own fleet' },
  { icon: '💬', title: 'Expert Nutritionist Support', desc: 'Ongoing guidance and plan adjustments' },
];

export default function Subscribe() {
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
      gender: form.gender,
      age: form.age,
      goal: form.goal,
      diet: form.diet,
      dietPlan: form.dietPlan,
      allergies: form.allergies,
      intolerances: form.intolerances,
      notes: form.notes,
      enquiry_type: 'Subscription Enquiry'
    };

    emailjs.send(
      'service_stuxbpj',    // EmailJS service ID
      'template_op4q5gl', // EmailJS template ID (create this in EmailJS)
      templateParams,
      'KM_lYNA3_b38eQcIs'  // EmailJS public key
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      setSuccess(true);
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send subscription request. Please try again.');
    });
  };

  return (
    <section
      id="subscribe"
      className="section-wrap bg-dark-2"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Get Started
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Start Your <em>Subscription</em></h2>
          <p className="body-lead" style={{ maxWidth: 560, marginInline: 'auto' }}>
            Fill in your details and preferences. Our team will reach out
            within 24 hours to personalise your meal plan.
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
          className="subscribe-grid"
        >

          {/* Left — benefits */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 700,
              color: 'var(--white)',
              marginBottom: 32,
              lineHeight: 1.2,
            }}>
              Why subscribe<br />
              <em style={{ color: 'var(--gold-light)' }}>with Bowlvana?</em>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {BENEFITS.map(b => (
                <div key={b.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: 'var(--gold-dim)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {b.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--white)', marginBottom: 4, fontSize: '0.97rem' }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing hint */}
            <div style={{
              marginTop: 44,
              padding: '24px 24px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
                Popular Plans
              </div>
              {[
                { plan: 'Fit Starter Pack',   price: '₹2,799', detail: '10 meals' },
                { plan: 'Weekly Bowl Plan',   price: '₹1,499', detail: '5 meals / week' },
                { plan: 'Monthly Clean Plan', price: '₹5,499', detail: '20 meals / month' },
              ].map(p => (
                <div key={p.plan} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBlock: 10,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--white)' }}>{p.plan}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>{p.detail}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--gold-light)',
                  }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 40px',
          }}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem', fontWeight: 700,
                  color: 'var(--gold-light)', marginBottom: 12,
                }}>
                  Enquiry Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you! Our team will review your details and reach out
                  within 24 hours to personalise your plan.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-outline"
                  style={{ marginTop: 28, fontSize: '0.8rem' }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Row: Name */}
                <label className="field-label">
                  Full Name *
                  <input
                    className="field-input"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Vamshi Krishna"
                  />
                </label>

                {/* Row: Gender + Age */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label className="field-label">
                    Gender *
                    <select className="field-input" name="gender" required value={form.gender} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label className="field-label">
                    Age *
                    <input className="field-input" name="age" type="number" min="1" max="120" required value={form.age} onChange={handleChange} placeholder="28" />
                  </label>
                </div>

                {/* Row: Mobile */}
                <label className="field-label">
                  Mobile Number *
                  <input className="field-input" name="mobile" type="tel" pattern="[0-9]{10}" required value={form.mobile} onChange={handleChange} placeholder="10-digit mobile number" />
                </label>

                {/* Row: Email */}
                <label className="field-label">
                  Email Address *
                  <input className="field-input" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" />
                </label>

                {/* Row: Goal + Diet */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label className="field-label">
                    Health Goal
                    <select className="field-input" name="goal" value={form.goal} onChange={handleChange}>
                      <option value="">Select goal</option>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Maintain Weight">Maintain Weight</option>
                      <option value="Clean Eating">Clean Eating</option>
                      <option value="Athletic Performance">Athletic Performance</option>
                    </select>
                  </label>
                  <label className="field-label">
                    Diet Type *
                    <select className="field-input" name="diet" required value={form.diet} onChange={handleChange}>
                      <option value="">Select diet</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Eggetarian">Eggetarian</option>
                      <option value="Combo (specific days)">Combo (specific days)</option>
                    </select>
                  </label>
                </div>

                {/* Row: Diet Plan Consultation */}
                <label className="field-label">
                  Diet Plan Consultation *
                  <select className="field-input" name="dietPlan" required value={form.dietPlan} onChange={handleChange}>
                    <option value="">Select option</option>
                    <option value="I have an existing diet plan">I have an existing diet plan</option>
                    <option value="Please create a diet plan with nutritionist consultation">Please create a diet plan with nutritionist consultation</option>
                  </select>
                </label>

                {/* Row: Allergies + Intolerances */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label className="field-label">
                    Food Allergies
                    <input className="field-input" name="allergies" value={form.allergies} onChange={handleChange} placeholder="e.g. nuts, gluten" />
                  </label>
                  <label className="field-label">
                    Intolerances
                    <input className="field-input" name="intolerances" value={form.intolerances} onChange={handleChange} placeholder="e.g. lactose" />
                  </label>
                </div>

                {/* Row: Notes */}
                <label className="field-label">
                  Additional Notes
                  <textarea
                    className="field-input"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Any other details we should know about your diet, schedule, or preferences…"
                    style={{ resize: 'vertical' }}
                  />
                </label>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Send My Requirements
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-faint)', lineHeight: 1.5 }}>
                  Your details are sent directly to our team.
                  We will never share your information.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .subscribe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
