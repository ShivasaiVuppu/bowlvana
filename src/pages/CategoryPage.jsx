import React, { useState, useEffect } from 'react';

const MENU_DATA = [
  {
    category: 'Bowls',
    emoji: 'ð',
    tagline: 'Nutritious bowls packed with protein and essential nutrients for optimal health',
    items: [
      { name: 'Bowlvana Signature Bowl',         price: 292.95, badge: 'Signature', type: 'non-veg', desc: 'Grilled chicken, brown rice, fresh greens and our chef\'s special house sauce.' },
      { name: 'The Balanced Chicken Bowl',        price: 292.95, badge: 'Best Seller', type: 'non-veg', desc: 'Grilled chicken breast, brown rice, and sautéed seasonal vegetables.' },
      { name: 'Cilantro Chicken Over Rice',       price: 303.45, type: 'non-veg', desc: 'Grilled chicken tossed in fresh cilantro, served with rice and vegetables.' },
      { name: 'Lemon Garlic Chicken Bowl',        price: 303.45, type: 'non-veg', desc: 'Zesty lemon-garlic marinated chicken, brown rice, and a medley of vegetables.' },
      { name: 'Chicken Tikka Over Rice Bowl',     price: 303.45, type: 'non-veg', desc: 'Juicy chicken tikka pieces, aromatic rice, and side of fresh salad.' },
      { name: 'Peperi Chicken Over Rice',         price: 292.95, type: 'non-veg', desc: 'Spicy pepper chicken served over aromatic rice with fresh vegetables.' },
      { name: 'Paneer Over Rice Bowl',            price: 282.45, type: 'veg', desc: 'Soft paneer cubes sautéed with mild spices, served atop fluffy rice.' },
      { name: 'Tofu Protein Rice Bowl',           price: 261.45, badge: 'Vegan', type: 'veg', desc: 'High-protein tofu with brown rice and fresh garden vegetables.' },
      { name: 'Mushroom Broccoli Rice Bowl',      price: 250.95, type: 'veg', desc: 'Tender mushrooms and broccoli tossed in light spices, over wholesome rice.' },
      { name: 'Falafel Over Rice Bowl',           price: 250.95, type: 'veg', desc: 'Crispy falafel, fresh salad, and rice drizzled with our signature sauce.' },
      { name: 'Scrambled Egg Over Rice Bowl',     price: 250.95, type: 'egg', desc: 'Fluffy scrambled eggs with seasonal vegetables over a bed of rice.' },
      { name: 'Chana Over Rice Bowl',             price: 250.95, type: 'veg', desc: 'Protein-packed chickpeas cooked in mild spices, served over rice.' },
      { name: 'Rajma Over Rice Bowl',             price: 261.45, type: 'veg', desc: 'Classic kidney beans curry, slow-cooked and served over rice.' },
      { name: 'Soya Over Rice Bowl',              price: 261.45, type: 'veg', desc: 'Nutritious soya chunks in a light curry, served with rice.' },
      { name: 'Exotic Fruit Bowl',                price: 208.95, type: 'veg', desc: 'A vibrant medley of seasonal exotic fruits served chilled.' },
    ],
  },
  {
    category: 'Wraps',
    emoji: 'ð«',
    tagline: 'Wholesome whole wheat wraps filled with lean proteins and fresh vegetables',
    items: [
      { name: 'Tandoori Chicken Protein Wrap', price: 219.45, badge: 'High Protein', type: 'non-veg', desc: 'Tandoori chicken, protein-rich fillings, and crisp vegetables in a wheat wrap.' },
      { name: 'Chicken Tikka Wrap',           price: 208.95, type: 'non-veg', desc: 'Spiced chicken tikka, onions, and fresh greens in a soft wrap.' },
      { name: 'Tofu Broccoli Wrap',           price: 198.45, badge: 'Vegan', type: 'veg', desc: 'Grilled tofu and broccoli in a whole wheat tortilla with fresh greens.' },
      { name: 'Chicken Wrap',                 price: 198.45, type: 'non-veg', desc: 'Grilled chicken, fresh vegetables, and our special sauce in a hearty wrap.' },
      { name: 'Mushroom Broccoli Wrap',       price: 177.45, type: 'veg', desc: 'Sautéed mushrooms and broccoli with a crisp salad and light dressing.' },
      { name: 'Paneer Wrap',                  price: 189.00, type: 'veg', desc: 'Paneer cubes, salad, and mint chutney rolled in a soft wrap.' },
      { name: 'Falafel Wrap',                 price: 168.00, type: 'veg', desc: 'Crispy falafel, lettuce, tomatoes, and creamy sauce in a soft wrap.' },
      { name: 'Tempeh Wrap',                  price: 187.95, badge: 'Vegan', type: 'veg', desc: 'Nutty tempeh, fresh vegetables, and a zesty sauce in a protein-packed wrap.' },
      { name: 'Tofu Wrap',                    price: 166.95, badge: 'Vegan', type: 'veg', desc: 'Soft tofu, crunchy vegetables, and a tangy sauce in a wholesome wrap.' },
    ],
  },
  {
    category: 'Salads',
    emoji: 'ð¥',
    tagline: 'Fresh garden salads rich in vitamins, minerals and wholesome nutrients',
    items: [
      { name: 'Chicken Salad',       price: 208.95, type: 'non-veg', desc: 'Grilled chicken, mixed greens, cherry tomatoes, and a tangy vinaigrette.' },
      { name: 'Egg Salad',           price: 187.95, type: 'egg', desc: 'Boiled eggs, crisp greens, cucumber, and a light herb dressing.' },
      { name: 'Beetroot Curd Salad', price: 177.45, type: 'veg', desc: 'Grated beetroot, creamy curd, and crunchy vegetables for a probiotic-rich salad.' },
      { name: 'Vegetable Salad',     price: 166.95, badge: 'Vegan', type: 'veg', desc: 'A colorful mix of fresh seasonal vegetables lightly tossed with herbs.' },
      { name: 'Paneer Salad',        price: 177.45, type: 'veg', desc: 'Fresh paneer cubes with crisp greens and a light, creamy dressing.' },
      { name: 'Tofu Salad',          price: 166.95, type: 'veg', desc: 'Grilled tofu with mixed vegetables and a tangy sesame dressing.' },
      { name: 'Chana Salad',         price: 156.95, type: 'veg', desc: 'Protein-rich chickpea salad with fresh vegetables and herbs.' },
      { name: 'Rajma Salad',         price: 166.95, type: 'veg', desc: 'Kidney bean salad with crisp greens and a zesty lime dressing.' },
    ],
  },
  {
    category: 'Sandwiches',
    emoji: 'ðª',
    tagline: 'Nutritious whole grain sandwiches perfect for healthy meal satisfaction',
    items: [
      { name: 'Double Egg Chicken Sandwich',    price: 208.95, badge: 'High Protein', type: 'non-veg', desc: 'A hearty combination of grilled chicken and double eggs, packed with flavor.' },
      { name: 'Chicken Wheat Bread Sandwich',   price: 187.95, type: 'non-veg', desc: 'Grilled chicken, fresh vegetables, and light mayo on whole wheat.' },
      { name: 'Chicken Sandwich',               price: 198.45, type: 'non-veg', desc: 'Classic grilled chicken with crisp lettuce and tomatoes in soft bread.' },
      { name: 'Double Egg Sandwich',            price: 187.95, type: 'egg', desc: 'Extra eggs for extra protein, layered with fresh vegetables.' },
      { name: 'Egg and Cheese Sandwich',        price: 166.95, type: 'egg', desc: 'Eggs and melted cheese with a touch of herbs in soft bread.' },
      { name: 'Egg Sandwich',                   price: 166.95, type: 'egg', desc: 'Boiled eggs, creamy spread, and crunchy vegetables in a wholesome sandwich.' },
      { name: 'Paneer Sandwich',                price: 145.95, type: 'veg', desc: 'Paneer, vegetables, and mint chutney in a light, satisfying sandwich.' },
      { name: 'Tofu Sandwich',                  price: 135.45, badge: 'Vegan', type: 'veg', desc: 'Tofu slices, crisp vegetables, and a tangy spread on whole wheat bread.' },
    ],
  },
  {
    category: 'Omelettes & Chilla',
    emoji: 'ð³',
    tagline: 'High-protein breakfast options to fuel your day with essential nutrients',
    items: [
      { name: 'Mushroom Omelette', price: 157.50, type: 'egg', desc: 'Fluffy omelette loaded with sautéed mushrooms and fresh herbs.' },
      { name: 'Masala Omelette',   price: 157.50, type: 'egg', desc: 'Spiced Indian-style omelette with onions, tomatoes, and coriander.' },
      { name: 'Paneer Omelette',   price: 157.50, type: 'egg', desc: 'Egg omelette stuffed with soft paneer and mild spices.' },
      { name: 'Plain Omelette',    price:  94.50, type: 'egg', desc: 'Classic, fluffy omelette made with farm-fresh eggs.' },
      { name: 'Besan Chilla',      price: 166.95, badge: 'Vegan', type: 'veg', desc: 'Savory gram flour pancake with vegetables and light spices.' },
    ],
  },
  {
    category: 'Millets & Oats',
    emoji: 'ð¾',
    tagline: 'Ancient supergrains and oats packed with fiber and heart-healthy nutrients',
    items: [
      { name: 'Foxtail Millet Upma',    price: 198.45, type: 'veg', desc: 'Nutritious foxtail millet cooked with vegetables and Indian spices.' },
      { name: 'Kodo Millet Upma',       price: 198.45, type: 'veg', desc: 'Wholesome kodo millet upma with fresh vegetables and herbs.' },
      { name: 'Barnyard Millet Upma',   price: 198.45, type: 'veg', desc: 'Light and fluffy upma made from barnyard millet and seasonal vegetables.' },
      { name: 'Proso Millet Upma',      price: 198.45, type: 'veg', desc: 'Protein-rich proso millet upma with a medley of vegetables.' },
      { name: 'Oats Upma',              price: 198.45, type: 'veg', desc: 'Healthy oats cooked with vegetables and mild spices for a filling meal.' },
      { name: 'Overnight Soaked Oats',  price: 198.45, type: 'veg', desc: 'Chilled oats soaked overnight with fruits, seeds, and a touch of honey.' },
    ],
  },
  {
    category: 'Pastas',
    emoji: 'ð',
    tagline: 'Healthy pasta dishes made with fresh ingredients and balanced nutrition',
    items: [
      { name: 'Chicken White Sauce Pasta',       price: 313.95, badge: 'Best Seller', type: 'non-veg', desc: 'Grilled chicken and pasta in a creamy white sauce with fresh herbs.' },
      { name: 'Chicken Red Sauce Pasta',         price: 313.95, type: 'non-veg', desc: 'Chicken and pasta in a rich, spiced tomato sauce.' },
      { name: 'Chicken White Sauce Wheat Pasta', price: 313.95, type: 'non-veg', desc: 'Whole wheat pasta with chicken in a light, creamy white sauce.' },
      { name: 'Chicken Red Sauce Wheat Pasta',   price: 313.95, type: 'non-veg', desc: 'Whole wheat pasta and chicken in a zesty, herbed red sauce.' },
      { name: 'Veg White Sauce Pasta',           price: 292.95, type: 'veg', desc: 'Assorted vegetables and pasta in a smooth, creamy white sauce.' },
      { name: 'Red Sauce Pasta',                 price: 292.95, type: 'veg', desc: 'Penne pasta in a tangy tomato-based sauce with herbs and vegetables.' },
    ],
  },
  {
    category: 'Zero Sugar Desserts',
    emoji: 'ð',
    tagline: 'Delicious desserts with zero added sugar for guilt-free healthy indulgence',
    items: [
      { name: "Bowlvana's Special French Toast", price: 219.45, badge: 'Signature', type: 'egg', desc: 'Our signature French toast with a unique blend of flavors and toppings.' },
      { name: 'Tiramisu French Toast',           price: 261.45, type: 'egg', desc: 'French toast inspired by tiramisu, layered with coffee and cream.' },
      { name: 'Exotic Bliss Toast',              price: 219.45, type: 'egg', desc: 'French toast topped with exotic fruits and a drizzle of honey.' },
      { name: 'Zero Sugar Wheat French Toast',   price: 208.95, type: 'egg', desc: 'Healthy wheat French toast, naturally sweetened â zero added sugar.' },
      { name: 'Zero Sugar Banana Pancake',       price: 187.95, type: 'veg', desc: 'Fluffy banana pancakes made without any added sugar.' },
      { name: 'Eggless French Toast',           price: 198.45, type: 'veg', desc: 'Delicious French toast made without eggs, perfect for plant-based diets.' },
    ],
  },
  {
    category: 'Protein Desserts',
    emoji: 'ð«',
    tagline: 'High-protein desserts that satisfy sweet cravings while supporting fitness goals',
    items: [
      { name: 'Protein Chocolate Mousse',          price: 208.95, badge: 'High Protein', type: 'veg', desc: 'Rich chocolate mousse made with whey protein for a guilt-free treat.' },
      { name: 'Zero Sugar Chocolate Tiramisu',     price: 208.95, type: 'veg', desc: 'Classic tiramisu flavors, sugar-free and high in protein.' },
      { name: 'Zero Sugar Protein Chocolate Mousse', price: 198.45, type: 'veg', desc: 'Chocolate mousse with zero sugar and extra protein.' },
      { name: 'Zero Sugar Protein Delight',        price: 198.45, type: 'veg', desc: 'A delicious, sugar-free protein dessert for fitness lovers.' },
      { name: 'Coffee Tiramisu',                   price: 198.45, type: 'veg', desc: 'Coffee-infused tiramisu â light, rich, and satisfying.' },
      { name: 'All Sugar Less',                    price: 187.95, badge: 'Low Calorie', type: 'veg', desc: 'All our protein desserts with minimal sugar content for health-conscious diners.' },
      { name: "Bowlvana's Protein Delight",        price: 177.45, badge: 'Signature', type: 'veg', desc: 'A special protein-packed dessert unique to Bowlvana.' },
    ],
  },
  {
    category: 'Shakes & Juices',
    emoji: 'ð¥¤',
    tagline: 'Nutrient-dense shakes and fresh juices to energize and nourish your body',
    items: [
      { name: 'Bulk Up Booster Shake', price: 198.45, badge: 'High Calorie', type: 'veg', desc: 'High-calorie shake with protein, nuts, and fruits for muscle gain.' },
      { name: 'Lean Gain Shake',       price: 177.45, badge: 'Low Calorie', type: 'veg', desc: 'Low-calorie, high-protein shake engineered for lean muscle growth.' },
      { name: 'ABC Juice',             price: 157.50, type: 'veg', desc: 'Apple, beetroot, and carrot â a potent vitamin and mineral boost.' },
      { name: 'Fruit Juice Section',  price: 167.95, badge: 'Vegan', type: 'veg', desc: 'Fresh selection of seasonal fruit juices packed with natural vitamins and antioxidants.' },
      { name: 'Fruit Juice of Your Choice', price: 157.50, type: 'veg', desc: 'Choose your favorite fresh fruit juice from our daily selection of seasonal fruits.' },
    ],
  },
  {
    category: 'Grilled & Sides',
    emoji: 'ð',
    tagline: 'Lean grilled proteins and healthy sides for clean eating satisfaction',
    items: [
      { name: 'Grilled Chicken 200g',              price: 472.50, badge: 'Pure Protein', type: 'non-veg', desc: 'Juicy grilled chicken breast, perfectly seasoned and high in protein.' },
      { name: 'Grilled Chicken 200g + 2 Boiled Eggs', price: 525.00, badge: 'High Protein', type: 'non-veg', desc: 'Grilled chicken breast served alongside two protein-rich boiled eggs.' },
      { name: 'Brown Rice Chicken Pulao',          price: 366.45, type: 'non-veg', desc: 'Aromatic brown rice cooked with tender chicken and mild whole spices.' },
      { name: 'Tzatziki Sauce',                    price:  30.00, type: 'veg', desc: 'Creamy Greek yogurt sauce with cucumber and fresh herbs.' },
      { name: 'White Sauce',                       price:  25.00, type: 'veg', desc: 'Smooth, mildly spiced white sauce for extra flavour.' },
      { name: 'Hot Sauce',                         price:  15.00, type: 'veg', desc: 'Spicy chili sauce to add heat to any meal.' },
      { name: 'Mint Sauce',                        price:  25.00, type: 'veg', desc: 'Refreshing mint and coriander chutney.' },
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

const FOOD_TYPE_ICONS = {
  'veg': 'veg',
  'non-veg': 'non-veg',
  'egg': 'egg',
};

export default function CategoryPage({ categoryName }) {
  const section = MENU_DATA.find(s => s.category === categoryName);
  
  // Determine button position based on item count
  const hasFewItems = section && section.items.length < 7;
  const buttonTop = hasFewItems ? '70%' : 'auto';
  const buttonBottom = hasFewItems ? 'auto' : '24px';
  const buttonLeft = hasFewItems ? '50%' : 'auto';
  const buttonRight = hasFewItems ? 'auto' : '24px';
  const buttonTransform = hasFewItems ? 'translateX(-50%) translateY(-50%)' : 'none';

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!section) {
    return (
      <section className="section-wrap bg-dark-3">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '80px 40px' }}>
            <h2 style={{ color: 'var(--white)', fontSize: '2rem', marginBottom: 16 }}>
              Category Not Found
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              The category you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-wrap bg-dark-3">
      <div className="container">
        
        {/* Floating back button */}
        <button
          onClick={() => {
            sessionStorage.setItem('scrollToMenu', 'true');
            window.location.href = '#menu';
          }}
          className="floating-back-btn"
          style={{
            position: 'fixed',
            top: buttonTop,
            bottom: buttonBottom,
            left: buttonLeft,
            right: buttonRight,
            transform: buttonTransform,
            background: 'var(--gold)',
            color: 'var(--dark-1)',
            border: 'none',
            borderRadius: '28px',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(210,159,0,0.4)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
          onMouseEnter={e => {
            const hoverTransform = hasFewItems ? 'translateX(-50%) translateY(-50%) scale(1.05)' : 'scale(1.05)';
            e.currentTarget.style.transform = hoverTransform;
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(210,159,0,0.5)';
          }}
          onMouseLeave={e => {
            const normalTransform = hasFewItems ? 'translateX(-50%) translateY(-50%) scale(1)' : 'scale(1)';
            e.currentTarget.style.transform = normalTransform;
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(210,159,0,0.4)';
          }}
          title="View All Food Categories"
          aria-label="View All Food Categories"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(180deg)' }}>
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Categories
        </button>

        {/* Category heading */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: 12,
          }}>
            {section.emoji} {section.category}
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: 600,
            marginInline: 'auto',
          }}>{section.tagline}</p>
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
                {/* Food Type Icon */}
                <div className={`icon ${FOOD_TYPE_ICONS[item.type] || ''}`} style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  width: '20px',
                  height: '20px',
                  border: '2px solid',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: item.type === 'veg' ? 'green' : item.type === 'non-veg' ? 'red' : 'orange',
                }}>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    display: 'block',
                    backgroundColor: item.type === 'veg' ? 'green' : item.type === 'non-veg' ? 'red' : 'orange',
                  }}></span>
                </div>

                {/* Badge */}
                {item.badge && badgeStyle && (
                  <span style={{
                    position: 'absolute', bottom: 16, right: 16,
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
                  paddingRight: 40,
                }}>
                  {item.name}
                </h4>

                <p style={{
                  fontSize: '0.87rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .floating-back-btn {
            bottom: 20px !important;
            right: 20px !important;
            padding: '10px 16px' !important;
            font-size: '0.85rem' !important;
          }
          .floating-back-btn svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        @media (max-width: 600px) {
          .floating-back-btn {
            bottom: 16px !important;
            right: 16px !important;
            padding: '8px 14px' !important;
            font-size: '0.8rem' !important;
          }
          .floating-back-btn svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
