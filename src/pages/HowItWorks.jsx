
// Simple SVG icons for each step
const icons = [
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="plan"><circle cx="12" cy="12" r="10" stroke="#d29f00" strokeWidth="2"/><path d="M8 12h8M8 16h5" stroke="#d29f00" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="8" r="1.5" fill="#d29f00"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="personalize"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#d29f00" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#d29f00" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="prep"><rect x="3" y="7" width="18" height="10" rx="5" stroke="#d29f00" strokeWidth="2"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#d29f00" strokeWidth="2"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="delivery"><path d="M3 17V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" stroke="#d29f00" strokeWidth="2"/><rect x="7" y="13" width="10" height="6" rx="3" stroke="#d29f00" strokeWidth="2"/><circle cx="7" cy="19" r="2" fill="#d29f00"/><circle cx="17" cy="19" r="2" fill="#d29f00"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="track"><circle cx="12" cy="12" r="10" stroke="#d29f00" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#d29f00" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="support"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#d29f00" strokeWidth="2"/><path d="M8 15h8M8 11h8M8 7h8" stroke="#d29f00" strokeWidth="2" strokeLinecap="round"/></svg>,
];

const steps = [
  {
    title: 'Share Your Goals',
    desc: 'We take all your requirements, health goals, and preferences to design a plan tailored to your body and lifestyle.',
  },
  {
    title: 'Personalized Nutrition Plan',
    desc: 'Our expert nutritionist creates a fully customized meal plan, inspired by New York signature bowls and adapted for Indian diets.',
  },
  {
    title: 'Fresh, Diet-Based Cooking',
    desc: 'Every meal is cooked fresh daily—no cold storage, no bulk prep. 100% diet-based, high-protein, and clean ingredients.',
  },
  {
    title: 'Flexible Delivery',
    desc: 'Enjoy doorstep delivery via our own fleet (within 7km) or order on Zomato & Swiggy. Always on time, always fresh.',
  },
  {
    title: 'Track & Transform',
    desc: 'Get ongoing support, track your progress, and see real results with Bowlvana’s expert team by your side.',
  },
  {
    title: 'Trusted & Inspired',
    desc: 'Bowlvana is Hyderabad’s first diet-based kitchen, inspired by global trends and adapted for Indian tastes.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" style={{padding:'32px 0 48px 0'}}>
      <h2 style={{textAlign:'center',fontSize:'2.7rem',fontWeight:900,letterSpacing:'0.01em',color:'#d29f00',marginBottom:10}}>How Bowlvana Works</h2>
      <p style={{textAlign:'center',color:'#e6e6e6',fontSize:'1.25rem',maxWidth:700,margin:'0 auto 36px auto',fontWeight:600}}>
        Bowlvana is Hyderabad’s trusted diet-based kitchen, offering chef-crafted, high-protein meals tailored to your unique needs. Here’s how we deliver a world-class nutrition experience:
      </p>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:36}}>
        <div className="how-steps" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:36}}>
          {steps.map((step, i) => (
            <div key={step.title} style={{background:'#181818',borderRadius:22,padding:'32px 28px',maxWidth:320,minWidth:240,boxShadow:'0 4px 32px #0004',display:'flex',flexDirection:'column',alignItems:'center',border:'2px solid #d29f00'}}>
              <div style={{marginBottom:18}}>{icons[i]}</div>
              <h3 style={{color:'#ffd700',fontWeight:900,fontSize:'1.3rem',marginBottom:10,textAlign:'center'}}>{step.title}</h3>
              <p style={{color:'#e6e6e6',fontSize:'1.08rem',textAlign:'center',fontWeight:600}}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:36,textAlign:'center',color:'#b57d00',fontWeight:800,fontSize:'1.2rem',maxWidth:700}}>
          <span style={{fontSize:'1.5rem',color:'#ffd700'}}>“</span>
          Inspired by New York’s signature bowls, Bowlvana brings global nutrition trends to Hyderabad—making clean eating easy, tasty, and accessible for everyone.
          <span style={{fontSize:'1.5rem',color:'#ffd700'}}>”</span>
        </div>
      </div>
    </section>
  );
}