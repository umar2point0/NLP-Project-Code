import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Get in touch</h3>
        <p>Directly touch with team management</p>
      </div>
      <div className="footer-section">
        <h3>Company Info</h3>
        <ul>
          <li>About Us</li>
          <li>Carrier</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Features</h3>
        <ul>
          <li>Quiz generation</li>
          <li>Records</li>
          <li>Summarized Notes</li>
          <li>Recorded Lectures</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;