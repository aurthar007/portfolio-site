// src/components/Summary.js
import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Summary() {
  return (
    <section id="summary" className="summary-section py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-warning text-center mb-4">Professional Summary</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card bg-secondary border-0 shadow-lg p-4 rounded-4">
              <div className="card-body">
                <p className="lead text-light mb-4">
                  <FaLaptopCode className="me-2 text-warning" />
                  I’m a <strong>Full Stack Developer</strong> with <strong>3+ years</strong> of experience in building scalable, user-friendly web applications.
                </p>
                <p className="text-light mb-3">
                  <FaCode className="me-2 text-info" />
                  I specialize in <strong>React.js</strong> for front-end and <strong>ASP.NET Core</strong> for back-end APIs, using <strong>C#</strong> and modern web standards.
                </p>
                <p className="text-light mb-3">
                  <FaDatabase className="me-2 text-success" />
                  Proficient in working with relational databases like <strong>SQL Server</strong>, as well as implementing secure, RESTful APIs and scalable architectures.
                </p>
                <p className="text-light">
                  Passionate about <strong>clean code</strong>, <strong>UI/UX design</strong>, <strong>agile development</strong>, and creating delightful user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
