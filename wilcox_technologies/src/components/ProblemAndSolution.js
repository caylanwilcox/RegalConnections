import React from 'react';
import './css/ProblemAndSolution.css';
import problemImage from './Images/problem.jpg';
import visibilityImage from './Images/visibility.jpeg';
import authorityImage from './Images/reviews.jpg';
import onboardingImage from './Images/Scheduling-Automation.jpg';

const ProblemAndSolution = () => {
  return (
    <section className="problem-and-solution">
      <div id="problem-section" className="problem whitebg section">
        <div className="problem-image">
          <img src={problemImage} alt="Problem" />
        </div>
        <div className="problem-text">
          <h2>Here's The Problem</h2>
          <p>Many home service businesses feel invisible online. They have a website but it’s getting no traffic. They’ve tried a hodge podge of different marketing methods with disappointing results.</p>
          <p>The problem is – they don’t realize that <b>it only takes three elements</b> to start showing up online and getting more booked jobs.</p>
        </div>
      </div>

      <div id="visibility-section" className="solution section shaded">
        <div className="solution-text">
          <h2>1. Visibility</h2>
          <p>Your business needs to show up where your customers are searching for your services. We focus on making you visible on Google, and converting your customers.</p>
          <p>We’ve developed both organic and paid methods to get your business visibility and get your phone ringing.</p>
        </div>
        <div className="solution-image">
          <img src={visibilityImage} alt="Visibility" />
        </div>
      </div>
      
      <div id="authority-section" className="solution section">
        <div className="solution-image">
          <img src={authorityImage} alt="Authority" />
        </div>
        <div className="solution-text">
          <h2>2. Authority</h2>
          <p>When customers find you, they need to trust that you can do the job. This means helping you build that trust and authority with reviews.</p>
          <p>Our platform helps you build your online reputation by getting your business consistent, high-quality reviews with no effort on your part.</p>
        </div>
      </div>

      <div id="onboarding-section" className="solution section shaded">
        <div className="solution-text">
          <h2>3. Onboarding</h2>
          <p>This key step is how you get paid. Our focus is on creating an automated booking system that makes it easy for customers to jump on your calendar.</p>
          <p>Because this onboarding calendar is available 24/7, it makes it easy for them to schedule with you, even when you’re not there.</p>
        </div>
        <div className="solution-image">
          <img src={onboardingImage} alt="Onboarding" />
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
