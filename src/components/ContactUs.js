import React from 'react';
import { FaEnvelope, FaPhone, FaAddressCard } from 'react-icons/fa';

function ContactUs() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, like sending an email
  };

  return (
    <div id="contact-us" className="text-white p-4" style={{fontSize: "20px"}}>
      <h2 style={{textAlign: "center"}}>Contact Us</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.2rem' }}>
          <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.2rem', textAlign: 'left' }}></div>
      <h2 style={{textAlign: "center"}}> Our Address</h2>
      <FaAddressCard/><p>205-50 Lonsdale Ave, Office #2078</p>
      <p>North Vancouver, BC, V7M 2E6, Canada</p>
      <FaPhone /> <p>Phone: +1 (778) 907-5100</p>
      <FaEnvelope />   <p>Email: info@closet-ar.com</p>
      </div>
      
      <div style={{ flex: 1 }}>

      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} style={{margin: "right"}}>
       <label> Your Name    </label> <input type="text" name="Your Name" placeholder="Your Name" required /><br/> <br />
       <label> Your Email   </label>  <input type="email" name="Your Email" placeholder="Your Email" required /><br/><br />
       <label> Your Message </label> <textarea placeholder="Your Message" name="Your Message" required></textarea><br /><br />
        <button type="submit">Send Message</button> 
      </form>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
