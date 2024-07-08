import React, { useState, useEffect } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import artboard from './Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const startTimer = () => {
    if (!timerStarted) {
      setTimerStarted(true);
      setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox' });
        }
      }, 300000); // 300000 milliseconds = 5 minutes
    }
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox/30min' });
    }
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
        <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <Link to="/" className={`logo ${isOpen ? 'open' : ''}`}>
          <img className="tt" src={artboard} alt="Your Vision Studios Logo" />
        </Link>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox/30min' });
                }
                return false;
              }}
              className="calendly-link"
            >
              Book
            </a>
          </li>
        </ul>
        <button
          onClick={openCalendly}
          className={`start-button ${isOpen ? 'open' : ''}`}
        >
          Start
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
