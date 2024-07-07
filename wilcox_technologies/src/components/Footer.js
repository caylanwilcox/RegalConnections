import { FaFacebook,  FaInstagram, FaLinkedin } from 'react-icons/fa';

import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-column">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: ContactUS@YourVisionStudios.com</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="business-hours">
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Vision Studios. All Rights Reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;

      {/* 
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
      </div>
*/}