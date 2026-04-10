import React, { useState } from 'react';

const MENU_DATA = [
  {
    category: 'Bowls',
    emoji: '🍲',
    tagline: 'Our signature high-protein rice and grain bowls',
    items: [
      { name: 'Bowlvana Signature Bowl',         price: 292.95, badge: 'Signature', desc: 'Grilled chicken, brown rice, fresh greens and our chef\'s special house sauce.' },
      { name: 'The Balanced Chicken Bowl',        price: 292.95, badge: 'Best Seller', desc: 'Grilled chicken breast, brown rice, and sautéed seasonal vegetables.' },
      { name: 'Cilantro Chicken Over Rice',       price: 303.45, desc: 'Grilled chicken tossed in fresh cilantro, served with rice and vegetables.' },
      { name: 'Lemon Garlic Chicken Bowl',        price: 303.45, desc: 'Zesty lemon-garlic marinated chicken, brown rice, and a medley of vegetables.' },
      { name: 'Chicken Tikka Over Rice Bowl',     price: 303.45, desc: 'Juicy chicken tikka pieces, aromatic rice, and side of fresh salad.' },
      { name: 'Paneer Over Rice Bowl',            price: 282.45, desc: 'Soft paneer cubes sautéed with mild spices, served atop fluffy rice.' },
      { name: 'Tofu Protein Rice Bowl',           price: 261.45, badge: 'Vegan', desc: 'High-protein tofu with brown rice and fresh garden vegetables.' },
      { name: 'Mushroom Broccoli Rice Bowl',      price: 250.95, desc: 'Tender mushrooms and broccoli tossed in light spices, over wholesome rice.' },
      { name: 'Falafel Over Rice Bowl',           price: 250.95, desc: 'Crispy falafel, fresh salad, and rice drizzled with our signature sauce.' },
      { name: 'Scrambled Egg Over Rice Bowl',     price: 250.95, desc: 'Fluffy scrambled eggs with seasonal vegetables over a bed of rice.' },
      { name: 'Chana Over Rice Bowl',             price: 250.95, desc: 'Protein-packed chickpeas cooked in mild spices, served over rice.' },
      { name: 'Rajma Over Rice Bowl',             price: 261.45, desc: 'Classic kidney beans curry, slow-cooked and served over rice.' },
      { name: 'Soya Over Rice Bowl',              price: 261.45, desc: 'Nutritious soya chunks in a light curry, served with rice.' },
      { name: 'Exotic Fruit Bowl',                price: 208.95, desc: 'A vibrant medley of seasonal exotic fruits served chilled.' },
    ],
  },
  {
    category: 'Wraps',
    emoji: '🌯',
    tagline: 'Protein-packed wraps in whole wheat tortillas',
    items: [
      { name: 'Tandoori Chicken Protein Wrap', price: 219.45, badge: 'High Protein', desc: 'Tandoori chicken, protein-rich fillings, and crisp vegetables in a wheat wrap.' },
      { name: 'Chicken Tikka Wrap',           price: 208.95, desc: 'Spiced chicken tikka, onions, and fresh greens in a soft wrap.' },
      { name: 'Tofu Broccoli Wrap',           price: 198.45, badge: 'Vegan', desc: 'Grilled tofu and broccoli in a whole wheat tortilla with fresh greens.' },
      { name: 'Chicken Wrap',                 price: 198.45, desc: 'Grilled chicken, fresh vegetables, and our special sauce in a hearty wrap.' },
      { name: 'Mushroom Broccoli Wrap',       price: 177.45, desc: 'Sautéed mushrooms and broccoli with a crisp salad and light dressing.' },
      { name: 'Paneer Wrap',                  price: 189.00, desc: 'Paneer cubes, salad, and mint chutney rolled in a soft wrap.' },
      { name: 'Falafel Wrap',                 price: 168.00, desc: 'Crispy falafel, lettuce, tomatoes, and creamy sauce in a soft wrap.' },
      { name: 'Tempeh Wrap',                  price: 187.95, badge: 'Vegan', desc: 'Nutty tempeh, fresh vegetables, and a zesty sauce in a protein-packed wrap.' },
      { name: 'Tofu Wrap',                    price: 166.95, badge: 'Vegan', desc: 'Soft tofu, crunchy vegetables, and a tangy sauce in a wholesome wrap.' },
    ],
  },
  {
    category: 'Salads',
    emoji: '🥗',
    tagline: 'Fresh, light, and nutrient-dense',
    items: [
      { name: 'Chicken Salad',       price: 208.95, desc: 'Grilled chicken, mixed greens, cherry tomatoes, and a tangy vinaigrette.' },
      { name: 'Egg Salad',           price: 187.95, desc: 'Boiled eggs, crisp greens, cucumber, and a light herb dressing.' },
      { name: 'Beetroot Curd Salad', price: 177.45, desc: 'Grated beetroot, creamy curd, and crunchy vegetables for a probiotic-rich salad.' },
      { name: 'Vegetable Salad',     price: 166.95, badge: 'Vegan', desc: 'A colorful mix of fresh seasonal vegetables lightly tossed with herbs.' },
    ],
  },
  {
    category: 'Sandwiches',
    emoji: '🥪',
    tagline: 'Wholesome between-meal options',
    items: [
      { name: 'Double Egg Chicken Sandwich',    price: 208.95, badge: 'High Protein', desc: 'A hearty combination of grilled chicken and double eggs, packed with flavor.' },
      { name: 'Chicken Wheat Bread Sandwich',   price: 187.95, desc: 'Grilled chicken, fresh vegetables, and light mayo on whole wheat.' },
      { name: 'Chicken Sandwich',               price: 198.45, desc: 'Classic grilled chicken with crisp lettuce and tomatoes in soft bread.' },
      { name: 'Double Egg Sandwich',            price: 187.95, desc: 'Extra eggs for extra protein, layered with fresh vegetables.' },
      { name: 'Egg and Cheese Sandwich',        price: 166.95, desc: 'Eggs and melted cheese with a touch of herbs in soft bread.' },
      { name: 'Egg Sandwich',                   price: 166.95, desc: 'Boiled eggs, creamy spread, and crunchy vegetables in a wholesome sandwich.' },
      { name: 'Paneer Sandwich',                price: 145.95, desc: 'Paneer, vegetables, and mint chutney in a light, satisfying sandwich.' },
      { name: 'Tofu Sandwich',                  price: 135.45, badge: 'Vegan', desc: 'Tofu slices, crisp vegetables, and a tangy spread on whole wheat bread.' },
    ],
  },
  {
    category: 'Omelettes & Chilla',
    emoji: '🍳',
    tagline: 'Protein-first breakfast options',
    items: [
      { name: 'Mushroom Omelette', price: 157.50, desc: 'Fluffy omelette loaded with sautéed mushrooms and fresh herbs.' },
      { name: 'Masala Omelette',   price: 157.50, desc: 'Spiced Indian-style omelette with onions, tomatoes, and coriander.' },
      { name: 'Paneer Omelette',   price: 157.50, desc: 'Egg omelette stuffed with soft paneer and mild spices.' },
      { name: 'Plain Omelette',    price:  94.50, desc: 'Classic, fluffy omelette made with farm-fresh eggs.' },
      { name: 'Besan Chilla',      price: 166.95, badge: 'Vegan', desc: 'Savory gram flour pancake with vegetables and light spices.' },
    ],
  },
  {
    category: 'Millets & Oats',
    emoji: '🌾',
    tagline: 'Ancient grains for modern health',
    items: [
      { name: 'Foxtail Millet Upma',    price: 198.45, desc: 'Nutritious foxtail millet cooked with vegetables and Indian spices.' },
      { name: 'Kodo Millet Upma',       price: 198.45, desc: 'Wholesome kodo millet upma with fresh vegetables and herbs.' },
      { name: 'Barnyard Millet Upma',   price: 198.45, desc: 'Light and fluffy upma made from barnyard millet and seasonal vegetables.' },
      { name: 'Proso Millet Upma',      price: 198.45, desc: 'Protein-rich proso millet upma with a medley of vegetables.' },
      { name: 'Oats Upma',              price: 198.45, desc: 'Healthy oats cooked with vegetables and mild spices for a filling meal.' },
      { name: 'Overnight Soaked Oats',  price: 198.45, desc: 'Chilled oats soaked overnight with fruits, seeds, and a touch of honey.' },
    ],
  },
  {
    category: 'Pastas',
    emoji: '🍝',
    tagline: 'Clean comfort food, done right',
    items: [
      { name: 'Chicken White Sauce Pasta',       price: 313.95, badge: 'Best Seller', desc: 'Grilled chicken and pasta in a creamy white sauce with fresh herbs.' },
      { name: 'Chicken Red Sauce Pasta',         price: 313.95, desc: 'Chicken and pasta in a rich, spiced tomato sauce.' },
      { name: 'Chicken White Sauce Wheat Pasta', price: 313.95, desc: 'Whole wheat pasta with chicken in a light, creamy white sauce.' },
      { name: 'Chicken Red Sauce Wheat Pasta',   price: 313.95, desc: 'Whole wheat pasta and chicken in a zesty, herbed red sauce.' },
      { name: 'Veg White Sauce Pasta',           price: 292.95, desc: 'Assorted vegetables and pasta in a smooth, creamy white sauce.' },
      { name: 'Red Sauce Pasta',                 price: 292.95, desc: 'Penne pasta in a tangy tomato-based sauce with herbs and vegetables.' },
    ],
  },
  {
    category: 'French Toast & Pancakes',
    emoji: '🍞',
    tagline: 'Indulgent yet guilt-free',
    items: [
      { name: "Bowlvana's Special French Toast", price: 219.45, badge: 'Signature', desc: 'Our signature French toast with a unique blend of flavors and toppings.' },
      { name: 'Tiramisu French Toast',           price: 261.45, desc: 'French toast inspired by tiramisu, layered with coffee and cream.' },
      { name: 'Exotic Bliss Toast',              price: 219.45, desc: 'French toast topped with exotic fruits and a drizzle of honey.' },
      { name: 'Zero Sugar Wheat French Toast',   price: 208.95, desc: 'Healthy wheat French toast, naturally sweetened — zero added sugar.' },
      { name: 'Zero Sugar Banana Pancake',       price: 187.95, desc: 'Fluffy banana pancakes made without any added sugar.' },
    ],
  },
  {
    category: 'Protein Desserts',
    emoji: '🍫',
    tagline: 'Sweet, clean, and high in protein',
    items: [
      { name: 'Protein Chocolate Mousse',          price: 208.95, badge: 'High Protein', desc: 'Rich chocolate mousse made with whey protein for a guilt-free treat.' },
      { name: 'Zero Sugar Chocolate Tiramisu',     price: 208.95, desc: 'Classic tiramisu flavors, sugar-free and high in protein.' },
      { name: 'Zero Sugar Protein Chocolate Mousse', price: 198.45, desc: 'Chocolate mousse with zero sugar and extra protein.' },
      { name: 'Zero Sugar Protein Delight',        price: 198.45, desc: 'A delicious, sugar-free protein dessert for fitness lovers.' },
      { name: 'Coffee Tiramisu',                   price: 198.45, desc: 'Coffee-infused tiramisu — light, rich, and satisfying.' },
      { name: "Bowlvana's Protein Delight",        price: 177.45, badge: 'Signature', desc: 'A special protein-packed dessert unique to Bowlvana.' },
    ],
  },
  {
    category: 'Shakes & Juices',
    emoji: '🥤',
    tagline: 'Fuel your training and recovery',
    items: [
      { name: 'Bulk Up Booster Shake', price: 198.45, badge: 'High Calorie', desc: 'High-calorie shake with protein, nuts, and fruits for muscle gain.' },
      { name: 'Lean Gain Shake',       price: 177.45, badge: 'Low Calorie', desc: 'Low-calorie, high-protein shake engineered for lean muscle growth.' },
      { name: 'ABC Juice',             price: 157.50, desc: 'Apple, beetroot, and carrot — a potent vitamin and mineral boost.' },
    ],
  },
  {
    category: 'Grilled & Sides',
    emoji: '🍗',
    tagline: 'Premium protein, simply prepared',
    items: [
      { name: 'Grilled Chicken 200g',              price: 472.50, badge: 'Pure Protein', desc: 'Juicy grilled chicken breast, perfectly seasoned and high in protein.' },
      { name: 'Grilled Chicken 200g + 2 Boiled Eggs', price: 525.00, badge: 'High Protein', desc: 'Grilled chicken breast served alongside two protein-rich boiled eggs.' },
      { name: 'Brown Rice Chicken Pulao',          price: 366.45, desc: 'Aromatic brown rice cooked with tender chicken and mild whole spices.' },
      { name: 'Tzatziki Sauce',                    price:  30.00, desc: 'Creamy Greek yogurt sauce with cucumber and fresh herbs.' },
      { name: 'White Sauce',                       price:  25.00, desc: 'Smooth, mildly spiced white sauce for extra flavour.' },
      { name: 'Hot Sauce',                         price:  15.00, desc: 'Spicy chili sauce to add heat to any meal.' },
      { name: 'Mint Sauce',                        price:  25.00, desc: 'Refreshing mint and coriander chutney.' },
    ],
  },
];

const BADGE_COLORS = {
  'Signature':    { bg: 'rgba(210,159,0,0.15)',   color: '#f5c842', border: 'rgba(210,159,0,0.4)' },
  'Best Seller':  { bg: 'rgba(255,100,50,0.12)',  color: '#ff7b4f', border: 'rgba(255,100,50,0.35)' },
  'High Protein': { bg: 'rgba(60,180,100,0.12)',  color: '#5ce890', border: 'rgba(60,180,100,0.35)' },
  'Vegan':        { bg: 'rgba(80,200,120,0.1)',   color: '#4dd47a', border: 'rgba(80,200,120,0.3)' },
  'High Calorie': { bg: 'rgba(255,160,40,0.12)',  color: '#ffb347', border: 'rgba(255,160,40,0.35)' },
  'Low Calorie':  { bg: 'rgba(100,200,255,0.1)',  color: '#7dd9ff', border: 'rgba(100,200,255,0.3)' },
  'Pure Protein': { bg: 'rgba(180,120,255,0.1)',  color: '#c49dff', border: 'rgba(180,120,255,0.3)' },
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const section = MENU_DATA.find(s => s.category === activeCategory);

  return (
    <section
      id="menu"
      className="section-wrap bg-dark-3"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            What We Serve
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Our <em>Menu</em></h2>
          <p className="body-lead" style={{ maxWidth: 540, marginInline: 'auto' }}>
            Every item prepared fresh daily. Choose a category to explore.
          </p>
        </div>

        {/* ── Category grid ───────────────────────────────── */}
        {!activeCategory && (
          <div className="grid-auto">
            {MENU_DATA.map(section => (
              <button
                key={section.category}
                onClick={() => setActiveCategory(section.category)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'center',
                  transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.background = 'rgba(210,159,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--surface)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span style={{ fontSize: 34 }}>{section.emoji}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)' }}>
                  {section.category}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)', fontWeight: 500 }}>
                  {section.items.length} items
                </span>
              </button>
            ))}
          </div>
        )}

        {/* ── Items grid ──────────────────────────────────── */}
        {activeCategory && section && (
          <>
            {/* Back button + breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--gold-light)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  border: '1px solid rgba(210,159,0,0.3)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All Categories
              </button>
              <span style={{ color: 'var(--text-faint)', fontSize: '0.8rem' }}>›</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
                {section.emoji} {section.category}
              </span>
            </div>

            {/* Category heading */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: 8,
              }}>
                {section.emoji} {section.category}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem' }}>{section.tagline}</p>
            </div>

            {/* Items */}
            <div className="grid-auto">
              {section.items.map(item => {
                const badgeStyle = item.badge ? BADGE_COLORS[item.badge] : null;
                return (
                  <div
                    key={item.name}
                    className="glass-card"
                    style={{ padding: '28px 24px', position: 'relative' }}
                  >
                    {/* Badge */}
                    {item.badge && badgeStyle && (
                      <span style={{
                        position: 'absolute', top: 16, right: 16,
                        background: badgeStyle.bg,
                        color: badgeStyle.color,
                        border: `1px solid ${badgeStyle.border}`,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                      }}>
                        {item.badge}
                      </span>
                    )}

                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      lineHeight: 1.3,
                      marginBottom: 10,
                      paddingRight: item.badge ? 90 : 0,
                    }}>
                      {item.name}
                    </h4>

                    <p style={{
                      fontSize: '0.87rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65,
                      marginBottom: 18,
                    }}>
                      {item.desc}
                    </p>

                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--gold-light)',
                    }}>
                      ₹{item.price.toFixed(0)}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
