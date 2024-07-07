import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './css/HowIsThisDifferent.css';

const HowIsThisDifferent = () => {
  return (
    <section className="how-is-this-different">
      <h2>How Is This Different</h2>
      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="icon" />
          <p>We focus on building visibility so your local business is found where customers are searching – Google.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faThumbsUp} size="3x" className="icon" />
          <p>Next, we help you build authority by getting you consistent, high-quality reviews.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="icon" />
          <p>Getting customers booked is how you get paid – we automate this process to make it easy for you & them.</p>
        </div>
      </div>
    </section>
  );
};

export default HowIsThisDifferent;
