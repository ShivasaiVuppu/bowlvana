
import React, { useState } from 'react';

export default function Subscribe() {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    age: '',
    mobile: '',
    email: '',
    diet: '',
    allergies: '',
    intolerances: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Bowlvana Subscription Enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nGender: ${form.gender}\nAge: ${form.age}\nMobile: ${form.mobile}\nEmail: ${form.email}\nDiet: ${form.diet}\nAllergies: ${form.allergies}\nIntolerances: ${form.intolerances}\nNotes: ${form.notes}`
    );
    window.location.href = `mailto:vsaishiva99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="subscribe-section">
      <h2>Start Your Subscription</h2>
      <p>Fill in your details and dietary preferences. Our team will reach out to personalize your meals.</p>
      <form className="subscription-form" onSubmit={handleSubmit} style={{maxWidth:480, margin:'0 auto', display:'grid', gap:20}}>
        <label>
          Name*
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Vamshi Krishna"
            style={{ color: '#111' }}
          />
        </label>
        <label>
          Gender*
          <select name="gender" required value={form.gender} onChange={handleChange} style={{ color: form.gender ? '#111' : '#888' }}>
            <option value="" style={{ color: '#888' }}>Select</option>
            <option value="Male" style={{ color: '#111' }}>Male</option>
            <option value="Female" style={{ color: '#111' }}>Female</option>
            <option value="Other" style={{ color: '#111' }}>Other</option>
          </select>
        </label>
        <label>
          Age*
          <input name="age" type="number" min="1" max="120" required value={form.age} onChange={handleChange} placeholder="e.g. 28" style={{ color: '#111' }} />
        </label>
        <label>
          Mobile*
          <input name="mobile" type="tel" pattern="[0-9]{10}" required value={form.mobile} onChange={handleChange} placeholder="e.g. 9876543210" style={{ color: '#111' }} />
        </label>
        <label>
          Email*
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="e.g. vamshi@email.com" style={{ color: '#111' }} />
        </label>
        <label>
          Which Diet?*
          <select name="diet" required value={form.diet} onChange={handleChange} style={{ color: form.diet ? '#111' : '#888' }}>
            <option value="" style={{ color: '#888' }}>Select</option>
            <option value="Vegetarian" style={{ color: '#111' }}>Vegetarian</option>
            <option value="Non-Vegetarian" style={{ color: '#111' }}>Non-Vegetarian</option>
            <option value="Vegan" style={{ color: '#111' }}>Vegan</option>
            <option value="Eggetarian" style={{ color: '#111' }}>Eggetarian</option>
            <option value="Combo (specific days)" style={{ color: '#111' }}>Combo (specific days)</option>
          </select>
        </label>
        <label>
          Any food allergies?
          <input name="allergies" type="text" value={form.allergies} onChange={handleChange} placeholder="e.g. nuts, gluten, dairy" style={{ color: '#111' }} />
        </label>
        <label>
          Any intolerances?
          <input name="intolerances" type="text" value={form.intolerances} onChange={handleChange} placeholder="e.g. lactose, gluten" style={{ color: '#111' }} />
        </label>
        <label>
          Additional Notes
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Anything else we should know?" style={{ color: '#111' }} />
        </label>
        <button className="cta-button" type="submit">Send My Requirement</button>
      </form>
    </section>
  );
}