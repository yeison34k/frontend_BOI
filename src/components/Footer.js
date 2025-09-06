// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About NFC</h3>
            <p><strong>Built for tomorrow's business, designed for ease and today's compliance.</strong></p>
            <p>Your trusted partner in corporate compliance. From annual reports to formation documents, NFC simplifies the way businesses manage their filings with expert guidance and transparent pricing.</p>
            
            <div className="footer-features">
              <div className="footer-feature">Secure & Compliant</div>
              <div className="footer-feature">Expert Team</div>
              <div className="footer-feature">Fast Processing</div>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#file-now"><i className="fas fa-chevron-right"></i> Corporate Formation</a></li>
              <li><a href="#file-now"><i className="fas fa-chevron-right"></i> Corporate Renewal</a></li>
              <li><a href="#file-now"><i className="fas fa-chevron-right"></i> EIN Registration</a></li>
              <li><a href="#file-now"><i className="fas fa-chevron-right"></i> BOI Reports</a></li>
              <li><a href="#file-now"><i className="fas fa-chevron-right"></i> Registered Agent</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> info@nationalfilingcorp.com</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Business Ave, Suite 100</li>
              <li><i className="fas fa-city"></i> New York, NY 10001</li>
              <li><i className="fas fa-clock"></i> Mon-Fri 9:00AM-6:00PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 National Filing Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;