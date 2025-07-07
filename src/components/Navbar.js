// src/components/Navbar.js
import React from 'react';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning" href="#hero">Avijit Gorai</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#summary">Summary</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
