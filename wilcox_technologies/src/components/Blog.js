// Blog.js
import React from 'react';
import './css/Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>All Inspirational Stories Are Our Blog</h1>
      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">Adventure</button>
        <button className="filter-button">Innovation</button>
        <button className="filter-button">Humanity</button>
      </div>
      <div className="blog-grid">
        <div className="blog-card">
          <a href="https://online.hbs.edu/blog/post/digital-marketing-skills" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image1.jpg" alt="7 DIGITAL MARKETING SKILLS YOU NEED TO CREATE AN EFFECTIVE MARKETING STRATEGY" />
            <h3>7 DIGITAL MARKETING SKILLS YOU NEED TO CREATE AN EFFECTIVE MARKETING STRATEGY</h3>
            <p>Kate Gibson</p>
            <span className="tag">Humanity</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://contentmarketinginstitute.com/articles/website-data-buyers-journey" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image2.jpg" alt="How To Use Your Website Data To See If Your Buyer’s Journey Really Works" />
            <h3>How To Use Your Website Data To See If Your Buyer’s Journey Really Works</h3>
            <p>Wade Warren</p>
            <span className="tag">Innovation</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://blog.hubspot.com/marketing/what-is-digital-marketing" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image3.jpg" alt="Online Marketing: The Who, What, Why, & How of Digital Marketing" />
            <h3>Online Marketing: The Who, What, Why, & How of Digital Marketing</h3>
            <p>Marvin McKinney</p>
            <span className="tag">Adventure</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://www.linkedin.com/pulse/5-reasons-your-business-needs-digital-marketing-services-rawlani/" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image4.jpg" alt="5 Reasons Your Business Needs Digital Marketing Services Today" />
            <h3>5 Reasons Your Business Needs Digital Marketing Services Today</h3>
            <p>Jane Cooper</p>
            <span className="tag">Humanity</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://contentmarketinginstitute.com/articles/website-content-optimization-mistakes/" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image5.jpg" alt="6 Things You’re Doing Wrong With Website Content Optimization" />
            <h3>6 Things You’re Doing Wrong With Website Content Optimization</h3>
            <p>Marvin McKinney</p>
            <span className="tag">Humanity</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://www.getfundid.com/sales-marketing/why-is-digital-marketing-important" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image6.jpg" alt="Why is Digital Marketing Important for Small Businesses?" />
            <h3>Why is Digital Marketing Important for Small Businesses?</h3>
            <p>Wade Warren</p>
            <span className="tag">Adventure</span>
          </a>
        </div>
        <div className="blog-card">
          <a href="https://www.springboard.com/blog/business-and-marketing/digital-marketing-importance/" target="_blank" rel="noopener noreferrer">
            <img src="https://example.com/image7.jpg" alt="Why Is Digital Marketing So Important to Businesses?" />
            <h3>Why Is Digital Marketing So Important to Businesses?</h3>
            <p>Jane Cooper</p>
            <span className="tag">Adventure</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
