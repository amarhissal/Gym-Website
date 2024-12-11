import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="contact-us">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out to us today!</p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Our Location</h2>
        <p>123 Fitness Street, Workout City, GymState 56789</p>
        <h3>Phone</h3>
        <p>123456789</p>
        <h3>Email</h3>
        <p>contact@yourfitness.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
