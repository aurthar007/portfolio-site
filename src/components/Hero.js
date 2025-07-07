import React from 'react';
import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';
import { TypeAnimation } from 'react-type-animation';


function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="hero-content p-4">
          <img src={profileImg} alt="Avijit Gorai" className="profile-img mb-4 shadow" />
          <h1 className="fw-bold text-warning display-4 mb-3">Hi, I'm Avijit Gorai</h1>
          
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React & .NET Core Expert',
              2000,
              'UI/UX Focused Engineer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="lead text-light fs-4 d-block mb-4"
            repeat={Infinity}
          />

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
            <a href="#contact" className="btn btn-warning btn-lg px-4">Hire Me</a>
            <a href={resumePDF} download className="btn btn-outline-light btn-lg px-4">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
