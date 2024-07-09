import React from 'react';
import profileImage from './Images/ProfileImage.png'; // Replace with your actual image path
import './css/WhoAmI.css';

const WhoAmI = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/caturaburnett/30min', '_blank');
  };

  return (
    <div className="who-am-i">
      <div className="who-am-i-content">
        <div className="who-am-i-image">
          <img src={profileImage} alt="Caylan Wilcox" />
        </div>
        <div className="who-am-i-text">
          <h2>About Our Founder
          </h2>
          <p className='preach'>
            My name is Catura Burnett, and I founded Regal Connections LLC with a singular purpose: to support homeowners who have recently lost their homes in reclaiming what rightfully belongs to them. In times of distress, I understand the overwhelming emotions and uncertainties that come with losing a home. That’s why I’ve dedicated my expertise and resources to help you navigate through this challenging period.
            <br /> <br />
            As someone deeply committed to justice and financial recovery, I know how critical it is to receive timely and effective assistance. You shouldn’t have to shoulder the burden of complex legalities or bureaucratic red tape alone. My mission is to handle these intricacies for you, ensuring that you can recover your finances and regain stability without additional stress.
            <br /> <br />
            You deserve a partner who not only understands the legal landscape but also cares about your personal journey. I am here to provide that unwavering support and expertise. Trust in my commitment to deliver a pain-free process, culminating in a check that helps you move forward on the path to financial recovery.
          </p>
          
          <div className='Decision-Time'>
            <h2>Decision Time</h2>
            <p>
              You've learned about how our system can help you reclaim your lost assets and regain your financial stability.
            </p>
            <p>
              Now, it makes sense how you can trust a dedicated team like ours to help you through this challenging period.
            </p>
            <p>Now it’s time for a decision – you have three options:</p>
            <ul>
              <li>Do absolutely nothing and stay exactly where you are right now</li>
              <li>Do it yourself – which you might have already tried with sub-par results</li>
              <li>Let us do the heavy lifting for you</li>
            </ul>
            <p>
              If you’re ready to take action and reclaim what’s rightfully yours, then it’s as easy as booking a call below.
            </p>
            <div className='butn-container'>
              <button onClick={openCalendly} className="book-call-button">
                Let's Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
