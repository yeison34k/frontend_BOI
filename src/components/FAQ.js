// components/FAQ.js
import React from 'react';

const FAQ = () => {
  return (
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
  );
};

export default FAQ;