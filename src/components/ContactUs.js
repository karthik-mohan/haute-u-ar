import React from 'react';

function ContactUs() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, like sending an email
  };

  return (
    <div id="contact-us" className="text-white p-4">
      <h2>Contact Us</h2>
      <p>123 Fashion Ave, New York, NY 10001</p>
      <p>Phone: (555) 123-4567</p>
      <p>Email: info@closet-ar.com</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
