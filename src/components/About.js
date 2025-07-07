// src/components/About.js
import React from 'react';


function About() {
  return (
    <section id="about" className="about-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-warning text-center mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="about-content bg-dark text-light p-4 rounded-4 shadow-lg">
              <p className="lead">
                Hello! I'm <strong className="text-warning">Avijit Gorai</strong>, a highly motivated and detail-oriented software developer specializing in
                building scalable full-stack applications using <strong>React</strong> for frontend and <strong>.NET Core</strong> for backend.
              </p>
              <p>
                With a deep passion for <strong>UI/UX design</strong>, modern coding standards, and cloud integration, I strive to build applications that not only
                work efficiently but also deliver an excellent user experience.
              </p>
              <p>
                I believe in writing clean, maintainable code, collaborating in agile teams, and continuously learning new technologies to stay at the forefront
                of the development world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
