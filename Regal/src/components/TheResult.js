import React from 'react';
import './css/TheResult.css';
import resultImage from './Images/check.jpg';

const TheResult = () => {
  return (
    <section className="the-result section">
      <div className="result-text">
        <h2>The Result</h2>
        <p>Receive a pain-free check in the mail, helping you recover financially from the loss of your home.</p>
        <p>Our service ensures that the funds you are entitled to are reclaimed efficiently and securely.</p>
        <div className="highlight">
          <p>Through our streamlined process, we take care of all the heavy lifting, so you can focus on rebuilding your life. Our dedicated team works tirelessly to recover your assets, ensuring you get the financial relief you deserve.</p>
        </div>
      </div>
      <div className="result-image">
        <img src={resultImage} alt="The Result" />
      </div>
    </section>
  );
};

export default TheResult;
