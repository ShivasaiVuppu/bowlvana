
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>Eat Clean. Live Strong. Delivered Daily.</h1>
        <p>Bowlvana brings you chef-crafted, high-protein meals and healthy bowls, delivered fresh to your door in Hyderabad.</p>
        <Link className="cta-button" to="/#subscribe">Start Your Plan</Link>
      </div>
    </section>
  );
}
