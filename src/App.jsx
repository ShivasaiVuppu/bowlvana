import React from 'react';
import MainNav from './components/MainNav';
import AppRoutes from './AppRoutes';

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
  return (
    <div className="app-shell">
      <MainNav />
      {/* ...removed website under development notice... */}
      <main className="site-content" style={{ paddingBottom: '6.5rem' }}>
        <AppRoutes />
        <footer className="site-footer">
          © 2026 Bowlvana.in · Hyderabad · Cloud kitchen experience
        </footer>
      </main>
    </div>
  );
}

export default App;
