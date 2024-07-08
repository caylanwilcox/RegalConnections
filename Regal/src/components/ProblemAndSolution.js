import React from 'react';
import './css/ProblemAndSolution.css';
import problemImage from './Images/sad.jpg';
import law from './Images/law.jpg';
import stack from './Images/stack.jpg';
import mail from './Images/mail.jpg';


const ProblemAndSolution = () => {
  return (
    <section className="problem-and-solution">
      <div id="problem-section" className="problem whitebg section">
        <div className="problem-image">
          <img src={problemImage} alt="Problem" />
        </div>
        <div className="problem-text">
          <h2>Here's The Problem</h2>
          <p>Many individuals who have lost their homes to foreclosure are unaware of funds they might still be entitled to. Navigating the legal and bureaucratic process to reclaim these funds can be overwhelming and confusing.</p>
          <p>The problem is – most people don't have the knowledge or resources to effectively recover their lost assets on their own.</p>
        </div>
      </div>

      <div id="identify-section" className="solution section shaded">
        <div className="solution-text">
          <h2>1. Identify</h2>
          <p>We start by identifying any potential funds from foreclosed properties that you might be entitled to. Our expert team combs through records to find any overlooked assets.</p>
        </div>
        <div className="solution-image">
          <img src={stack} alt="Identify" />
        </div>
      </div>
       
      <div id="contact-section" className="solution section">
        <div className="solution-image">
          <img src={law} alt="Contact" />
        </div>
        <div className="solution-text">
          <h2>2. Contact</h2>
          <p>Next, we handle all communications with relevant authorities and institutions to confirm and secure these funds. We manage the paperwork and legal processes on your behalf.</p>
        </div>
      </div>

      <div id="recover-section" className="solution section shaded">
        <div className="solution-text">
          <h2>3. Recover</h2>
          <p>Finally, we ensure that you receive the recovered funds as quickly as possible. Our team will keep you informed throughout the process and make sure that you get the money you deserve with minimal hassle.</p>
        </div>
        <div className="solution-image">
          <img src={mail} alt="Recover" />
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
