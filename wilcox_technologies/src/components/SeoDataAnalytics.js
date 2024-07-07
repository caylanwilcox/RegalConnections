import React from 'react';
import './css/SeoDataAnalytics.css';
import seoDataAnalyticsImage from './Images/seo-data-analytics.jpg';

const SeoDataAnalytics = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox/30min' });
    }
  };
  return (
    <div className="seo-data-analytics">
      <div className="seo-data-analytics-image-container">
        <img src={seoDataAnalyticsImage} alt="SEO and Data Analytics" />
      </div>
      <div className="seo-data-analytics-content-container">
        <h1 className="seo-data-analytics-title">SEO and Data Analytics</h1>
        <p className="seo-data-analytics-intro">Boost Your Search Engine Ranking and Gain Insights from Data</p>
        <p className="seo-data-analytics-description">
          Our SEO and Data Analytics services are designed to improve your search engine rankings and provide valuable insights into user behavior. We use advanced techniques to enhance your online presence and drive organic traffic to your website.
        </p>
        <div className="seo-data-analytics-process">
          <h2 className="seo-data-analytics-subtitle">Our Process</h2>
          <div className="seo-data-analytics-step">
            <h3>1. SEO Audit</h3>
            <ul>
              <li>Website Analysis: Conducting a thorough analysis of your current website to identify SEO strengths and weaknesses.</li>
              <li>Keyword Research: Identifying relevant keywords that can drive traffic to your site.</li>
              <li>Competitor Analysis: Evaluating your competitors to find opportunities for improvement.</li>
            </ul>
          </div>
          <div className="seo-data-analytics-step">
            <h3>2. On-Page SEO Optimization</h3>
            <ul>
              <li>Content Optimization: Enhancing the quality and relevance of your website content.</li>
              <li>Meta Tags and Descriptions: Optimizing meta tags and descriptions to improve click-through rates.</li>
              <li>Technical SEO: Ensuring your website is technically sound and optimized for search engines.</li>
            </ul>
          </div>
          <div className="seo-data-analytics-step">
            <h3>3. Off-Page SEO Strategies</h3>
            <ul>
              <li>Link Building: Acquiring high-quality backlinks to improve your site's authority.</li>
              <li>Social Media Integration: Leveraging social media platforms to boost your SEO efforts.</li>
              <li>Guest Posting: Contributing content to reputable websites to build your brand and gain backlinks.</li>
            </ul>
          </div>
          <div className="seo-data-analytics-step">
            <h3>4. Data Analytics</h3>
            <ul>
              <li>Performance Tracking: Monitoring the performance of your SEO efforts using advanced analytics tools.</li>
              <li>User Behavior Analysis: Understanding how users interact with your website to identify areas for improvement.</li>
              <li>Conversion Rate Optimization: Using data insights to optimize your website and increase conversion rates.</li>
            </ul>
          </div>
          <div className="seo-data-analytics-step">
            <h3>5. Reporting and Optimization</h3>
            <ul>
              <li>Regular Reporting: Providing detailed reports on your SEO performance and progress.</li>
              <li>Continuous Optimization: Making ongoing adjustments to your SEO strategy based on data insights.</li>
              <li>Goal Tracking: Ensuring your SEO efforts align with your business goals and objectives.</li>
            </ul>
          </div>
        </div>
        <div className="seo-data-analytics-why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Team:</strong> Our team of SEO specialists and data analysts are dedicated to delivering top-notch results.</li>
            <li><strong>Tailored Solutions:</strong> We provide customized SEO and data analytics solutions that align with your unique business goals.</li>
            <li><strong>Proven Results:</strong> Our data-driven approach ensures you see tangible improvements in your search engine rankings and website performance.</li>
            <li><strong>Continuous Support:</strong> We offer ongoing support and maintenance to ensure your SEO and data analytics efforts remain effective.</li>
          </ul>
        </div>
        <div className="seo-data-analytics-cta">
          <h2>Get Started Today</h2>
          <p>Boost your search engine rankings and gain valuable insights with our expert SEO and data analytics services. Contact us to learn more about how we can help you achieve your goals.</p>
          <button onClick={openCalendly} className="seo-data-analytics-btn-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SeoDataAnalytics;
