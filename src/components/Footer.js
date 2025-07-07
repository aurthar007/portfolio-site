// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';


function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-glass py-5">
      <div className="container text-center">
        <div className="social-icons mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/avijitgorai"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-text mb-2">
          &copy; {currentYear} <strong>Avijit Gorai</strong>. All rights reserved.
        </p>

        <button onClick={scrollToTop} className="btn btn-outline-warning btn-sm back-top-btn">
          <FaArrowUp className="me-1" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
