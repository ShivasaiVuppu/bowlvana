import React from 'react';

const navItems = [
  { id: 'intro', label: 'Intro & Contact' },
  { id: 'menu', label: 'Menu' },
  { id: 'subscribe', label: 'Subscription' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'about', label: 'About Us' },
];

export function PageNav() {
  return (
    <aside className="nav-panel">
      <div className="brand">
        Bowlvana.<span>in</span>
      </div>
      <p className="nav-description">Modern Hyderabad cloud kitchen</p>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link">
                <span className="nav-dot" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
