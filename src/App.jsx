import React from 'react';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Menu from './pages/Menu';
import Subscribe from './pages/Subscribe';
import Delivery from './pages/Delivery';
import Transformations from './pages/Transformations';
import Corporate from './pages/Corporate';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';

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
      <main className="site-content scroll-snap-container" style={{ paddingBottom: '6.5rem' }}>
        <section id="home" className="scroll-snap-section"><Home /></section>
        <section id="how-it-works" className="scroll-snap-section"><HowItWorks /></section>
        <section id="menu" className="scroll-snap-section"><Menu /></section>
        <section id="subscribe" className="scroll-snap-section"><Subscribe /></section>
        <section id="delivery" className="scroll-snap-section"><Delivery /></section>
        <section id="transformations" className="scroll-snap-section"><Transformations /></section>
        <section id="corporate" className="scroll-snap-section"><Corporate /></section>
        <section id="faq" className="scroll-snap-section"><FAQ /></section>
        <section id="blog" className="scroll-snap-section"><Blog /></section>
        <section id="contact" className="scroll-snap-section"><Contact /></section>
        <section id="about" className="scroll-snap-section"><About /></section>
        <footer className="site-footer">
          © 2026 Bowlvana.in · Hyderabad · Cloud kitchen experience
        </footer>
      </main>
    </div>
  );
}

export default App;
