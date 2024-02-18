import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Ensure you have 'react-icons' installed

function Header() {
  const logo_src = process.env.PUBLIC_URL+'/hauteu_ar_technologies_inc_logo.jpg'
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'black', color: 'white', position: 'fixed',  top: 0,  left: 0,         
    width: '98  %',   zIndex: 10  }}>
  <div style={{ marginRight: 'auto' }}><img src= {logo_src} alt="Logo" /></div>
  <nav style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
    <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none' }}>How It Works</a>
    <a href="#try-on-feature" style={{ color: 'white', textDecoration: 'none' }}>Try On Feature</a>
    <a href="#contact-us" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
    <button style={{ color: 'white', background: 'none', border: 'none' }}>Try On</button>
  </nav>
  <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
        <a href="https://www.linkedin.com/company/hauteu-ar-technologies-inc/?viewAsMember=true" className="mx-2"><FaLinkedin /></a>
        <a href="https://www.instagram.com/hauteuar/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="mx-2"><FaInstagram /></a>
        <a href="https://facebook.com" className="mx-2"><FaFacebookSquare /></a>
      </div>
    </header>
  );
}


export default Header;
