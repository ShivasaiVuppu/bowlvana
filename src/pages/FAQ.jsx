import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    category: 'About Bowlvana',
    questions: [
      { q: 'What is Bowlvana?', a: 'Bowlvana is Hyderabad\'s first dedicated diet-based cloud kitchen, offering fresh, high-protein, and balanced meal bowls designed for fitness, weight loss, and clean eating.' },
      { q: 'Where are you located?', a: 'We are a cloud kitchen based in Hyderabad, serving the city via our own delivery fleet and third-party apps.' },
      { q: 'What makes Bowlvana different from other meal services?', a: 'Every meal is cooked fresh daily — we do zero bulk prep and zero cold storage. Our nutritionist designs plans around your individual goals, not a generic template.' },
    ],
  },
  {
    category: 'Food & Quality',
    questions: [
      { q: 'Is your food really healthy?', a: 'Absolutely. We use fresh, high-quality ingredients with minimal oil and balanced macronutrients (protein, carbs, and healthy fats) in every meal.' },
      { q: 'Do you use preservatives or artificial ingredients?', a: 'No. Every meal is prepared fresh with no preservatives, no artificial additives, and no artificial flavours.' },
      { q: 'Are your meals suitable for weight loss?', a: 'Yes. Our bowls are portion-controlled, nutrient-dense, and calorie-conscious — ideal for sustainable weight loss without feeling deprived.' },
      { q: 'Do you provide calorie or nutrition information?', a: 'Yes. We can provide calorie counts and macro breakdowns (protein / carbs / fat) for any item on request.' },
    ],
  },
  {
    category: 'Menu & Customisation',
    questions: [
      { q: 'Can I customise my bowl?', a: 'Yes. You can choose your protein (chicken / paneer / tofu / egg), spice level, and add-ons when you order or through your subscription plan.' },
      { q: 'Do you have vegetarian and vegan options?', a: 'Yes. We have a wide range of vegetarian and fully vegan bowls, wraps, and desserts clearly labelled on our menu.' },
      { q: 'Is the food spicy?', a: 'We offer mild, medium, and spicy options. You can specify your preference when ordering and we will prepare accordingly.' },
    ],
  },
  {
    category: 'Orders & Delivery',
    questions: [
      { q: 'How can I order from Bowlvana?', a: 'You can order via our website subscription form, WhatsApp (8498803808), or through Zomato and Swiggy.' },
      { q: 'How long does delivery take?', a: 'Typically 30–45 minutes depending on your location and current order volume.' },
      { q: 'What areas do you deliver to?', a: 'Our own fleet covers Vanasthalipuram, Dilsukhnagar, Kothapet, Uppal, Nagole, Hastinapuram, BN Reddy, LB Nagar, and Hayathnagar (within 7 km). We can arrange partner deliveries beyond that.' },
      { q: 'What are your operating hours?', a: 'We are open daily from 8 AM to 12 PM.' },
    ],
  },
  {
    category: 'Subscriptions & Plans',
    questions: [
      { q: 'Do you offer subscription or meal plans?', a: 'Yes. We offer weekly and monthly meal plans tailored to your goals — weight loss, muscle gain, clean eating, or athletic performance.' },
      { q: 'Are your meals good for gym-goers?', a: 'Yes. Our high-protein bowls and grilled options are specifically designed to support training, recovery, and muscle growth.' },
      { q: 'Can I pause or modify my subscription?', a: 'Yes. Contact us via WhatsApp or email and we will adjust your plan accordingly.' },
    ],
  },
  {
    category: 'Payments & Support',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept UPI, cash on delivery, and all major online payment methods.' },
      { q: 'What if there is a problem with my order?', a: 'Contact us immediately via WhatsApp (8498803808) and we will resolve it as quickly as possible — usually within the hour.' },
      { q: 'Do you do corporate or bulk orders?', a: 'Yes. We cater to offices, events, and large groups. Contact us for a free consultation and custom pricing.' },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Flatten all questions with a global index
  const allItems = [];
  FAQ_ITEMS.forEach(cat => {
    cat.questions.forEach(q => allItems.push({ ...q, category: cat.category }));
  });

  const toggle = idx => setOpenIndex(prev => (prev === idx ? null : idx));

  let globalIdx = 0;

  return (
    <section
      id="faq"
      className="section-wrap bg-dark-1"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Got Questions?
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Frequently Asked <em>Questions</em></h2>
          <p className="body-lead" style={{ maxWidth: 520, marginInline: 'auto' }}>
            Everything you need to know about Bowlvana, our food, and how we work.
          </p>
        </div>

        {/* ── Categories with accordions ──────────────────── */}
        <div style={{ maxWidth: 820, marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {FAQ_ITEMS.map(cat => (
            <div key={cat.category}>

              {/* Category heading */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--gold)',
                marginBottom: 14,
                paddingBottom: 10,
                borderBottom: '1px solid rgba(210,159,0,0.18)',
                letterSpacing: '0.02em',
              }}>
                {cat.category}
              </h3>

              {/* Accordion items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.questions.map(item => {
                  const idx = globalIdx++;
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={item.q}
                      style={{
                        background: 'var(--surface)',
                        border: `1px solid ${isOpen ? 'rgba(210,159,0,0.35)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        transition: 'border-color 0.25s',
                      }}
                    >
                      <button
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        style={{
                          all: 'unset',
                          cursor: 'pointer',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 16,
                          padding: '18px 22px',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{
                          fontWeight: 600,
                          color: isOpen ? 'var(--white)' : 'var(--text-muted)',
                          fontSize: '0.95rem',
                          lineHeight: 1.4,
                          transition: 'color 0.2s',
                        }}>
                          {item.q}
                        </span>
                        <span style={{
                          color: 'var(--gold)',
                          fontSize: '1.3rem',
                          fontWeight: 300,
                          flexShrink: 0,
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.25s ease',
                          lineHeight: 1,
                        }}>
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: '0 22px 18px',
                          color: 'var(--text-muted)',
                          fontSize: '0.9rem',
                          lineHeight: 1.75,
                          borderTop: '1px solid rgba(255,255,255,0.04)',
                          paddingTop: 14,
                          animation: 'fadeIn 0.2s ease',
                        }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* ── WhatsApp CTA ────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.93rem' }}>
            Still have a question not listed here?
          </p>
          <a
            href="https://wa.me/918498803808"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Ask Us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
