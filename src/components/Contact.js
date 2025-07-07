// src/components/Contact.js
import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact" className="contact-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center text-warning mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="contact-card bg-dark text-light p-4 rounded-4 shadow-lg">
              <ul className="list-unstyled contact-list">
                <li>
                  <FaEnvelope className="me-2 text-warning" />
                  <a href="mailto:avijit@example.com">avijit@example.com</a>
                </li>
                <li>
                  <FaPhoneAlt className="me-2 text-warning" />
                  <a href="tel:+919876543210">+91 9876543210</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="me-2 text-warning" />
                  Kolkata, India
                </li>
                <li>
                  <FaLinkedin className="me-2 text-warning" />
                  <a
                    href="https://linkedin.com/in/avijitgorai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <FaWhatsapp className="me-2 text-warning" />
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
