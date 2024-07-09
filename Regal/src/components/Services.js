import React from 'react';
import './css/Services.css';
import assetRecoveryImage from './Images/groupp.jpg';

const Services = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/caturaburnett/30min' });
    }
  };

  return (
    <div className="services">
      <div className="services-image-container">
        <img src={assetRecoveryImage} alt="Asset Recovery" />
      </div>
      <div className="services-content-container">
        <h1 className="services-title">Asset Recovery Services</h1>
        <p className="services-intro">Helping You Recover What Is Rightfully Yours</p>
        <p className="services-description">
          Our Asset Recovery services are designed to assist individuals in reclaiming funds from foreclosed properties and unclaimed assets. We utilize a streamlined process to ensure that you get back what you deserve without any hassle.
        </p>
        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Property Search and Identification</h3>
            <p>We conduct comprehensive searches to identify foreclosed properties with potential unclaimed assets, helping you recover funds you might not even know existed.</p>
          </div>
          <div className="service">
            <h3>Legal and Administrative Support</h3>
            <p>Our team provides expert legal assistance to navigate the paperwork and processes involved in asset recovery, ensuring a smooth and stress-free experience.</p>
          </div>
          <div className="service">
            <h3>Fund Recovery</h3>
            <p>Specializing in the recovery of surplus funds from foreclosure and tax sales, we ensure you receive the funds you are entitled to.</p>
          </div>
          <div className="service">
            <h3>Consultation and Advisory</h3>
            <p>We offer personalized consultations to understand your unique situation and provide tailored advice to maximize your recovery.</p>
          </div>
          <div className="service">
            <h3>Asset Verification</h3>
            <p>Our verification process ensures the legitimacy and accuracy of identified assets, giving you confidence in the recovery process.</p>
          </div>
          <div className="service">
            <h3>Negotiation and Mediation</h3>
            <p>We negotiate with all parties involved to secure the best possible outcome, leveraging our expertise for your benefit.</p>
          </div>
          <div className="service">
            <h3>Claims Filing</h3>
            <p>Our team handles all the necessary paperwork and claims filing, streamlining the process and saving you time and hassle.</p>
          </div>
          <div className="service">
            <h3>Ongoing Support and Updates</h3>
            <p>We keep you informed throughout the recovery process, providing regular updates and continuous support.</p>
          </div>
          <div className="service">
            <h3>Financial Planning and Advice</h3>
            <p>Post-recovery financial planning services to help you manage your recovered funds wisely and secure your financial future.</p>
          </div>
          <div className="service">
            <h3>Educational Resources</h3>
            <p>Access to resources and workshops on asset management and financial literacy to empower you with knowledge and skills.</p>
          </div>
        </section>
        <div className="services-why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Experienced Team:</strong> Our team of experts has extensive experience in asset recovery and legal support.</li>
            <li><strong>Customized Solutions:</strong> We offer personalized services tailored to your specific needs.</li>
            <li><strong>Proven Success:</strong> Our data-driven approach ensures successful recovery of assets.</li>
            <li><strong>Continuous Support:</strong> We provide ongoing support and updates throughout the recovery process.</li>
          </ul>
        </div>
        <div className="services-cta">
          <h2>Get Started Today</h2>
          <p>Recover your lost assets with our expert services. Contact us to learn more about how we can help you.</p>
          <button onClick={openCalendly} className="services-btn-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
