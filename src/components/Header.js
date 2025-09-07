// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-img">
            <img 
              src="/" 
              alt="National Filing Corp Logo" 
              style={{ width: '50px', height: 'auto' }} 
            />
          </div>
          <div className="logo-text">
            <div className="logo-main">NATIONAL FILING CORP</div>
            <div className="logo-sub">Business Compliance Solutions</div>
          </div>
        </div>
        <button className="mobile-menu-btn" id="mobileMenuBtn">
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul id="navMenu">
            <li><a href="#file-now">File Now</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;