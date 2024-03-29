import React, { useState } from 'react';
import './Header.css';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaBars, FaTimes } from 'react-icons/fa'; // Adding icons for menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo_src = process.env.PUBLIC_URL + '/logo_2.png';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the position you want to scroll to 
      const yOffset = -70; // Adjust the offset pixels to the height of your header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
       <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ marginRight: 'auto' }}><img src={logo_src} alt="Logo" /></div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav style={{ display: menuOpen ? 'flex' : 'none', gap: '15px', alignItems: 'center', fontWeight: 'bold', fontSize: '1rem' }}>   
               <a href="#Home" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}onClick={(e) => { e.preventDefault(); scrollToSection('Home');} }>Home</a>
      <a href="#features" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('features');} }>Features</a>
      <a href="#how-it-works" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works');} }>How It Works</a>
      <a href="#try-on-feature" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('try-on-feature');} }>Try On Feature</a>
      <a href="#testimonials" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('testimonials');} }>Testimonials</a>
      <a href="#contact-us" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact-us');} }>Contact Us</a>
            </nav> 
        <div style={{ marginLeft: 'auto', display: menuOpen ? 'none' : 'flex', gap: '10px', fontSize: '1.5rem', alignItems: 'right' }}>
        <a href="https://www.linkedin.com/company/hauteu-ar-technologies-inc/?viewAsMember=true" className="mx-2"><FaLinkedin /></a>
        <a href="https://www.instagram.com/hauteuar/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="mx-2"><FaInstagram /></a>
        <a href="https://facebook.com" className="mx-2"><FaFacebookSquare /></a>
      </div>
      </div>
    </header>
  );
}


export default Header;
