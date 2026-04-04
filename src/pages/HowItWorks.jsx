// Simple SVG icons for each step
const icons = [
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="plan"><circle cx="12" cy="12" r="10" stroke="#ff6600" strokeWidth="2"/><path d="M8 12h8M8 16h5" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="8" r="1.5" fill="#ff6600"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="personalize"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#ff6600" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="delivery"><path d="M3 17V7a2 2 0 1 2-2h10a2 2 0 1 2 2v10" stroke="#ff6600" strokeWidth="2"/><rect x="7" y="13" width="10" height="6" rx="3" stroke="#ff6600" strokeWidth="2"/><circle cx="7" cy="19" r="2" fill="#ff6600"/><circle cx="17" cy="19" r="2" fill="#ff6600"/></svg>,
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" key="track"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="#ff6600" strokeWidth="2"/></svg>,
];

const steps = [
  {
    title: 'Choose Plan',
    desc: 'Subscribe to our healthy diet plan and get a unique login id & password.',
  },
  {
    title: 'Structure Your Diet',
    desc: 'A nutritionist will be assigned to you and your diet will be customized.',
  },
  {
    title: 'Doorstep Delivery',
    desc: 'Delivery of healthy food across Delhi NCR, Bengaluru, Mumbai & Pune everyday as per your diet designed.',
  },
  {
    title: 'Get Fit',
    desc: 'Achieve your fitness goals with our full support & in-built progress tracker.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" style={{padding:'64px 20px'}}>
      <h2 style={{textAlign:'center',fontSize:'3rem',fontWeight:900,letterSpacing:'0.01em',color:'var(--accent)',marginBottom:16,textTransform:'uppercase'}}>#HOWITWORKS</h2>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:48,maxWidth:1200,margin:'0 auto'}}>
        <div className="how-steps" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:32,width:'100%'}}>
          {steps.map((step, i) => (
            <div key={step.title} style={{background:'#ffffff',borderRadius:8,padding:'32px 24px',boxShadow:'0 2px 20px rgba(0,0,0,0.08)',display:'flex',flexDirection:'column',alignItems:'center',border:'1px solid var(--border)',textAlign:'center'}}>
              <div style={{marginBottom:20}}>{icons[i]}</div>
              <h3 style={{color:'var(--text)',fontWeight:800,fontSize:'1.4rem',marginBottom:12}}>{step.title}</h3>
              <p style={{color:'var(--muted)',fontSize:'1rem',lineHeight:1.6}}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}