import React from 'react';


export default function Corporate() {
  return (
    <section className="corporate-section" style={{padding:'32px 0 48px 0', display:'flex', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>
      <div style={{width:'100%', maxWidth:900, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2 style={{textAlign:'center',fontSize:'2.3rem',fontWeight:900,letterSpacing:'0.01em',color:'#d29f00',marginBottom:10}}>Corporate & Bulk Orders</h2>
        <p style={{textAlign:'center',color:'#e6e6e6',fontSize:'1.18rem',maxWidth:700,margin:'0 auto 32px auto',fontWeight:600}}>
          Bowlvana brings healthy, delicious catering to your office, event, or large group—where taste meets health, and every meal is crafted for energy and focus.
        </p>
        <ul style={{color:'#ffd700',fontWeight:700,fontSize:'1.13rem',marginBottom:32,marginTop:0,padding:0,listStyle:'none',textAlign:'center',maxWidth:700}}>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Customizable meal plans for teams of any size
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            High-protein, diet-based menus to boost productivity
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Fresh, hygienic food delivered on time, every time
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Affordable pricing for daily, weekly, or one-time events
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Special menu options for dietary needs (vegan, gluten-free, etc.)
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Hassle-free bulk ordering and dedicated support
          </li>
          <li style={{marginBottom:18}}>
            <span style={{color:'#ffd700',marginRight:8}}>✔</span>
            Trusted by leading companies and startups in Hyderabad
          </li>
        </ul>
        <div style={{background:'#181818',borderRadius:18,padding:'22px 20px',boxShadow:'0 2px 18px #0003',border:'2px solid #b57d00',maxWidth:420,margin:'0 auto',textAlign:'center'}}>
          <div style={{color:'#ffd700',fontWeight:800,fontSize:'1.15rem',marginBottom:8}}>Book Your Corporate Meal Plan</div>
          <div style={{color:'#e6e6e6',fontWeight:600,fontSize:'1.05rem',marginBottom:8}}>Contact us for a free consultation and custom quote:</div>
          <div style={{color:'#ffd700',fontWeight:900,fontSize:'1.13rem',marginBottom:4}}>Call/WhatsApp: <a href="tel:8498803808" style={{color:'#ffd700',textDecoration:'underline'}}>8498803808</a></div>
          <div style={{color:'#ffd700',fontWeight:900,fontSize:'1.13rem'}}>Email: <a href="mailto:vsaishiva99@gmail.com" style={{color:'#ffd700',textDecoration:'underline'}}>vsaishiva99@gmail.com</a></div>
        </div>
      </div>
    </section>
  );
}
