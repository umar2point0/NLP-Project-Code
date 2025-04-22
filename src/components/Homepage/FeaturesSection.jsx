import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Features for You</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Key Features</h3>
          <p>Learning new skills is a great way to grow personally and professionally</p>
        </div>
        <div className="feature-number">1</div>
        <div className="feature-number">2</div>
        <div className="feature-number">3</div>
        <div className="feature-number">4</div>
      </div>
    </section>
  );
};

export default FeaturesSection;