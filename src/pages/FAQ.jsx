
import { useState } from 'react';

const faqs = [
  // About Food & Quality
  { q: 'What is Bowlvana?', a: 'Bowlvana is a healthy cloud kitchen offering fresh, high-protein, and balanced meal bowls designed for fitness, weight loss, and clean eating.' },
  { q: 'Is your food really healthy?', a: 'Yes. We use fresh ingredients, minimal oil, and balanced macros (protein, carbs, fats) to ensure every meal supports your health goals.' },
  { q: 'Do you use preservatives or artificial ingredients?', a: 'No. All meals are freshly prepared with no preservatives or artificial additives.' },
  { q: 'Are your meals suitable for weight loss?', a: 'Absolutely. Our bowls are portion-controlled and nutrient-balanced, making them ideal for weight loss and clean diets.' },
  { q: 'Do you provide calorie or nutrition details?', a: 'Yes, we can provide calorie and macro details on request for most meals.' },
  // Menu & Customization
  { q: 'What kind of food do you serve?', a: 'We offer protein bowls (chicken, paneer, tofu), rice bowls, healthy wraps, and salads.' },
  { q: 'Can I customize my bowl?', a: 'Yes. You can customize protein (chicken/paneer/tofu), spice level, and add-ons.' },
  { q: 'Do you have vegetarian and vegan options?', a: 'Yes. We have multiple vegetarian and vegan-friendly bowls.' },
  { q: 'Is the food spicy?', a: 'We offer mild to spicy options. You can choose your preference while ordering.' },
  // Orders & Delivery
  { q: 'How can I order from Bowlvana?', a: 'You can order via our website, WhatsApp, or food delivery apps (if available).' },
  { q: 'Do you offer home delivery?', a: 'Yes, we deliver within our service area.' },
  { q: 'How long does delivery take?', a: 'Typically 30–45 minutes depending on location and order volume.' },
  { q: 'What are your operating hours?', a: 'We are open daily. (You can update timing like: 11 AM – 11 PM)' },
  // Fitness & Diet Plans
  { q: 'Do you provide diet plans or subscriptions?', a: 'Yes. We offer weekly/monthly meal plans for weight loss, muscle gain, and clean eating.' },
  { q: 'Are your meals good for gym users?', a: 'Yes. Our high-protein bowls are perfect for gym-goers and fitness enthusiasts.' },
  // Payments & Support
  { q: 'What payment methods do you accept?', a: 'We accept UPI, cash on delivery, and online payments.' },
  { q: 'What if there is an issue with my order?', a: 'You can contact us immediately, and we will resolve it quickly.' },
  { q: 'How can I contact Bowlvana?', a: 'You can reach us via phone, WhatsApp, or Instagram.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section" style={{padding:'32px 0 48px 0', display:'flex', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>
      <div style={{width:'100%', maxWidth:800, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', padding:'0 8px'}}>
        <h2 style={{textAlign:'center',fontSize:'2.3rem',fontWeight:900,letterSpacing:'0.01em',color:'#d29f00',marginBottom:10}}>🍱 Bowlvana – Frequently Asked Questions (FAQ)</h2>
        <div style={{width:'100%',marginTop:24}}>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{marginBottom:18,background:'#181818',borderRadius:14,boxShadow:'0 2px 18px #0003',border:'2px solid #b57d00',overflow:'hidden',maxWidth:600,width:'100%',marginLeft:'auto',marginRight:'auto'}}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width:'100%',
                  background:'none',
                  border:'none',
                  color:'#ffd700',
                  fontWeight:800,
                  fontSize:'1.08rem',
                  textAlign:'left',
                  padding:'16px 14px',
                  cursor:'pointer',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  outline:'none',
                  transition:'background 0.2s',
                }}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{faq.q}</span>
                <span style={{marginLeft:16,transition:'transform 0.2s',transform:open===i?'rotate(90deg)':'rotate(0deg)'}}>
                  ▶
                </span>
              </button>
              {open === i && (
                <div id={`faq-panel-${i}`} style={{padding:'14px 14px 16px 14px',color:'#e6e6e6',fontWeight:600,fontSize:'1.05rem',borderTop:'1px solid #b57d00',background:'#232323'}}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{marginTop:36,display:'flex',justifyContent:'center',width:'100%'}}>
          <div style={{textAlign:'center',color:'#ffd700',fontWeight:900,fontSize:'1.08rem',background:'#181818',borderRadius:14,padding:'14px 10px',border:'2px solid #d29f00',boxShadow:'0 2px 18px #0003',maxWidth:400,width:'100%'}}>
            👉 Still have questions? <a href="https://wa.me/918498803808" style={{color:'#ffd700',textDecoration:'underline'}}>Message us on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}