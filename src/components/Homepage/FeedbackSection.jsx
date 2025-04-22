import React from 'react';
import './FeedbackSection.css';

const FeedbackSection = () => {
  return (
    <section className="feedback">
      <h2>Your Feedback Helps Us to improve our product continuously</h2>
      <form className="feedback-form">
        <textarea placeholder="Your feedback..." rows="4"></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default FeedbackSection;