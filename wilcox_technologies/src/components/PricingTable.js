import React, { useState } from 'react';
import './css/PricingTable.css';

const PricingTable = () => {
  const [businessSize, setBusinessSize] = useState('small');

  const packages = [

    {
      name: 'Brand Visibility Package',
      smallPrice: '$1,500',
      mediumPrice: '$3000',
      largePrice: 'Inquiry',
      features: [
        'ProIntel Web Application',
        'Domain and Hosting Assistance',
        'Real-Time Analytics',
        'Social Media Integration',
        'HTML SEO Optimization',
        'On-Site and Online First-Impression Audit',
        'ProIntel SEO Optimization',
        'Priority Email Support',
      ],
    },
    {
      name: 'Advanced Package',
      smallPrice: '$3,000',
      mediumPrice: '$6000',
      largePrice: 'Inquiry',
      features: [
        'ProIntel Web Application',
        'Domain and Hosting Assistance',
        'Real-Time Analytics',
        'Social Media Integration',
        'Extensive SEO Services',
        'ProIntel SEO Optimization',
        'On-Site and Online First-Impression Audit',
        'HTML SEO Optimization',
        'ProIntel Mobile Application',
        'Advanced Analytics',
        'Heatmap Integration',
        'Email & Phone Support',
      ],
    },
    {
      name: 'Premium Package',
      smallPrice: '$5,000',
      mediumPrice: '$10000',
      largePrice: 'Inquiry',
      features: [
        'Data Analyst Insight',
        'On-Site first-impression Audit',
        'ProIntel Web Application',
        'Domain and Hosting Assistance',
        'Real-Time Analytics',
        'Social Media Integration',
        'Extensive SEO Services',
        'On-Site and Online First-Impression Audit',
        'HTML SEO Optimization',
        'ProIntel Mobile Application',
        'Advanced Analytics',
        'Heatmap Integration',
        'Data-Driven Optimization',
        'Comprehensive SEO Services',
        'ProIntel Marketing Strategy',
        'ProIntel SEO Optimization',
        'Monthly Performance Review',
        'Full Delivery Platform Integration',
        '24/7 Support',
      ],
    },
    {
      name: 'Ultimate Package',
      smallPrice: '$8,000',
      mediumPrice: '$16000',
      largePrice: 'Inquiry',
      features: [
        'ProIntel Web Application',
        'Extensive SEO Services',
        'Domain and Hosting Assistance',
        'Real-Time Analytics',
        'Social Media Integration',
        'HTML SEO Optimization',
        'ProIntel SEO Optimization',
        'On-Site and Online First-Impression Audit',
        'ProIntel Mobile Application',
        'Data Analyst Insight',
        'Heatmap Integration',
        'Data-Driven Optimization',
        'Comprehensive SEO Services',
        'ProIntel Marketing Strategy',
        'Monthly Performance Review',
        'Enhanced Marketing Campaigns',
        'Conversion Rate Optimization',
        'Real-Time Data Analysis',
        'Dedicated Account Manager',
        'Bi-Weekly Performance Review',
        '24/7 Dedicated Support',
      ],
    },
  ];

  const getPrice = (pkg) => {
    switch (businessSize) {
      case 'small':
        return pkg.smallPrice;
      case 'medium':
        return pkg.mediumPrice;
      case 'large':
        return pkg.largePrice;
      default:
        return pkg.smallPrice;
    }
  };

  return (
    <div className="pricing-table">
      <div className="business-size-dropdown">
        <label htmlFor="businessSize">Select Business Size: </label>
        <select
          id="businessSize"
          value={businessSize}
          onChange={(e) => setBusinessSize(e.target.value)}
        >
          <option value="small">Small Business</option>
          <option value="medium">Medium Business</option>
          <option value="large">Large Business</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Features</th>
            {packages.map((pkg, index) => (
              <th key={index}>
                {pkg.name} ({getPrice(pkg)})
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            'ProIntel Web Application',
            'Domain and Hosting Assistance',
            'Real-Time Analytics',
            'Social Media Integration',
            'HTML SEO Optimization',
            'On-Site and Online First-Impression Audit',
            'ProIntel SEO Optimization',
            'ProIntel Mobile Application',
            'Data Analyst Insight',
            'Heatmap Integration',
            'Data-Driven Optimization',
            'Extensive SEO Services',
            'ProIntel Marketing Strategy',
            'Monthly Performance Review',
            'Enhanced Marketing Campaigns',
            'Conversion Rate Optimization',
            'Real-Time Data Analysis',
            'Bi-Weekly Performance Review',
            'Priority Email Support',
            '24/7 Support',
          ].map((feature, rowIndex) => (
            <tr key={rowIndex}>
              <td>{feature}</td>
              {packages.map((pkg, colIndex) => (
                <td key={colIndex}>{pkg.features.includes(feature) ? '✔️' : ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
