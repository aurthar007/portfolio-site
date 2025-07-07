// src/components/Projects.js
import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Dynamic Portfolio Website',
      description:
        'A full-featured dynamic portfolio built using React, .NET Core, and SQL Server. Hosted on AWS with CI/CD pipeline using GitHub and Netlify.',
      link: '#',
    },
    {
      title: 'Online Learning Platform',
      description:
        'Built a web-based learning platform with course modules, authentication, and real-time quizzes using React and Firebase.',
      link: '#',
    },
    {
      title: 'Inventory Management System',
      description:
        'Designed a responsive inventory system using React.js and ASP.NET Core with SQL backend and authentication module.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-warning text-center mb-5">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card project-card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">{project.title}</h5>
                  <p className="card-text text-light">{project.description}</p>
                  {project.link && (
                    <a href={project.link} className="btn btn-outline-warning btn-sm mt-2" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
