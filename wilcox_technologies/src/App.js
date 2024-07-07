// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalTransformation from './components/DigitalTransformation';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import SeoDataAnalytics from './components/SeoDataAnalytics';
import './App.css';
import './reset.css';
import Blog from './components/Blog';

function App() {
    const webSales = 1200;
  const socialMediaSales = 800;
  const walkinSales = 600;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        

          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/seo-data-analytics" element={<SeoDataAnalytics />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
