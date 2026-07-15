import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <h2 className="section-title text-gradient">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info glass-card">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>anantpal4120@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 9456956071</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Muzaffarnagar, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/anant-pal-6a855824b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
