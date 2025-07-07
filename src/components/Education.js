// src/components/Education.js
import React from 'react';


function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      university: 'XYZ University',
      year: '2018 – 2022',
      grade: 'CGPA: 8.5 / 10',
    },
    {
      degree: 'Higher Secondary (Science)',
      university: 'ABC Senior Secondary School',
      year: '2016 – 2018',
      grade: 'Percentage: 90%',
    },
  ];

  return (
    <section id="education" className="education-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-warning text-center mb-4">Education</h2>
        <div className="row justify-content-center">
          {educationList.map((edu, index) => (
            <div className="col-md-10 col-lg-8 mb-4" key={index}>
              <div className="card bg-dark text-light shadow-sm education-card">
                <div className="card-body">
                  <h5 className="card-title text-warning">{edu.degree}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.university}</h6>
                  <p className="card-text">{edu.year}</p>
                  <p className="card-text fw-bold">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
