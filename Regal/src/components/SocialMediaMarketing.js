import React from 'react';
import './css/SocialMediaMarketing.css'; // Use the same CSS file
import socialMediaMarketingImage from './Images/social-media-marketing.jpg';

const SocialMediaMarketing = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/caylanwilcox/30min' });
    }
  };
  return (
    <div className="social-media-marketing">
      <div className="social-media-marketing-image-container">
        <img src={socialMediaMarketingImage} alt="Social Media Marketing" />
      </div>
      <div className="social-media-marketing-content-container">
        <h1 className="social-media-marketing-title">Social Media Marketing</h1>
        <p className="social-media-marketing-intro">Boost Your Brand | Engage Your Audience</p>
        <p className="social-media-marketing-description">
          Our social media marketing strategies are tailored to increase your brand's visibility and engagement across various platforms. We focus on creating engaging content and campaigns that drive results.
        </p>
        <div className="social-media-marketing-process">
          <h2 className="social-media-marketing-subtitle">Our Process</h2>
          <div className="social-media-marketing-step">
            <h3>1. Comprehensive Social Media Audit</h3>
            <ul>
              <li>Platform Analysis: We evaluate your current social media presence to identify strengths, weaknesses, and opportunities for improvement.</li>
              <li>Content Analysis: Assessing the performance of your current content to understand what resonates with your audience.</li>
              <li>Engagement Metrics: Analyzing engagement metrics to enhance audience interaction and satisfaction.</li>
            </ul>
          </div>
          <div className="social-media-marketing-step">
            <h3>2. Strategic Planning</h3>
            <ul>
              <li>Goal Setting: Collaborating with you to define clear objectives and key performance indicators (KPIs) for your social media strategy.</li>
              <li>Target Audience Analysis: Understanding your audience's preferences, behaviors, and needs to tailor the social media strategy accordingly.</li>
              <li>Competitive Benchmarking: Evaluating competitors to identify market trends and opportunities for differentiation.</li>
            </ul>
          </div>
          <div className="social-media-marketing-step">
            <h3>3. Content Creation and Management</h3>
            <ul>
              <li>Engaging Content: Creating visually appealing and engaging content that aligns with your brand identity.</li>
              <li>Scheduling: Ensuring consistent posting schedules across all platforms.</li>
              <li>User Interaction: Focusing on engaging with your audience through comments, messages, and other interactions.</li>
            </ul>
          </div>
          <div className="social-media-marketing-step">
            <h3>4. Campaign Management</h3>
            <ul>
              <li>Campaign Planning: Designing and implementing social media campaigns to achieve specific business goals.</li>
              <li>A/B Testing: Implementing A/B testing to determine the most effective content and strategies.</li>
              <li>Performance Tracking: Monitoring campaign performance and making data-driven adjustments to optimize results.</li>
            </ul>
          </div>
          <div className="social-media-marketing-step">
            <h3>5. Influencer Partnerships</h3>
            <ul>
              <li>Identifying Influencers: Finding influencers who align with your brand and can reach your target audience.</li>
              <li>Collaboration: Collaborating with influencers to create authentic and engaging content.</li>
              <li>Performance Analysis: Tracking the impact of influencer partnerships and optimizing strategies based on performance data.</li>
            </ul>
          </div>
          <div className="social-media-marketing-step">
            <h3>6. Analytics and Reporting</h3>
            <ul>
              <li>Performance Metrics: Setting up comprehensive analytics to track the performance of your social media efforts.</li>
              <li>Regular Reporting: Providing regular reports with actionable insights to improve your social media strategy.</li>
              <li>Ongoing Optimization: Continuously refining and optimizing your social media presence based on data insights and evolving market trends.</li>
            </ul>
          </div>
        </div>
        <div className="social-media-marketing-why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Team:</strong> Our team of experienced social media strategists, content creators, and analysts are dedicated to delivering top-notch results.</li>
            <li><strong>Tailored Solutions:</strong> We provide customized social media solutions that align with your unique business goals and target audience.</li>
            <li><strong>Proven Results:</strong> Our approach is data-driven and results-oriented, ensuring you see tangible improvements in your social media performance.</li>
            <li><strong>Continuous Support:</strong> We offer ongoing support and maintenance to ensure your social media presence remains optimized and effective.</li>
          </ul>
        </div>
        <div className="social-media-marketing-cta">
          <h2>Get Started Today</h2>
          <p>Boost your brand's visibility and engagement with our expert social media marketing services. Contact us to learn more about how we can help you achieve your goals.</p>
          <button onClick={openCalendly} className="social-media-marketing-btn-learn-more">Learn More </button>
        </div>
      </div>

    </div>
  );
};

export default SocialMediaMarketing;
