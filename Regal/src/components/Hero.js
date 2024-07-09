import React, { useState, useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Hero.css';
import group from './Images/vault.png';
import logo from './Images/logo.png'; 
import HowIsThisDifferent from './HowIsThisDifferent';
import TheResult from './TheResult';
import ProblemAndSolution from './ProblemAndSolution';
import WhoAmI from './WhoAmI';
import foreclosure from './Images/foreclosure-listing-1-300x157.jpeg'
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
    window.open('https://calendly.com/caturaburnett/30min', '_blank');
  };

  const goToServices = () => {
    window.location.href = '/services';
  };

  return (
    <section className={`hero-container ${showRightSide ? '' : 'centered-container'}`}>
      <div className={`left-side ${showRightSide ? '' : 'centered'}`}>
        <div className='hero-wrap'>
        <div className="hero-section">
          <div className="hero-text ">
            <h1>Schedule A Meeting Today!</h1>
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
        </div>
        <div className="company-info">
          <HowIsThisDifferent />
          <TheResult />
          <ProblemAndSolution />
          <WhoAmI />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;