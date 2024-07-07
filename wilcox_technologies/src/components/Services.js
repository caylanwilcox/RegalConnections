import React from 'react';
import './css/Services.css';
import digitalTransformationImage from './Images/digital-transformation.jpg';
import { Link } from 'react-router-dom';
import socialMediaMarketingImage from './Images/social-media-marketing.jpg';
import seoDataAnalyticsImage from './Images/seo-data-analytics.jpg';
import PricingTable from './PricingTable.js';

const Services = () => {
  return (
    <div className="services-container">
      <div className='scenes'>
      <h1>Behind The Scenes Working For You</h1>
      </div>
      <div className="services-grid">
        <div className="service-item">
          <img src={digitalTransformationImage} alt="Digital Transformation" />
          <h3>Digital Transformation</h3>
          <p>Transform your business with digital solutions that drive growth and efficiency.</p>
          <Link to="/digital-transformation" className="btn">Learn More</Link>
        </div>
        <div className="service-item">
          <img src={socialMediaMarketingImage} alt="Social Media and Influencer Marketing" />
          <h3>Social Media and Influencer Marketing</h3>
          <p>Grow your online presence and engage with your audience effectively.</p>
          <Link to="/social-media-marketing" className="btn">Learn More</Link>
        </div>
        <div className="service-item">
          <img src={seoDataAnalyticsImage} alt="SEO and Data Analytics" />
          <h3>SEO and Data Analytics</h3>
          <p>Boost your search engine ranking and gain insights from data.</p>
          <Link to="/seo-data-analytics" className="btn">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
