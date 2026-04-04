
const deliveryAreas = [
  'Vanasthalipuram',
  'Dilshukhnagar',
  'Kothapet',
  'Uppal',
  'Nagole',
  'Hastinapuram',
  'BN Reddy',
  'LB Nagar',
  'Hayathnagar',
];



export default function Delivery() {
  return (
    <section className="delivery-section" style={{padding:'32px 0 48px 0', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{width:'100%', maxWidth:1200, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <h2 style={{textAlign:'center',fontSize:'2.5rem',fontWeight:900,letterSpacing:'0.01em',color:'#ff6600',marginBottom:10}}>Delivery Information</h2>
        <p style={{textAlign:'center',color:'#333333',fontSize:'1.2rem',maxWidth:700,margin:'0 auto 32px auto',fontWeight:600}}>
          Bowlvana delivers chef-crafted, healthy meals daily across Hyderabad. Our own delivery fleet covers up to <span style={{color:'#ff6600',fontWeight:900}}>7km</span> from our kitchen, ensuring your food is always fresh—never cold-stored, never bulk-prepped.
        </p>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:36, width:'100%'}}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:36, width:'100%'}}>
            <div style={{background:'#ffffff',borderRadius:22,padding:'28px 24px',boxShadow:'0 4px 32px rgba(0,0,0,0.08)',border:'2px solid #ff6600',maxWidth:420,flex:'1 1 320px',minWidth:260,display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:18}}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ff6600" strokeWidth="2"/><path d="M7 12h10M12 7v10" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/></svg>
                <span style={{color:'#ff6600',fontWeight:900,fontSize:'1.3rem'}}>Current Delivery Areas</span>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0 32px',marginTop:8,maxWidth:340}}>
                {deliveryAreas.map(area => (
                  <span key={area} style={{color:'#ff6600',fontWeight:700,fontSize:'1.08rem',margin:'6px 0',minWidth:120,textAlign:'center'}}>{area}</span>
                ))}
              </div>
            </div>
            <div style={{background:'#ffffff',borderRadius:18,padding:'22px 20px',boxShadow:'0 2px 18px rgba(0,0,0,0.08)',border:'2px solid #ff6600',maxWidth:420,flex:'1 1 320px',minWidth:260,display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 17V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" stroke="#ff6600" strokeWidth="2"/><rect x="7" y="13" width="10" height="6" rx="3" stroke="#ff6600" strokeWidth="2"/><circle cx="7" cy="19" r="2" fill="#ff6600"/><circle cx="17" cy="19" r="2" fill="#ff6600"/></svg>
                <span style={{color:'#ff6600',fontWeight:800,fontSize:'1.1rem'}}>Beyond 7km?</span>
              </div>
              <p style={{color:'#333333',fontWeight:600,fontSize:'1.05rem',margin:0,textAlign:'center'}}>
                We can deliver further via trusted partners like Rapido, Ola, and Uber. Just let us know your location and we’ll arrange a safe, quick delivery!
              </p>
            </div>
            <div style={{background:'#ffffff',borderRadius:18,padding:'22px 20px',boxShadow:'0 2px 18px rgba(0,0,0,0.08)',border:'2px solid #ff6600',maxWidth:420,flex:'1 1 320px',minWidth:260,display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="8" stroke="#ff6600" strokeWidth="2"/><path d="M8 15h8M8 11h8M8 7h8" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/></svg>
                <span style={{color:'#ff6600',fontWeight:800,fontSize:'1.1rem'}}>Order on Zomato & Swiggy</span>
              </div>
              <p style={{color:'#333333',fontWeight:600,fontSize:'1.05rem',margin:0,textAlign:'center'}}>
                Prefer your favorite app? Bowlvana is available on Zomato and Swiggy for your convenience.
              </p>
            </div>
            <div style={{background:'#ffffff',borderRadius:18,padding:'22px 20px',boxShadow:'0 2px 18px rgba(0,0,0,0.08)',border:'2px solid #ff6600',maxWidth:420,flex:'1 1 320px',minWidth:260,display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ff6600" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/></svg>
                <span style={{color:'#ff6600',fontWeight:800,fontSize:'1.1rem'}}>Real-Time Support</span>
              </div>
              <p style={{color:'#000000',fontWeight:600,fontSize:'1.05rem',margin:0,textAlign:'center'}}>
                Our team is always available to help with delivery updates, custom requests, or any questions—just call or WhatsApp us!
              </p>
            </div>
          </div>
        </div>
        <div style={{marginTop:40,textAlign:'center',color:'#ff6600',fontWeight:800,fontSize:'1.15rem',maxWidth:700,marginLeft:'auto',marginRight:'auto'}}>
          <span style={{fontSize:'1.5rem',color:'#ff6600'}}>"</span>
          Your health journey deserves the best—Bowlvana delivers it, fresh and fast, every single day.
          <span style={{fontSize:'1.5rem',color:'#ff6600'}}>"</span>
        </div>
      </div>
    </section>
  );
}
