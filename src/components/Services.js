// src/components/Services.js
import React from 'react';

const Services = () => {
  // Función para manejar el clic en "FILE NOW"
  const handleFileNowClick = (service) => {
    alert(`Starting process for: ${service}`);
    // Aquí puedes agregar lógica para redirigir o mostrar un formulario
  };

  return (
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
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('Corporate Formation')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="service-content">
              <h3>Corporate Renewal</h3>
              <p>Stay compliant with your states regulatory requirements and avoid costly late fees.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('Corporate Renewal')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-id-card"></i>
            </div>
            <div className="service-content">
              <h3>Employer ID Number (EIN)</h3>
              <p>Get your federal tax ID to open bank accounts, hire employees, and establish business credit.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('EIN Registration')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="service-content">
              <h3>Beneficial Ownership Information (BOI) Report</h3>
              <p>Stay compliant with FinCEN regulations and avoid penalties with our expert filing service.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('BOI Report')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="service-content">
              <h3>Registered Agent Service</h3>
              <p>Ensure your business receives important legal and tax documents with our reliable agent service.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('Registered Agent Service')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="service-content">
              <h3>Bylaws/Operating Agreement</h3>
              <p>Establish the rules and ownership structure of your company with our customized legal documents.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('Bylaws/Operating Agreement')}
              >
                FILE NOW
              </button>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-trademark"></i>
            </div>
            <div className="service-content">
              <h3>Trademark Search & Registration</h3>
              <p>Protect your brand identity with comprehensive trademark search and registration services.</p>
              <button 
                className="btn" 
                onClick={() => handleFileNowClick('Trademark Search & Registration')}
              >
                FILE NOW
              </button>
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
  );
};

export default Services;