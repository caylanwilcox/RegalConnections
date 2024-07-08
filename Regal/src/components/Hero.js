import React, { useState, useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Hero.css';
import group from './Images/family.jpg';
import logo from './Images/logo.png'; 
import HowIsThisDifferent from './HowIsThisDifferent';
import TheResult from './TheResult';
import ProblemAndSolution from './ProblemAndSolution';
import WhoAmI from './WhoAmI';

const Hero = () => {
  const [showRightSide, setShowRightSide] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showRightSide && rightSideRef.current) {
      rightSideRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showRightSide]);

  const toggleRightSide = () => {
    setShowRightSide(!showRightSide);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/caylanwilcox/30min', '_blank');
  };

  const goToServices = () => {
    window.location.href = '/services';
  };

  return (
    <section className={`hero-container ${showRightSide ? '' : 'centered-container'}`}>
      <div className={`left-side ${showRightSide ? '' : 'centered'}`}>
        <div className="hero-section">
          <div className="hero-text ">
            <h2><span className='gold'>Reclaim <br/></span> What's Rightfully Yours with <span className='purple'><br/>Regal Connections LLC</span></h2>
            {isMobile && (
              <img src={group} alt="Hero" />
            )}
            <p>From Lost to Found: <span className='purple'>Your Funds Restored</span></p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={openCalendly}>Get Started →</button>
              <button className="cta-button secondary" onClick={goToServices}>Our Services</button>
            </div>
          </div>
          {!isMobile && (
            <div className="hero-image">
              <img src={group} alt="Hero" />
            </div>
          )}
        </div>
        <div className="company-info">
          <HowIsThisDifferent />
          <TheResult />
          <ProblemAndSolution />
          <WhoAmI />
        </div>
      </div>
      {showRightSide && (
        <div className="right-side" ref={rightSideRef}>
          <div className="top-row">
            <img src={logo} alt="Logo" className="logo-img" />
            <h2>Essential Reads</h2>          
          </div>
          <div className="recent-newsletters">
            <div className="newsletter-box">
              <a href="https://blog.hubspot.com/marketing/what-is-digital-marketing" className="expandable-newsletter-box">
                <p>Online Marketing: The Who, What, Why, & How of Digital Marketing</p>
              </a>
              <a href="https://www.linkedin.com/pulse/5-reasons-your-business-needs-digital-marketing-services-rawlani/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
                <p>5 Reasons Your Business Needs Digital Marketing Services Today</p>
              </a>
              <a href="https://contentmarketinginstitute.com/articles/website-content-optimization-mistakes/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
                <p>6 Things You’re Doing Wrong With Website Content Optimization</p>
              </a>
              <a href="https://www.getfundid.com/sales-marketing/why-is-digital-marketing-important" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
                <p>Why is Digital Marketing Important for Small Businesses?</p>
              </a>
              <a href="https://www.springboard.com/blog/business-and-marketing/digital-marketing-importance/" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
                <p>Why Is Digital Marketing So Important to Businesses?</p>
              </a>
              <a href="https://online.hbs.edu/blog/post/digital-marketing-skills" target="_blank" rel="noopener noreferrer" className="expandable-newsletter-box">
                <p>7 DIGITAL MARKETING SKILLS YOU NEED TO CREATE AN EFFECTIVE MARKETING STRATEGY</p>
              </a>
              <a href="https://contentmarketinginstitute.com/articles/website-data-buyers-journey" className="expandable-newsletter-box">
                <p>How To Use Your Website Data To See If Your Buyer’s Journey Really Works</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;