import React, { useState } from 'react';
import './css/LocalSearches.css';
import mapIcon from './Images/stock-photo-man-using-virtual-touchscreen-sees-inscription-local-seo-local-search-marketing-e-commerce-2310954637.jpg'; // Replace with your actual image path
import LocalSearchesCharts from './LocalSearchesCharts';

const LocalSearches = () => {
  const [showCitations, setShowCitations] = useState(false);

  const toggleCitations = () => {
    setShowCitations(!showCitations);
  };

  return (
    <section className="local-searches section">
      <div className="image-content">
        <img src={mapIcon} alt="Local Search Icon" />
      </div>
      <div className="info-icon" onClick={toggleCitations}>
        {showCitations ? '×' : 'i'}
      </div>
      <div className="text-content">
        <h2>Essential Insights on Local Searches</h2>
        <p>“Near me” searches have <b>increased 900%</b> in the last two years.<sup>1</sup> Here are some other stats you should know.</p>
        <ul>
          <li><strong>46%</strong> of all searches on Google are now <strong>local</strong>.<sup>2</sup></li>
          <li><strong>97%</strong> of Google’s users have searched for <strong>local</strong> businesses.<sup>3</sup></li>
          <li><strong>88%</strong> of people who do a <strong>local</strong> search call the business within one day.<sup>4</sup></li>
          <li><strong>86%</strong> of Google Maps customers are looking for <strong>local</strong> businesses.<sup>5</sup></li>
          <li>Mobile devices influence more than <strong>$1.4 trillion</strong> in <strong>local</strong> sales.<sup>6</sup></li>
        </ul>
        <p><b>We’ll get you a bigger piece of this pie.</b></p>
      </div>

      {showCitations && (
        <div className="citations-overlay">
          <div className="citations-content">
            <span className="close-button" onClick={toggleCitations}>&times;</span>
            <h3>Citations</h3>
            <p><sup>1</sup> "Google Search Statistics." Internet Live Stats, OneSec Projects, www.internetlivestats.com/google-search-statistics/. Accessed 3 July 2024.</p>
            <p><sup>2</sup> "The Importance of Local SEO." MOZ, Moz, Inc., www.moz.com/learn/seo/local. Accessed 3 July 2024.</p>
            <p><sup>3</sup> "Google My Business Insights." Google, Google, www.google.com/business/. Accessed 3 July 2024.</p>
            <p><sup>4</sup> "Local Search Consumer Insights." BrightLocal, BrightLocal Ltd., www.brightlocal.com/research/local-consumer-review-survey/. Accessed 3 July 2024.</p>
            <p><sup>5</sup> "Google Maps Statistics." Expanded Ramblings, DMR, www.dmr.com/statistics-about-google-maps/. Accessed 3 July 2024.</p>
            <p><sup>6</sup> "Mobile Search Statistics." Statista, Statista Inc., www.statista.com/statistics/273957/mobile-search-ads-revenue-in-the-united-states/. Accessed 3 July 2024.</p>
          </div>
        </div>
      )}

     
    </section>
  );
};

export default LocalSearches;
