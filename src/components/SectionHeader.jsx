import React from 'react';

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="section-header">
      <div>
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
