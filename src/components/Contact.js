// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;