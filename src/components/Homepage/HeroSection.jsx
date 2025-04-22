import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Keep Your Learning On Track</h1>
        <p className="tagline">
          "Revolutionizing learning with the power of voice and AI" is a strong and concise branding line that
          communicates innovation and the platform's core technology
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="hero-features">
        <div className="feature-card">
          <h3>Quiz Generation</h3>
          <p>You can Practice your skills using best feature of Quiz generation.</p>
        </div>
        <div className="feature-card">
          <h3>Notes Summarization</h3>
          <p>Every Lecture Should be summarized for better learning.</p>
        </div>
        <div className="feature-card">
          <h3>Record Lecture</h3>
          <p>Capture your lectures for future reference.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;