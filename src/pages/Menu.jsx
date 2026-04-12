import React from 'react';

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
    emoji: '🌯',
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
    emoji: '🥗',
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
    emoji: '🥪',
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
    emoji: '🍳',
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
    emoji: '🌾',
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
    emoji: '🍝',
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
    emoji: '🍞',
    tagline: 'Delicious desserts with zero added sugar for guilt-free healthy indulgence',
    items: [
      { name: "Bowlvana's Special French Toast", price: 219.45, badge: 'Signature', type: 'egg', desc: 'Our signature French toast with a unique blend of flavors and toppings.' },
      { name: 'Tiramisu French Toast',           price: 261.45, type: 'egg', desc: 'French toast inspired by tiramisu, layered with coffee and cream.' },
      { name: 'Exotic Bliss Toast',              price: 219.45, type: 'egg', desc: 'French toast topped with exotic fruits and a drizzle of honey.' },
      { name: 'Zero Sugar Wheat French Toast',   price: 208.95, type: 'egg', desc: 'Healthy wheat French toast, naturally sweetened — zero added sugar.' },
      { name: 'Zero Sugar Banana Pancake',       price: 187.95, type: 'veg', desc: 'Fluffy banana pancakes made without any added sugar.' },
      { name: 'Eggless French Toast',           price: 198.45, type: 'veg', desc: 'Delicious French toast made without eggs, perfect for plant-based diets.' },
    ],
  },
  {
    category: 'Protein Desserts',
    emoji: '🍫',
    tagline: 'High-protein desserts that satisfy sweet cravings while supporting fitness goals',
    items: [
      { name: 'Protein Chocolate Mousse',          price: 208.95, badge: 'High Protein', type: 'veg', desc: 'Rich chocolate mousse made with whey protein for a guilt-free treat.' },
      { name: 'Zero Sugar Chocolate Tiramisu',     price: 208.95, type: 'veg', desc: 'Classic tiramisu flavors, sugar-free and high in protein.' },
      { name: 'Zero Sugar Protein Chocolate Mousse', price: 198.45, type: 'veg', desc: 'Chocolate mousse with zero sugar and extra protein.' },
      { name: 'Zero Sugar Protein Delight',        price: 198.45, type: 'veg', desc: 'A delicious, sugar-free protein dessert for fitness lovers.' },
      { name: 'Coffee Tiramisu',                   price: 198.45, type: 'veg', desc: 'Coffee-infused tiramisu — light, rich, and satisfying.' },
      { name: 'All Sugar Less',                    price: 187.95, badge: 'Low Calorie', type: 'veg', desc: 'All our protein desserts with minimal sugar content for health-conscious diners.' },
      { name: "Bowlvana's Protein Delight",        price: 177.45, badge: 'Signature', type: 'veg', desc: 'A special protein-packed dessert unique to Bowlvana.' },
    ],
  },
  {
    category: 'Shakes & Juices',
    emoji: '🥤',
    tagline: 'Nutrient-dense shakes and fresh juices to energize and nourish your body',
    items: [
      { name: 'Bulk Up Booster Shake', price: 198.45, badge: 'High Calorie', type: 'veg', desc: 'High-calorie shake with protein, nuts, and fruits for muscle gain.' },
      { name: 'Lean Gain Shake',       price: 177.45, badge: 'Low Calorie', type: 'veg', desc: 'Low-calorie, high-protein shake engineered for lean muscle growth.' },
      { name: 'ABC Juice',             price: 157.50, type: 'veg', desc: 'Apple, beetroot, and carrot — a potent vitamin and mineral boost.' },
      { name: 'Fruit Juice Section',  price: 167.95, badge: 'Vegan', type: 'veg', desc: 'Fresh selection of seasonal fruit juices packed with natural vitamins and antioxidants.' },
      { name: 'Fruit Juice of Your Choice', price: 157.50, type: 'veg', desc: 'Choose your favorite fresh fruit juice from our daily selection of seasonal fruits.' },
    ],
  },
  {
    category: 'Customize Your Meal',
    emoji: '⚙️',
    tagline: 'Design your perfect meal with custom macros, ingredients, and cooking methods',
    items: [
      { name: 'Build Your Own Bowl', price: 324.95, badge: 'Fully Customizable', desc: 'Choose your protein, carbs, vegetables, and sauce. Track exact macros: protein, carbs, fat, and fiber.' },
      { name: 'Custom Protein Plate', price: 389.95, badge: 'Macro Tracked', desc: 'Select protein portions (150g-300g), cooking method, and sides. Detailed nutritional breakdown provided.' },
      { name: 'Personalized Salad Bowl', price: 224.95, badge: 'Nutrition Focused', desc: 'Pick your greens, toppings, dressing, and portion sizes. Complete calorie and macro information.' },
      { name: 'Custom Wrap Creation', price: 254.95, desc: 'Choose wrap type, protein fillings, vegetables, and sauces. Customize for your dietary goals.' },
      { name: 'Tailored Meal Prep', price: 449.95, badge: 'Weekly Plan', desc: '5-day customized meal plan with specific macro targets. Recipes and cooking instructions included.' },
      { name: 'Diet-Specific Bowl', price: 299.95, badge: 'Keto/Vegan/Low-Carb', desc: 'Meals designed for specific dietary requirements with precise macro calculations.' },
      { name: 'Athlete Fuel Bowl', price: 374.95, badge: 'High Performance', desc: 'Optimized for athletic performance with custom protein:carb ratios and recovery nutrients.' },
      { name: 'Weight Management Bowl', price: 274.95, badge: 'Calorie Controlled', desc: 'Portion-controlled meals with exact calorie counts and balanced macronutrients.' },
    ],
  },
  {
    category: 'Grilled & Sides',
    emoji: '🍖',
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

export default function Menu() {
  return (
    <section
      id="menu"
      className="section-wrap bg-dark-3"
    >
      <div className="container">

        {/* Header */}
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

        {/* Category grid */}
        <div className="grid-auto">
          {MENU_DATA.map(section => (
            <button
              key={section.category}
              onClick={() => window.location.href = `#category-${section.category.toLowerCase().replace(/\s+/g, '-')}`}
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

      </div>
    </section>
  );
}
