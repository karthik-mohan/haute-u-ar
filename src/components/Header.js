import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Ensure you have 'react-icons' installed

function Header() {
  const logo_src = process.env.PUBLIC_URL+'/hauteu_ar_technologies_inc_logo.jpg'
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px', backgroundColor: 'black',
     color: 'white',
     position: 'fixed',  top: 0,   zIndex: 10  }}>
  <div style={{ marginRight: 'auto' }}><img src= {logo_src} alt="Logo" /></div>
 
  <nav style={{ display: 'flex', gap: '15px', alignItems: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
  <a href="#Home" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Home</a>
  <a href="#features" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Features</a>
    <a href="#how-it-works" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>How It Works</a>
    <a href="#try-on-feature" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Try On Feature</a>
    <a href="#testimonials" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Testimonials</a>
    <a href="#contact-us" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Contact Us</a>
    
  </nav>
  <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px', fontSize: '1.5rem'  }}>
        <a href="https://www.linkedin.com/company/hauteu-ar-technologies-inc/?viewAsMember=true" className="mx-2"><FaLinkedin /></a>
        <a href="https://www.instagram.com/hauteuar/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="mx-2"><FaInstagram /></a>
        <a href="https://facebook.com" className="mx-2"><FaFacebookSquare /></a>
      </div>
    
    </header>
  );
}


export default Header;
