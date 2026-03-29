import React from 'react';

const navItems = [
  { id: 'page-1', label: 'Intro & Contact' },
  { id: 'page-2', label: 'Menu' },
  { id: 'page-3', label: 'Subscription' },
  { id: 'page-4', label: 'Contact Us' },
  { id: 'page-5', label: 'About Us' },
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
