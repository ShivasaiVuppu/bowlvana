import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/transformations" element={<Transformations />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
