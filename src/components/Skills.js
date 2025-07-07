// src/components/Skills.js
import React from 'react';

function Skills() {
  const skills = [
    "React.js", "ASP.NET Core", "C#", "JavaScript", "HTML5",
    "CSS3", "Bootstrap", "SQL Server", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="skills-section py-5" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="text-warning mb-4">Technical Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-3" key={index}>
              <div className="skill-box shadow-sm">
                <span className="skill-text">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
