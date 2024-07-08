import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileSignature, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
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
      <h2 className='black'>How Is This Different</h2>
      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faSearch} size="3x" className="icon" />
          <p>First, we find you and identify any surplus funds you may be entitled to.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faFileSignature} size="3x" className="icon" />
          <p>Next, you sign the necessary paperwork to authorize us to claim the funds on your behalf.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" className="icon" />
          <p>Finally, within 3-4 months, you receive a check in the mail for the recovered funds.</p>
        </div>
      </div>
    </section>
  );
};

export default HowIsThisDifferent;
