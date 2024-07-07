import React from 'react';
import './css/TheResult.css';
import resultImage from './Images/book.jpg';

const TheResult = () => {
  return (
    <section className="the-result section">
      <div className="result-text">
        <h2>The Result</h2>
        <p>Your home service business books more calls, more estimates, and more clients.</p>
        <p>Your only job is to provide excellent service – we take care of the rest.</p>
        <div className="highlight">
          <p>Creating visibility, building authority, and automating the booking process is the key to adding 6-figures of additional yearly revenue – and it’s only attainable through our V.A.O. System™.</p>
        </div>
      </div>
      <div className="result-image">
        <img src={resultImage} alt="The Result" />
      </div>
    </section>
  );
};

export default TheResult;
