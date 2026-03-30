import React from 'react';
import { PageNav } from './components/PageNav';
import { SectionHeader } from './components/SectionHeader';

const menuItems = [
  {
    title: 'Chicken Over Rice',
    description: 'High-protein bowl with grilled chicken, greens, pickled vegetables and house sauce.',
    badge: 'Best seller',
  },
  {
    title: 'Tofu Protein Bowl',
    description: 'Grilled tofu, roasted vegetables, quinoa and sesame dressing.',
  },
  {
    title: 'Tandoori Chicken Wrap',
    description: 'Low-carb wrap with marinated chicken, crunchy salad and mint chutney.',
  },
  {
    title: 'Millet Upma Bowl',
    description: 'Wholesome foxtail millet with tempered spices, vegetables and crunchy seeds.',
  },
  {
    title: 'Whey Protein French Toast',
    description: 'Sugar-free dessert that tastes indulgent and keeps your nutrition clean.',
  },
  {
    title: 'Mushroom Broccoli Wrap',
    description: 'Low-carb wrap with sautéed mushrooms, broccoli and creamy dressing.',
  },
];

const plans = [
  {
    title: 'Weekly Bowl Plan',
    description: '5 fresh bowls per week for reliable healthy eating.',
    price: '₹1,499 / week',
  },
  {
    title: 'Monthly Clean Plan',
    description: '20 meals in 30 days for a steady nutrition rhythm.',
    price: '₹5,499 / month',
  },
  {
    title: 'Fit Starter Pack',
    description: '10 meals to begin your clean-eating journey.',
    price: '₹2,799 / pack',
  },
];

function App() {
  const handleSubscriptionSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const payload = {
      name: form.fullName.value.trim(),
      email: form.emailAddress.value.trim(),
      phone: form.mobile.value.trim(),
      plan: form.planChoice.value,
      startDate: form.startDate.value,
      address: form.address.value.trim(),
      notes: form.preferences.value.trim(),
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message = errorBody?.error || response.statusText || 'Unable to send subscription request.';
        throw new Error(message);
      }

      alert('Your request has been sent successfully. We will follow up shortly.');
      form.reset();
    } catch (error) {
      console.error('Subscription submit error:', error);
      alert(error.message || 'Failed to send the request. Please try again later.');
    }
  };

  return (
    <div className="app-shell">
      <PageNav />
      <div
        className="notice-banner"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          backgroundColor: '#fff7cc',
          borderTop: '5px solid #ff8a00',
          color: '#5a3000',
          padding: '1.1rem 1.25rem',
          fontWeight: 800,
          lineHeight: 1.4,
          textAlign: 'center',
          fontSize: '1rem',
          letterSpacing: '0.01em',
          boxShadow: '0 -6px 20px rgba(0, 0, 0, 0.12)',
        }}
      >
        <span style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
          WEBSITE UNDER DEVELOPMENT
        </span>
        <span style={{ display: 'inline-block', maxWidth: '980px' }}>
          Bowlvana restaurant is operational and accepting subscriptions, Zomato, Swiggy, takeaway, and free home delivery within 7km. The website is still under development and will go live very shortly. For full enquiries, menu details, pricing, or delivery support, call or WhatsApp <a href="tel:8498803808" style={{ color: '#5a3000', textDecoration: 'underline' }}>8498803808</a>. Happy eating!
        </span>
      </div>
      <main className="site-content" style={{ paddingBottom: '6.5rem' }}>
        <section id="page-1" className="page-section">
          <SectionHeader
            label="Page 1 of 5"
            title="Healthy meals for Hyderabad, delivered with care"
            subtitle="Bowlvana.in is a cloud kitchen built for busy people who want clean food, bold flavor and fast delivery from Vanasthalipuram."
          />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Welcome to Bowlvana</p>
              <h1>Fresh bowls. Smart plans. Local delivery.</h1>
              <p className="body-text">
                We combine high-protein bowls, millet breakfasts and guilt-free desserts so you can eat cleaner without sacrificing flavor. Every meal is designed around performance, taste and convenience.
              </p>
              <div className="button-group">
                <a className="button" href="#page-2">View menu</a>
                <a className="button-secondary" href="#page-3">Subscribe now</a>
              </div>
            </div>
            <aside className="details-panel">
              <div className="detail-block">
                <p className="detail-label">Contact details</p>
                <p><strong>Location</strong></p>
                <p>Hyderabad, Vanasthalipuram</p>
                <p><strong>Phone</strong></p>
                <p>8498803808</p>
                <p><strong>Email</strong></p>
                <p>vsaishiva99@gmail.com</p>
              </div>
              <div className="detail-block">
                <p className="detail-label">Founders</p>
                <div className="founder-item">
                  <strong>Shiva Sai Vuppu</strong>
                  <span>Co-founder & operations lead</span>
                  <p>Shiva oversees kitchen operations, order delivery flow and premium customer service.</p>
                </div>
                <div className="founder-item">
                  <strong>Vamshidhar Reddy</strong>
                  <span>Co-founder & culinary director</span>
                  <p>Vamshidhar crafts menus that are nutritious, flavorful and easy to enjoy every day.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="page-2" className="page-section">
          <SectionHeader
            label="Page 2 of 5"
            title="A menu designed for modern health and bold flavor"
            subtitle="Explore signature bowls, smart wraps, millet dishes and clean desserts made to keep your energy steady."
          />
          <div className="cards-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.title}>
                <div className="menu-card-header">
                  <h3>{item.title}</h3>
                  {item.badge ? <span className="badge">{item.badge}</span> : null}
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="page-3" className="page-section">
          <SectionHeader
            label="Page 3 of 5"
            title="Subscription plans for consistent healthy eating"
            subtitle="Choose a plan and send your request directly through the website."
          />
          <div className="plan-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.title}>
                <span className="plan-label">Plan</span>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <strong>{plan.price}</strong>
              </article>
            ))}
          </div>
          <article className="form-card">
            <p className="form-label">Subscribe by email</p>
            <form className="subscription-form" onSubmit={handleSubscriptionSubmit}>
              <div className="form-grid form-grid-3">
                <label>
                  Full name
                  <input name="fullName" type="text" required placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input name="emailAddress" type="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Phone number
                  <input name="mobile" type="tel" required placeholder="8498803808" />
                </label>
              </div>
              <div className="form-grid form-grid-3">
                <label>
                  Plan
                  <select name="planChoice" required>
                    <option value="Weekly Bowl Plan">Weekly Bowl Plan</option>
                    <option value="Monthly Clean Plan">Monthly Clean Plan</option>
                    <option value="Fit Starter Pack">Fit Starter Pack</option>
                  </select>
                </label>
                <label>
                  Start date
                  <input name="startDate" type="date" required />
                </label>
                <label>
                  Delivery address
                  <input name="address" type="text" required placeholder="Vanasthalipuram, Hyderabad" />
                </label>
              </div>
              <label>
                Dietary notes
                <textarea name="preferences" placeholder="Egg-free, extra protein, delivery notes..."></textarea>
              </label>
              <div className="form-footer">
                <button type="submit" className="button">Send request</button>
                <p className="form-note">The subscription details will be delivered directly to the Bowlvana inbox.</p>
              </div>
            </form>
          </article>
        </section>

        <section id="page-4" className="page-section">
          <SectionHeader
            label="Page 4 of 5"
            title="Contact the Bowlvana team"
            subtitle="Reach out for custom meal planning, large orders or kitchen support."
          />
          <div className="contact-grid">
            <article className="contact-card">
              <p className="contact-label">Get in touch</p>
              <div className="contact-row">
                <strong>Phone</strong>
                <span>8498803808</span>
              </div>
              <div className="contact-row">
                <strong>Email</strong>
                <span>vsaishiva99@gmail.com</span>
              </div>
              <div className="contact-row">
                <strong>Location</strong>
                <span>Vanasthalipuram, Hyderabad</span>
              </div>
              <div className="contact-row">
                <strong>Order channels</strong>
                <span>Swiggy · Zomato · Direct booking</span>
              </div>
            </article>
            <article className="contact-card">
              <p className="contact-label">Quick message</p>
              <p>Send your custom meal requirements or order request through the subscription form. We respond quickly during kitchen hours.</p>
              <a className="button-secondary" href="mailto:vsaishiva99@gmail.com">Email the team</a>
            </article>
          </div>
        </section>

        <section id="page-5" className="page-section">
          <SectionHeader
            label="Page 5 of 5"
            title="About Bowlvana.in"
            subtitle="A cloud kitchen created to make healthy eating simple, tasty and dependable in Hyderabad."
          />
          <div className="about-grid">
            <article className="about-card">
              <h3>Our story</h3>
              <p>Bowlvana launched in 2025 to bring nutrient-dense food to busy customers who want real meals without compromise. We use fresh ingredients, balanced portions and thoughtful recipes.</p>
            </article>
            <article className="about-card">
              <h3>What makes us different</h3>
              <p>We focus on high-protein, low-sugar meals, smart portioning and quick delivery. Our menu blends traditional grains with modern preparation for a healthy daily routine.</p>
            </article>
            <article className="about-card">
              <h3>Our vision</h3>
              <p>To become Hyderabad's trusted healthy kitchen by delivering meals that feel premium, convenient and truly supportive of a balanced lifestyle.</p>
            </article>
          </div>
        </section>

        <footer className="site-footer">
          © 2026 Bowlvana.in · Hyderabad · Cloud kitchen experience
        </footer>
      </main>
    </div>
  );
}

export default App;
