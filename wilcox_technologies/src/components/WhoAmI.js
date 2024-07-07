// src/components/WhoAmI.js

import React from 'react';
import profileImage from './Images/footI.png'; // Replace with your actual image path
import './css/WhoAmI.css';

const WhoAmI = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/caylanwilcox/30min', '_blank');
  };

  return (
    <div className="who-am-i">
      <div className="who-am-i-content">
        <div className="who-am-i-text">
          <h2>Who Am I?</h2>
          <div className="who-am-i-image">
            <img src={profileImage} alt="Caylan Wilcox" />
          </div>
          <p className='preach'>
            My name is Caylan Wilcox, and I founded Your Vision Studios specifically to help business professionals land local clients without feeling like they're gambling thier money with garden-variety web agencies.
            <br/>   <br/>         As a Business owner myself, I know that it is important to get fast results. I also know that you dont have the time to worry about figuring out what to say on your website, what to share on social media, and how to leverage all the latest online marketing trends. So, we take care of everything for you.

          </p>
         
          <div className='Decision-Time'>
          <h2>Decision Time</h2>
          <p>
            You've learned about how our system can help your business thrive by leveraging data-driven insights and powerful web applications.
          </p>
          <p>
            Now, it makes sense how local businesses like yours can add substantial yearly revenue by using our system.
          </p>
          <p>Now it’s time for a decision – you have three options:</p>
          <ul>
            <li>Do absolutely nothing and stay exactly where you are right now</li>
            <li>Do it yourself – which you might have already tried with sub-par results</li>
            <li>Let us do the heavy lifting for you</li>
          </ul>
          <p>
            If you’re ready to take action and transform your business, then it’s as easy as booking a call below.
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
