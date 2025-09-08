// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FormCard from "./components/FormCard";
import "./styles/global.css";
import "./styles/components.css";

function App() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    const handleMenuToggle = () => {
      navMenu?.classList.toggle("show");
    };
    mobileMenuBtn?.addEventListener("click", handleMenuToggle);

    // Smooth scrolling for anchor links
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        navMenu?.classList.remove("show");
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    // Simple form validation (para Contact.js)
    const form = document.querySelector("form");
    const handleSubmit = function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value;
      const email = document.getElementById("email")?.value;
      const message = document.getElementById("message")?.value;

      if (name && email && message) {
        alert(
          "Thank you for your message! We will get back to you within 24 hours."
        );
        this.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    };
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    // Cleanup
    return () => {
      mobileMenuBtn?.removeEventListener("click", handleMenuToggle);
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <FAQ />
                <Contact />

                <section className="pre-footer-section">
                  <p>
                    Eliminate the stress of filing and renewing your corporation
                    on your own. Let our experienced tax professionals guide you
                    in launching your entrepreneurial journey with confidence
                    today!
                  </p>
                  <Link to="/form">
                    <button type="button" className="pre-footer-button">
                      Start Your Business Now!
                    </button>
                  </Link>
                </section>

                <Footer />
              </>
            }
          />

          {/* Ruta del formulario */}
          <Route path="/form" element={<FormCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
