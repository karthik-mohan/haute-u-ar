import { FaEnvelope, FaPhone, FaAddressCard, FaLocationArrow } from 'react-icons/fa';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // With Netlify Forms, the form submission is automatically handled, so you might want to add a success message or redirect here.
    console.log('Form submitted', formData);
  };


  return (
    <div id="contact-us" className="text-white p-4" style={{fontSize: "20px"}}>
      <h2 style={{textAlign: "center"}}>Contact Us</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.2rem', left: "10px"}}>
          <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.2rem', textAlign: 'center', marginLeft: 'auto'}}>
      <h2 style={{textAlign: "center"}}> Our Address</h2>
     <h4> <FaAddressCard/>205-50 Lonsdale Ave, Office #2078</h4>
      <h4><FaLocationArrow />North Vancouver, BC, V7M 2E6, Canada</h4>
     <h4> <FaPhone /> Phone: +1 (778) 907-5100</h4>
     <h4><FaEnvelope />   Email: info@closet-ar.com</h4>
      </div>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>

      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" style={{margin: "right"}}>
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>
  
  {/* Name field with autocomplete and label association */}
  <label htmlFor="name">Your Name</label>
  <input 
    type="text" 
    name="name" 
    id="name" 
    placeholder="Your Name" 
    value={formData.name} 
    onChange={handleChange} 
    autoComplete="name" 
    required 
  /><br/><br/>

  {/* Email field with autocomplete and label association */}
  <label htmlFor="email">Your Email</label>
  <input 
    type="email" 
    name="email" 
    id="email" 
    placeholder="Your Email" 
    value={formData.email} 
    onChange={handleChange} 
    autoComplete="email" 
    required 
  /><br/><br/>

  {/* Message field with label association (Note: autocomplete is less relevant here) */}
  <label htmlFor="message">Your Message</label>
  <textarea 
    name="message" 
    id="message" 
    placeholder="Your Message" 
    value={formData.message} 
    onChange={handleChange} 
    required
  ></textarea><br /><br />

  <button type="submit">Send Message</button>
</form>

    </div>
      </div>
    </div>
  
  );
}

export default ContactUs;
