import React, { useEffect } from 'react';

const NationalFilingCorp = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    const handleMenuToggle = () => {
      navMenu.classList.toggle('show');
    };
    
    mobileMenuBtn.addEventListener('click', handleMenuToggle);
    
    // Smooth scrolling for anchor links
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        navMenu.classList.remove('show');
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });
    
    // Simple form validation
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
          alert('Thank you for your message! We will get back to you within 24 hours.');
          this.reset();
        } else {
          alert('Please fill in all required fields.');
        }
      });
    }
    
    // Cleanup
    return () => {
      mobileMenuBtn.removeEventListener('click', handleMenuToggle);
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
      if (form) {
        form.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="container header-container">
          <div className="logo">
            <div className="logo-img">NFC</div>
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Welcome to National Filing Corporation</h1>
          <p>Your trusted partner in corporate compliance. From annual reports to formation documents, NFC simplifies the way businesses manage their filings.</p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <i className="fas fa-check-circle"></i>
              <span>File with ease</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-check-circle"></i>
              <span>File in compliance</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-check-circle"></i>
              <span>File securely and efficiently</span>
            </div>
          </div>
          
          <p>Whether you're a startup or an established enterprise, we make staying compliant effortless.</p>
          <div className="slogan">Built for tomorrow's business, designed for ease and today's compliance.</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="file-now">
        <div className="container">
          <div className="section-title">
            <h2>File Now</h2>
            <p>Choose from our comprehensive suite of filing services to keep your business compliant and moving forward.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="service-content">
                <h3>Corporate Formation</h3>
                <p>Form your entity and get your business started today with our streamlined formation process.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <div className="service-content">
                <h3>Corporate Renewal</h3>
                <p>Stay compliant with your states regulatory requirements and avoid costly late fees.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-id-card"></i>
              </div>
              <div className="service-content">
                <h3>Employer ID Number (EIN)</h3>
                <p>Get your federal tax ID to open bank accounts, hire employees, and establish business credit.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="service-content">
                <h3>Beneficial Ownership Information (BOI) Report</h3>
                <p>Stay compliant with FinCEN regulations and avoid penalties with our expert filing service.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="service-content">
                <h3>Registered Agent Service</h3>
                <p>Ensure your business receives important legal and tax documents with our reliable agent service.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="service-content">
                <h3>Bylaws/Operating Agreement</h3>
                <p>Establish the rules and ownership structure of your company with our customized legal documents.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-trademark"></i>
              </div>
              <div className="service-content">
                <h3>Trademark Search & Registration</h3>
                <p>Protect your brand identity with comprehensive trademark search and registration services.</p>
                <a href="#" className="btn">FILE NOW</a>
              </div>
            </div>
          </div>
          
          <div className="help-section">
            <h3>Need help choosing the right service?</h3>
            <p>Our experts are here to guide you through the process and help you select the services that best fit your business needs.</p>
            <a href="#contact" className="btn">Contact Our Experts</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about filing with National Filing Corporation</p>
          </div>
          <div className="faq-grid">
            <div className="faq-column">
              <h3>Why File With Us?</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4><i className="fas fa-check-circle"></i> Expert Guidance</h4>
                  <p>Accurate and efficient handling of all details, from entity formation to BOI filings. Our experts ensure your filings are completed correctly the first time.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-check-circle"></i> All-In-One Solutions</h4>
                  <p>Comprehensive services for new businesses, renewals, and compliance. We're your single source for all business filing needs.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-check-circle"></i> Transparent Pricing</h4>
                  <p>Clear, upfront pricing with no hidden fees. Know exactly what you're paying for with our straightforward pricing structure.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-check-circle"></i> Time-Saving Convenience</h4>
                  <p>We manage paperwork, filing, and submissions for you. Focus on running your business while we handle the compliance details.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-check-circle"></i> Personalized Support</h4>
                  <p>Real human support and consultations for your unique business needs. Get answers from experts who understand your situation.</p>
                </div>
              </div>
              <p>Partner with us for a hassle-free, professional filing process that ensures your business remains compliant and focused on growth.</p>
            </div>
            <div className="faq-column">
              <h3>What Makes Us Different?</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4><i className="fas fa-star"></i> Human Touch, Not Just Software</h4>
                  <p>We combine technology with real human expertise, providing tailored advice and support that automated systems can't match.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-star"></i> All-Inclusive, Transparent Pricing</h4>
                  <p>Clear, upfront pricing covers everything you need without surprise fees or upsells. We believe in honest business practices.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-star"></i> Experienced Professionals</h4>
                  <p>Seasoned professionals ensure accuracy, compliance, and peace of mind. Our team averages over 10 years of experience.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-star"></i> Your Success Is Our Priority</h4>
                  <p>A client-first approach to help you save time, reduce stress, and grow your company. We measure our success by yours.</p>
                </div>
                <div className="faq-item">
                  <h4><i className="fas fa-star"></i> Comprehensive Business Solutions</h4>
                  <p>End-to-end services, from entity formation to BOI filings and annual renewals. We grow with your business needs.</p>
                </div>
              </div>
              <p><strong>Quick and Efficient - Your Success Is Our Priority</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Ready to get started? Have questions? Our expert team is here to help you navigate your business filing needs.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="required">Name</label>
                  <input type="text" id="name" placeholder="Your full name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="required">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="(555) 123-4567" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option>How can we help?</option>
                    <option>Corporate Formation</option>
                    <option>Corporate Renewal</option>
                    <option>EIN Registration</option>
                    <option>BOI Report</option>
                    <option>Registered Agent</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="required">Message</label>
                  <textarea id="message" placeholder="Tell us about your business needs..." required></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <h3>Why Choose National Filing Corporation?</h3>
                <p><i className="fas fa-check"></i> <strong>Expert Guidance:</strong> Professional support throughout the entire process</p>
                <p><i className="fas fa-check"></i> <strong>Fast & Reliable:</strong> Quick turnaround times with guaranteed accuracy</p>
                <p><i className="fas fa-check"></i> <strong>Transparent Pricing:</strong> No hidden fees or surprise charges</p>
                <p><i className="fas fa-check"></i> <strong>Ongoing Support:</strong> We're here for you beyond just filing</p>
              </div>
              
              <div className="info-item">
                <h3>Email Us</h3>
                <p><i className="fas fa-envelope"></i> info@nationalfilingcorp.com</p>
                <p>Send us an email anytime</p>
              </div>
              
              <div className="info-item">
                <h3>Call Us</h3>
                <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p>Monday - Friday, 9:00 AM - 6:00 PM EST</p>
              </div>
              
              <div className="info-item">
                <h3>Visit Us</h3>
                <p><i className="fas fa-map-marker-alt"></i> 123 Business Ave, Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
              
              <div className="info-item">
                <h3>Business Hours</h3>
                <p><i className="fas fa-clock"></i> Monday - Friday</p>
                <p>9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      <style jsx>{`
        :root {
          --primary-light: #2E86DE;
          --primary: #1B6BCC;
          --primary-dark: #0F52AC;
          --accent: #00CC81;
          --accent-dark: #00AA69;
          --light: #F8F9FC;
          --dark: #212529;
          --gray: #6C757D;
          --light-gray: #E9ECEF;
          --gradient-primary: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%);
          --gradient-accent: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
          --gradient-hero: linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%);
          --border-radius: 10px;
          --shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          --transition: all 0.3s ease;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .App {
          color: var(--dark);
          line-height: 1.6;
          background-color: #fff;
          overflow-x: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Header Styles */
        header {
          background-color: white;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .logo-img {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--gradient-primary);
          color: white;
          font-size: 26px;
          font-weight: 800;
          box-shadow: var(--shadow);
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-main {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 1px;
          line-height: 1;
        }
        
        .logo-sub {
          font-size: 14px;
          color: var(--gray);
          letter-spacing: 1.2px;
          margin-top: 3px;
          font-weight: 500;
        }
        
        nav ul {
          display: flex;
          list-style: none;
        }
        
        nav ul li {
          margin-left: 30px;
        }
        
        nav ul li a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 600;
          font-size: 16px;
          transition: var(--transition);
          position: relative;
          padding: 5px 0;
        }
        
        nav ul li a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: 0;
          left: 0;
          background: var(--gradient-accent);
          transition: var(--transition);
          border-radius: 3px;
        }
        
        nav ul li a:hover {
          color: var(--primary);
        }
        
        nav ul li a:hover:after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--dark);
        }
        
        /* Hero Section */
        .hero {
          background: var(--gradient-hero);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,224C672,235,768,181,864,160C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
          background-size: cover;
          background-position: bottom;
          opacity: 0.1;
        }
        
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 25px;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .hero p {
          font-size: 1.3rem;
          margin-bottom: 30px;
          opacity: 0.95;
        }
        
        .hero-features {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 40px 0;
        }
        
        .hero-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
        }
        
        .hero-feature i {
          color: var(--accent);
          font-size: 1.5rem;
        }
        
        .slogan {
          font-style: italic;
          margin-top: 35px;
          font-size: 1.3rem;
          opacity: 0.9;
          border-left: 4px solid var(--accent);
          padding-left: 20px;
          display: inline-block;
          text-align: left;
        }
        
        /* Services Section */
        .services {
          padding: 100px 0;
          background-color: var(--light);
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title h2 {
          font-size: 2.6rem;
          color: var(--primary);
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        
        .section-title h2:after {
          content: '';
          position: absolute;
          width: 70px;
          height: 4px;
          background: var(--gradient-accent);
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .section-title p {
          color: var(--gray);
          max-width: 700px;
          margin: 25px auto 0;
          font-size: 1.2rem;
          line-height: 1.6;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          background: var(--gradient-primary);
          color: white;
          font-size: 28px;
          padding: 30px;
          text-align: center;
        }
        
        .service-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-content h3 {
          font-size: 1.6rem;
          margin-bottom: 18px;
          color: var(--primary-dark);
        }
        
        .service-content p {
          color: var(--gray);
          margin-bottom: 25px;
          flex-grow: 1;
          line-height: 1.6;
        }
        
        .btn {
          display: inline-block;
          background: var(--gradient-accent);
          color: white;
          padding: 16px 32px;
          border-radius: var(--border-radius);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
          border: none;
          cursor: pointer;
          text-align: center;
          align-self: flex-start;
          box-shadow: 0 4px 15px rgba(0, 204, 129, 0.3);
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 204, 129, 0.4);
        }
        
        .help-section {
          background: white;
          padding: 40px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          text-align: center;
          margin-top: 60px;
        }
        
        /* FAQ Section */
        .faq {
          padding: 100px 0;
          background: white;
        }
        
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 60px;
        }
        
        .faq-column h3 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 15px;
        }
        
        .faq-column h3:after {
          content: '';
          position: absolute;
          width: 50px;
          height: 4px;
          background: var(--gradient-accent);
          bottom: 0;
          left: 0;
          border-radius: 2px;
        }
        
        .faq-list {
          margin-bottom: 30px;
        }
        
        .faq-item {
          margin-bottom: 30px;
          padding: 25px;
          background: var(--light);
          border-radius: var(--border-radius);
          transition: var(--transition);
          border-left: 4px solid var(--primary);
        }
        
        .faq-item:hover {
          background: #f1f5f9;
          transform: translateX(5px);
          border-left: 4px solid var(--accent);
        }
        
        .faq-item h4 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: var(--primary-dark);
          display: flex;
          align-items: center;
        }
        
        .faq-item h4 i {
          color: var(--accent);
          margin-right: 12px;
          font-size: 1.2rem;
        }
        
        .faq-item p {
          color: var(--gray);
          padding-left: 32px;
          line-height: 1.6;
        }
        
        /* Contact Section */
        .contact {
          padding: 100px 0;
          background: var(--light);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 50px;
        }
        
        .contact-form {
          background: white;
          padding: 40px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--primary-dark);
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid var(--light-gray);
          border-radius: var(--border-radius);
          font-size: 16px;
          transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .required:after {
          content: '*';
          color: #ef4444;
          margin-left: 4px;
        }
        
        .contact-info {
          background: white;
          padding: 40px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
        }
        
        .info-item {
          margin-bottom: 30px;
        }
        
        .info-item h3 {
          font-size: 1.4rem;
          color: var(--primary);
          margin-bottom: 15px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .info-item h3:after {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          background: var(--gradient-accent);
          bottom: 0;
          left: 0;
          border-radius: 2px;
        }
        
        .info-item p {
          color: var(--gray);
          margin-bottom: 10px;
        }
        
        /* Footer */
        footer {
          background: var(--gradient-primary);
          color: white;
          padding: 80px 0 30px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
          margin-bottom: 50px;
        }
        
        .footer-column h3 {
          font-size: 1.5rem;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 15px;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: var(--gradient-accent);
          border-radius: 2px;
        }
        
        .footer-column p {
          opacity: 0.9;
          margin-bottom: 20px;
          line-height: 1.7;
        }
        
        .footer-features {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin: 20px 0;
        }
        
        .footer-feature {
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 15px;
          border-radius: var(--border-radius);
          font-size: 0.9rem;
        }
        
        .contact-info {
          list-style: none;
        }
        
        .contact-info li {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          opacity: 0.9;
          transition: var(--transition);
        }
        
        .contact-info li:hover {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .contact-info li i {
          margin-right: 15px;
          color: var(--accent);
          font-size: 1.2rem;
          width: 20px;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 15px;
        }
        
        .footer-links li a {
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: var(--transition);
          display: flex;
          align-items: center;
        }
        
        .footer-links li a i {
          margin-right: 12px;
          font-size: 1rem;
          color: var(--accent);
        }
        
        .footer-links li a:hover {
          opacity: 1;
          color: var(--accent);
          transform: translateX(5px);
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 1rem;
          opacity: 0.8;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .faq-grid, .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-features {
            flex-direction: column;
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 15px 20px;
          }
          
          nav ul {
            display: none;
            position: absolute;
            top: 85px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            z-index: 100;
          }
          
          nav ul.show {
            display: flex;
          }
          
          nav ul li {
            margin: 15px 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .hero {
            padding: 80px 0;
          }
          
          .hero h1 {
            font-size: 2.2rem;
          }
          
          .hero p {
            font-size: 1.1rem;
          }
          
          .services, .faq, .contact {
            padding: 70px 0;
          }
          
          .section-title h2 {
            font-size: 2.2rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 576px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .slogan {
            font-size: 1.1rem;
          }
          
          .service-content h3 {
            font-size: 1.4rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .logo-img {
            width: 50px;
            height: 50px;
            font-size: 22px;
          }
          
          .logo-main {
            font-size: 24px;
          }
          
          .contact-form, .contact-info {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default NationalFilingCorp;

