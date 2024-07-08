import React from 'react';
import './css/DigitalTransformation.css';
import digitalTransformationImage from './Images/digital-transformation.jpg';

const DigitalTransformation = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox/30min' });
    }
  };

  return (
    <div className="digital-transformation">
      <div className="digital-transformation-image-container">
        <img src={digitalTransformationImage} alt="Digital Transformation" />
      </div>
      <div className="digital-transformation-content-container">
        <h1 className="digital-transformation-title">Digital Transformation</h1>
        <p className="digital-transformation-intro">
          Transform Your Business with Digital Solutions that Drive Growth and Efficiency
        </p>
        <p className="digital-transformation-description">
          Our Digital Transformation service is designed to elevate your business by leveraging cutting-edge digital solutions that enhance efficiency and drive growth. We focus on creating a seamless and engaging digital presence that not only attracts visitors but converts them into loyal customers.
        </p>
        <div className="digital-transformation-process">
          <h2 className="digital-transformation-subtitle">Our Process</h2>
          <div className="digital-transformation-step">
            <h3>1. Comprehensive Digital Audit</h3>
            <ul>
              <li>Website Analysis: We conduct a thorough analysis of your current website to identify strengths, weaknesses, and opportunities for improvement.</li>
              <li>User Experience (UX) Evaluation: Assessing the user journey to ensure a smooth and intuitive navigation experience.</li>
              <li>Performance Metrics: Analyzing site speed, mobile responsiveness, and overall performance to enhance user satisfaction.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>2. Strategic Planning</h3>
            <ul>
              <li>Goal Setting: Collaborating with you to define clear objectives and key performance indicators (KPIs) for your digital transformation.</li>
              <li>Target Audience Analysis: Understanding your audience's preferences, behaviors, and needs to tailor the digital strategy accordingly.</li>
              <li>Competitive Benchmarking: Evaluating competitors to identify market trends and opportunities for differentiation.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>3. Website Redesign and Development</h3>
            <ul>
              <li>Modern Design: Creating a visually appealing, contemporary design that aligns with your brand identity.</li>
              <li>Responsive Layout: Ensuring your website is fully responsive and optimized for all devices, including desktops, tablets, and smartphones.</li>
              <li>User-Centric Design: Focusing on user experience to create intuitive navigation, clear calls-to-action, and engaging content.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>4. Conversion Rate Optimization (CRO)</h3>
            <ul>
              <li>Landing Page Optimization: Designing high-converting landing pages that capture leads and drive sales.</li>
              <li>A/B Testing: Implementing A/B testing to determine the most effective design elements, copy, and calls-to-action.</li>
              <li>Heatmap and Analytics Integration: Using heatmaps to visualize user interactions and identify areas for improvement. Integrating advanced analytics to track user behavior and optimize conversion rates.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>5. Social Media Traffic Analysis</h3>
            <ul>
              <li>Traffic Source Analysis: Understanding the flow of traffic from various social media platforms to your website.</li>
              <li>Engagement Metrics: Measuring engagement levels from social media referrals to identify high-performing content and strategies.</li>
              <li>Conversion Tracking: Tracking conversions from social media campaigns to optimize efforts and maximize ROI.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>6. Content Strategy</h3>
            <ul>
              <li>Compelling Copywriting: Crafting persuasive and SEO-friendly content that resonates with your audience.</li>
              <li>Visual Content: Integrating high-quality images, videos, and infographics to enhance engagement.</li>
              <li>Blog and Resources: Creating valuable content to educate and inform your audience, establishing your brand as an industry leader.</li>
            </ul>
          </div>
          <div className="digital-transformation-step">
            <h3>7. SEO and Data Analytics</h3>
            <ul>
              <li>SEO Optimization: Implementing on-page and off-page SEO strategies to improve search engine rankings and drive organic traffic.</li>
              <li>Data Analytics: Setting up comprehensive analytics to track performance and gain insights into user behavior.</li>
              <li>Ongoing Optimization: Continuously refining and optimizing your digital presence based on data insights and evolving market trends.</li>
            </ul>
          </div>
        </div>
        <div className="digital-transformation-why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Team:</strong> Our team of experienced digital strategists, designers, and developers are dedicated to delivering top-notch results.</li>
            <li><strong>Tailored Solutions:</strong> We provide customized digital solutions that align with your unique business goals and target audience.</li>
            <li><strong>Proven Results:</strong> Our approach is data-driven and results-oriented, ensuring you see tangible improvements in your digital performance.</li>
            <li><strong>Continuous Support:</strong> We offer ongoing support and maintenance to ensure your digital presence remains optimized and effective.</li>
          </ul>
        </div>
        <div className="digital-transformation-cta">
          <h2>Get Started Today</h2>
          <p>Transform your digital presence and take your business to new heights. Contact us to learn more about our Digital Transformation service and how we can help you achieve your goals.</p>
          <button onClick={openCalendly} className="digital-transformation-btn-learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;
