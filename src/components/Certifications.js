import React from 'react';
import { FaCertificate } from 'react-icons/fa';

function Certifications() {
  const certs = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      iconColor: '#0078D4',
    },
    {
      title: 'React – The Complete Guide',
      issuer: 'Udemy',
      iconColor: '#61DBFB',
    },
    {
      title: '.NET Core Microservices',
      issuer: 'Pluralsight',
      iconColor: '#EE3F24',
    },
  ];

  return (
    <section id="certifications" className="certifications-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-warning text-center mb-4">Certifications</h2>
        <div className="row justify-content-center">
          {certs.map((cert, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card bg-dark text-light shadow h-100 cert-card">
                <div className="card-body d-flex align-items-start gap-3">
                  <FaCertificate size={32} style={{ color: cert.iconColor }} />
                  <div>
                    <h5 className="card-title mb-1">{cert.title}</h5>
                    <small className="text-muted">{cert.issuer}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
