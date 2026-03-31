import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
        <li><Link to="/delivery">Delivery</Link></li>
        <li><Link to="/transformations">Transformations</Link></li>
        <li><Link to="/corporate">Corporate</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
