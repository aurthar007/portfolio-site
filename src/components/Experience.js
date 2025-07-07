// src/components/Experience.js
import React from 'react';

function Experience() {
  const experienceList = [
    {
      role: 'Software Developer',
      company: 'ABC Tech',
      period: 'Jan 2022 – Present',
      responsibilities: [
        'Developed full-stack applications using React and ASP.NET Core',
        'Integrated REST APIs with frontend interfaces',
        'Led a team of 3 developers on client projects',
      ],
    },
    {
      role: 'Intern Developer',
      company: 'XYZ Solutions',
      period: 'Jun 2021 – Dec 2021',
      responsibilities: [
        'Built internal tools using React.js',
        'Worked closely with senior devs to debug and test .NET APIs',
        'Participated in sprint planning and code reviews',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-warning text-center mb-4">Experience</h2>
        <div className="row justify-content-center">
          {experienceList.map((exp, index) => (
            <div className="col-md-10 col-lg-8 mb-4" key={index}>
              <div className="card bg-dark text-light shadow-sm experience-card">
                <div className="card-body">
                  <h5 className="card-title text-warning">{exp.role}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                  <p className="card-text fst-italic">{exp.period}</p>
                  <ul className="ps-3 mb-0">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
