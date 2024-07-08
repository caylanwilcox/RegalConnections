import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faThumbsUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './css/HowIsThisDifferent.css';

const HowIsThisDifferent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = sectionRef.current.querySelectorAll('.feature, h2');
    elements.forEach(el => observer.observe(el));

    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="how-is-this-different" ref={sectionRef}>
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
