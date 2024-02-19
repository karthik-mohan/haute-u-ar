import { FaEnvelope, FaPhone, FaAddressCard } from 'react-icons/fa';
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
          <div style={{ fontSize: '1.2rem', textAlign: 'left'}}></div>
      <h2 style={{textAlign: "center"}}> Our Address</h2>
     <h3> <FaAddressCard/><p>205-50 Lonsdale Ave, Office #2078</p></h3>
      <h3><p>North Vancouver, BC, V7M 2E6, Canada</p></h3>
     <h3> <FaPhone /> <p>Phone: +1 (778) 907-5100</p></h3>
     <h3><FaEnvelope />   <p>Email: info@closet-ar.com</p></h3>
      </div>
      
      <div style={{ flex: 1 }}>

      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" style={{margin: "right"}}>
        {/* The hidden input named 'form-name' is necessary for Netlify forms to work correctly */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <label> Your Name </label>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required /><br/><br/>
        <label> Your Email </label>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required /><br/><br/>
        <label> Your Message </label>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea><br/><br/>
        <button type="submit">Send Message</button>
      </form>
    </div>
      </div>
    </div>
  
  );
}

export default ContactUs;
