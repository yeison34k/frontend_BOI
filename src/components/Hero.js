import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Datos para cada slide
  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/NFC1.jpg`,
      title: "Welcome to National Filing Corporation",
      description: "Your trusted partner in corporate compliance",
      features: ["Annual Reports", "Formation Documents", "Compliance Management"],
      slogan: "File with ease. File in compliance. File securely and efficiently with NFC."
    },
    {
      image: `${process.env.PUBLIC_URL}/NFC2.jpg`,
      title: "From annual reports to formation documents",
      description: "NFC simplifies the way businesses manage their filings. Built for tomorrow's business, designed for ease and today's compliance",
      features: ["Startup Support", "Enterprise Solutions", "Easy Filing"],
      slogan: "Built for tomorrow's business, designed for ease and today's compliance"
    },
    {
      image: `${process.env.PUBLIC_URL}/NFC3.jpg`,
      title: "File with ease. File in compliance.",
      description: "File securely and efficiently with NFC. Whether you're a startup or an established enterprise, we make staying compliant effortless.",
      features: ["Secure Processing", "Efficient Systems", "Trusted Partner"],
      slogan: "Whether you're a startup or an established enterprise, we make staying compliant effortless"
    }
  ];

  // Efecto para la rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    },3000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  // Función para navegar a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Estilos en línea
  const styles = {
    hero: {
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      height: '100vh',
      padding: 0
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0,
      transition: 'opacity 1s ease-in-out',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    activeSlide: {
      opacity: 1
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      padding: '2rem'
    },
    title: {
      fontSize: '3rem',
      marginBottom: '25px',
      fontWeight: 700,
      lineHeight: 1.2,
      animation: 'fadeInUp 1s ease-out'
    },
    description: {
      fontSize: '1.3rem',
      marginBottom: '30px',
      opacity: 0.95,
      animation: 'fadeInUp 1.2s ease-out'
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      margin: '40px 0',
      animation: 'fadeInUp 1.4s ease-out'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.1rem'
    },
    featureIcon: {
      color: '#4e8cff',
      fontSize: '1.5rem'
    },
    slogan: {
      fontStyle: 'italic',
      marginTop: '35px',
      fontSize: '1.3rem',
      opacity: 0.9,
      borderLeft: '4px solid #4e8cff',
      paddingLeft: '20px',
      display: 'inline-block',
      textAlign: 'left',
      animation: 'fadeInUp 1.6s ease-out'
    },
    indicators: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 3
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    activeIndicator: {
      backgroundColor: 'white'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 3,
      transition: 'background-color 0.3s'
    },
    prevButton: {
      left: '20px'
    },
    nextButton: {
      right: '20px'
    },
    // Estilos para animaciones
    keyframes: `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    // Estilos responsive
    responsive: `
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2rem !important;
        }
        .hero-description {
          font-size: 1.1rem !important;
        }
        .hero-features {
          flex-direction: column !important;
          gap: 20px !important;
        }
        .hero-slogan {
          font-size: 1.1rem !important;
        }
        .hero-nav-button {
          width: 40px !important;
          height: 40px !important;
          font-size: 18px !important;
        }
      }
    `
  };

  return (
    <section className="hero" style={styles.hero}>
      {/* Inyectar estilos de animación y responsive */}
      <style>
        {styles.keyframes}
        {styles.responsive}
      </style>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            ...styles.slide,
            ...(index === currentSlide ? styles.activeSlide : {}),
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`
          }}
        >
          <div className="hero-content" style={styles.heroContent}>
            <h1 className="hero-title" style={styles.title}>{slide.title}</h1>
            <p className="hero-description" style={styles.description}>{slide.description}</p>
            
            <div className="hero-features" style={styles.features}>
              {slide.features.map((feature, i) => (
                <div key={i} className="hero-feature" style={styles.feature}>
                  <i className="fas fa-check-circle" style={styles.featureIcon}></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-slogan" style={styles.slogan}>{slide.slogan}</div>
          </div>
        </div>
      ))}
      
      {/* Indicadores de slide */}
      <div className="slide-indicators" style={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            style={{
              ...styles.indicator,
              ...(index === currentSlide ? styles.activeIndicator : {})
            }}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button 
        className="hero-nav-button prev" 
        style={{...styles.navButton, ...styles.prevButton}}
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button 
        className="hero-nav-button next" 
        style={{...styles.navButton, ...styles.nextButton}}
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Hero;