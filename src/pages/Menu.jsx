import React, { useState } from 'react';

// Menu data organized by sections
const menuSections = [
  {
    category: 'Bowls',
    items: [
      { name: 'Exotic Fruit Bowl', price: 208.95, description: 'A vibrant medley of seasonal exotic fruits, served chilled for a refreshing and nutritious start to your day.', image: 'exotic-fruit-bowl.jpg' },
      { name: 'Fruit Bowl', price: 177.45, description: 'A classic bowl of handpicked fresh fruits, rich in vitamins and antioxidants.', image: 'fruit-bowl.jpg' },
      { name: 'The Balanced Chicken Bowl', price: 292.95, description: 'Grilled chicken breast, brown rice, and sautéed veggies, perfectly balanced for protein and fiber.', image: 'balanced-chicken-bowl.jpg' },
      { name: 'Mushroom Broccoli Over Rice Bowl', price: 250.95, description: 'Tender mushrooms and broccoli tossed in light spices, served over wholesome rice.', image: 'mushroom-broccoli-bowl.jpg' },
      { name: 'Tofu Protein Rice Bowl', price: 261.45, description: 'High-protein tofu cubes with brown rice and fresh veggies, ideal for a plant-based boost.', image: 'tofu-protein-bowl.jpg' },
      { name: 'Paneer Over Rice Bowl', price: 282.45, description: 'Soft paneer cubes sautéed with mild spices, served atop fluffy rice.', image: 'paneer-rice-bowl.jpg' },
      { name: 'Falafel Over Rice Bowl', price: 250.95, description: 'Crispy falafel balls, fresh salad, and rice, drizzled with our signature sauce.', image: 'falafel-rice-bowl.jpg' },
      { name: 'Scrambled Egg Over Rice Bowl', price: 250.95, description: 'Fluffy scrambled eggs with veggies, served over a bed of rice for a protein-rich meal.', image: 'scrambled-egg-bowl.jpg' },
      { name: 'Chicken tikka Over Rice Bowl', price: 303.45, description: 'Juicy chicken tikka pieces, aromatic rice, and a side of fresh salad.', image: 'chicken-tikka-bowl.jpg' },
      { name: 'Bowlvanas Chicken Over Rice Bowl', price: 292.95, description: 'Our signature grilled chicken, brown rice, and chef\'s special sauce.', image: 'bowlvana-chicken-bowl.jpg' },
      { name: 'Chicken Over Rice Bowl', price: 282.45, description: 'Classic grilled chicken served with rice and seasonal vegetables.', image: 'chicken-rice-bowl.jpg' },
      { name: 'Chana Over Rice Bowl', price: 250.95, description: 'Protein-packed chickpeas cooked in mild spices, served over rice.', image: 'chana-rice-bowl.jpg' },
      { name: 'Cilantro Chicken Over Rice', price: 303.45, description: 'Grilled chicken tossed in fresh cilantro, served with rice and veggies.', image: 'cilantro-chicken-bowl.jpg' },
      { name: 'Lemon Garlic Chicken Over Rice Bowl', price: 303.45, description: 'Zesty lemon-garlic chicken, brown rice, and a medley of vegetables.', image: 'lemon-garlic-chicken-bowl.jpg' },
      { name: 'Rajma Over Rice Bowl', price: 261.45, description: 'Classic kidney beans curry, slow-cooked and served over rice.', image: 'rajma-rice-bowl.jpg' },
      { name: 'Soya Over Rice Bowl', price: 261.45, description: 'Nutritious soya chunks in a light curry, served with rice.', image: 'soya-rice-bowl.jpg' },
    ],
  },
  {
    category: 'Wraps',
    items: [
      { name: 'Tofu Broccoli Wrap', price: 198.45, description: 'Grilled tofu and broccoli, wrapped in a whole wheat tortilla with fresh greens.' },
      { name: 'Mushroom Broccoli Wrap', price: 177.45, description: 'Sautéed mushrooms and broccoli, wrapped with crisp veggies and a light dressing.' },
      { name: 'Tofu Wrap', price: 166.95, description: 'Soft tofu, crunchy veggies, and a tangy sauce in a wholesome wrap.' },
      { name: 'Falafel Wrap', price: 168.00, description: 'Crispy falafel, lettuce, tomatoes, and creamy sauce in a soft wrap.' },
      { name: 'Chicken Wrap', price: 198.45, description: 'Grilled chicken, fresh veggies, and our special sauce in a hearty wrap.' },
      { name: 'Chicken tikka Wrap', price: 208.95, description: 'Spicy chicken tikka, onions, and greens, wrapped for a flavorful bite.' },
      { name: 'Tandoori Chicken Protein Wrap', price: 219.45, description: 'Tandoori chicken, protein-rich fillings, and crisp veggies in a wheat wrap.' },
      { name: 'Paneer Wrap', price: 189.00, description: 'Paneer cubes, salad, and mint chutney, rolled in a soft wrap.' },
      { name: 'Tempeh Wrap', price: 187.95, description: 'Nutty tempeh, fresh veggies, and a zesty sauce in a protein-packed wrap.' },
    ],
  },
  {
    category: 'Salads',
    items: [
      { name: 'Beetroot Curd Salad', price: 177.45, description: 'Grated beetroot, creamy curd, and crunchy veggies for a refreshing, probiotic-rich salad.' },
      { name: 'Vegetable Salad', price: 166.95, description: 'A colorful mix of fresh seasonal vegetables, lightly tossed with herbs.' },
      { name: 'Egg Salad', price: 187.95, description: 'Boiled eggs, crisp greens, and a light dressing for a protein-rich salad.' },
      { name: 'Chicken Salad', price: 208.95, description: 'Grilled chicken, mixed greens, and a tangy vinaigrette for a wholesome meal.' },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { name: 'Chicken Wheat Bread Sandwich', price: 187.95, description: 'Grilled chicken, fresh veggies, and light mayo between slices of wheat bread.' },
      { name: 'Chicken Sandwich', price: 198.45, description: 'Classic chicken filling with crisp lettuce and tomatoes in soft bread.' },
      { name: 'Egg Sandwich', price: 166.95, description: 'Boiled eggs, creamy spread, and crunchy veggies in a wholesome sandwich.' },
      { name: 'Double Egg Sandwich', price: 187.95, description: 'Extra eggs for extra protein, layered with fresh veggies.' },
      { name: 'Double Egg Chicken Sandwich', price: 208.95, description: 'A hearty combo of chicken and double eggs, packed with flavor.' },
      { name: 'Egg and Cheese Sandwich', price: 166.95, description: 'Eggs and melted cheese, with a touch of herbs, in soft bread.' },
      { name: 'Paneer Sandwich', price: 145.95, description: 'Paneer, veggies, and mint chutney in a light, satisfying sandwich.' },
      { name: 'Tofu Sandwich', price: 135.45, description: 'Tofu slices, crisp veggies, and a tangy spread in whole wheat bread.' },
    ],
  },
  {
    category: 'Omelettes & Chilla',
    items: [
      { name: 'Mushroom Omelette', price: 157.50, description: 'Fluffy omelette loaded with sautéed mushrooms and fresh herbs.' },
      { name: 'Masala Omelette', price: 157.50, description: 'Spiced Indian-style omelette with onions, tomatoes, and coriander.' },
      { name: 'Paneer Omelette', price: 157.50, description: 'Egg omelette stuffed with soft paneer and mild spices.' },
      { name: 'Plain Omelette', price: 94.50, description: 'Classic, fluffy omelette made with farm-fresh eggs.' },
      { name: 'Besan Chilla', price: 166.95, description: 'Savory gram flour pancake with veggies and light spices.' },
    ],
  },
  {
    category: 'Upma & Oats',
    items: [
      { name: 'Oats Upma', price: 198.45, description: 'Healthy oats cooked with veggies and mild spices for a filling breakfast.' },
      { name: 'Overnight Soaked Oats', price: 198.45, description: 'Chilled oats soaked overnight with fruits, seeds, and a touch of honey.' },
      { name: 'Foxtail Millet Upma', price: 198.45, description: 'Nutritious foxtail millet cooked with vegetables and Indian spices.' },
      { name: 'Kodo Millet Upma', price: 198.45, description: 'Wholesome kodo millet upma with fresh veggies and herbs.' },
      { name: 'Barnyard Millet Upma', price: 198.45, description: 'Light and fluffy upma made from barnyard millet and seasonal vegetables.' },
      { name: 'Proso Millet Upma', price: 198.45, description: 'Protein-rich proso millet upma with a medley of vegetables.' },
    ],
  },
  {
    category: 'Pastas',
    items: [
      { name: 'Red Sauce Pasta', price: 292.95, description: 'Penne pasta tossed in a tangy tomato-based sauce with herbs and veggies.' },
      { name: 'Chicken White Sauce Pasta', price: 313.95, description: 'Grilled chicken and pasta in a creamy white sauce with fresh herbs.' },
      { name: 'Chicken Red Sauce Pasta', price: 313.95, description: 'Chicken and pasta in a rich, spiced tomato sauce.' },
      { name: 'Veg White Sauce Pasta', price: 292.95, description: 'Assorted veggies and pasta in a smooth, creamy white sauce.' },
      { name: 'Chicken White Sauce Wheat Pasta', price: 313.95, description: 'Whole wheat pasta with chicken in a light, creamy sauce.' },
      { name: 'Chicken Red Sauce Wheat Pasta', price: 313.95, description: 'Whole wheat pasta and chicken in a zesty red sauce.' },
    ],
  },
  {
    category: 'French Toasts & Pancakes',
    items: [
      { name: 'Exotic Bliss Toast', price: 219.45, description: 'French toast topped with exotic fruits and a hint of honey.' },
      { name: 'Bowlvanas Special French Toast', price: 219.45, description: 'Our signature French toast with a unique blend of flavors and toppings.' },
      { name: 'Tiramisu French Toast', price: 261.45, description: 'French toast inspired by tiramisu, layered with coffee and cream.' },
      { name: 'Zero Sugar Wheat French Toast', price: 208.95, description: 'Healthy wheat French toast, sweetened naturally and sugar-free.' },
      { name: 'Zero Sugar Banana Pan Cake', price: 187.95, description: 'Fluffy banana pancakes, made without added sugar.' },
    ],
  },
  {
    category: 'Desserts & Protein Sweets',
    items: [
      { name: 'Protein Chocolate Mousse', price: 208.95, description: 'Rich chocolate mousse made with whey protein for a guilt-free treat.' },
      { name: "Bowlvana's Protein Delight", price: 177.45, description: 'A special protein-packed dessert, unique to Bowlvana.' },
      { name: 'Zero Sugar Chocolate Tiramasu', price: 208.95, description: 'Classic tiramisu flavors, made sugar-free and high in protein.' },
      { name: 'Zero Sugar Protein Delight', price: 198.45, description: 'A delicious, sugar-free protein dessert for fitness lovers.' },
      { name: 'Zero Sugar Protein Chocolate Mousse', price: 198.45, description: 'Chocolate mousse with zero sugar and extra protein.' },
      { name: 'Coffee Tiramisu', price: 198.45, description: 'Coffee-infused tiramisu, light and satisfying.' },
    ],
  },
  {
    category: 'Shakes & Juices',
    items: [
      { name: 'Bulk Up Booster Shake', price: 198.45, description: 'High-calorie shake with protein, nuts, and fruits for muscle gain.' },
      { name: 'Lean Gain Shake', price: 177.45, description: 'Low-calorie, high-protein shake for lean muscle growth.' },
      { name: 'Abc Juice', price: 157.50, description: 'Apple, beetroot, and carrot juice for a vitamin-rich boost.' },
    ],
  },
  {
    category: 'Add-ons & Sauces',
    items: [
      { name: 'Tzatziki sauce', price: 30.00, description: 'Creamy Greek yogurt sauce with cucumber and herbs.' },
      { name: 'White sauce', price: 25.00, description: 'Smooth, mildly spiced white sauce for extra flavor.' },
      { name: 'Hot sauce', price: 15.00, description: 'Spicy chili sauce to add a kick to your meal.' },
      { name: 'Mint sauce', price: 25.00, description: 'Refreshing mint and coriander sauce.' },
    ],
  },
  {
    category: 'Grilled & Sides',
    items: [
      { name: 'Grilled Chicken [200 g]', price: 472.50, description: 'Juicy grilled chicken breast, perfectly seasoned and high in protein.' },
      { name: 'Grilled Chicken [200 g] with 2 Boiled Egg', price: 525.00, description: 'Grilled chicken breast served with two protein-rich boiled eggs.' },
    ],
  },
  {
    category: 'Rice & Pulao',
    items: [
      { name: 'Brown Rice Chicken Pulao', price: 366.45, description: 'Aromatic brown rice cooked with tender chicken and mild spices.' },
    ],
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // If no category selected, show category buttons
  if (!selectedCategory) {
    return (
      <section className="menu-page">
        <div className="page-header">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Choose a category to explore our delicious and healthy options
          </p>
        </div>

        <div className="categories-grid">
          {menuSections.map((section) => (
            <div key={section.category} className="category-card">
              {/* Category Image Placeholder */}
              <div className="category-image-placeholder">
                <div className="image-placeholder-box">
                  <span className="image-placeholder-text">
                    📷 {section.category} Image - Add later
                  </span>
                </div>
              </div>
              
              <h3 className="category-title">{section.category}</h3>
              <p className="category-count">{section.items.length} items available</p>
              
              <button
                className="category-button"
                onClick={() => setSelectedCategory(section.category)}
              >
                View Items
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Show items for selected category
  const section = menuSections.find((s) => s.category === selectedCategory);
  
  return (
    <section className="menu-page">
      <div className="page-header">
        <button
          className="back-button"
          onClick={() => setSelectedCategory(null)}
        >
          ← Back to Categories
        </button>
        <h1 className="page-title">{section.category}</h1>
        <p className="page-subtitle">
          {section.items.length} delicious options to choose from
        </p>
      </div>

      {/* Category Image Placeholder */}
      <div className="category-image-placeholder">
        <div className="image-placeholder-box">
          <span className="image-placeholder-text">
            📷 {section.category} Image - Add later
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-items-list">
        {section.items.map((item) => (
          <div key={item.name} className="menu-item-row">
            <div className="menu-item-image">
              <span className="image-placeholder-text">📷 Image</span>
            </div>
            <div className="menu-item-content">
              <div className="menu-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span className="menu-item-badge">Healthy Choice</span>
              </div>
              <div className="menu-item-price">₹{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
