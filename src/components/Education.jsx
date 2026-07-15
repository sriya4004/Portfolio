import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelors in Computer Science and Engineering',
      institution: 'Chandigarh University, Gharuan',
      year: '2022 - 2026'
    },
    {
      degree: 'Intermediate (CBSE)',
      institution: 'M.G Public School, Muzaffarnagar, UP',
      year: '2021 - 2022'
    },
    {
      degree: 'Matriculation (CBSE)',
      institution: 'M.G Public School, Muzaffarnagar, UP',
      year: '2019 - 2020'
    }
  ];

  const certifications = [
    { name: 'Introduction to Database', issuer: 'META', year: '2024' },
    { name: 'SQL: A Practical Introduction for Querying Databases', issuer: 'IBM', year: '2023' },
    { name: 'Cloud Computing', issuer: 'NPTEL', year: '2024' },
    { name: 'Internet of Things: Design concept & Use Cases', issuer: 'NPTEL', year: '2024' },
    { name: 'Foundation of Cloud IOT Edge ML', issuer: 'NPTEL', year: '2025' },
    { name: '5G and 4G Fundamentals', issuer: 'Meta', year: '2025' }
  ];

  return (
    <section className="education section container" id="education">
      <div className="edu-cert-container">
        <div className="education-column">
          <h2 className="section-title text-gradient">Education</h2>
          <div className="timeline">
            {educationList.map((edu, index) => (
              <div key={index} className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <span className="timeline-year">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-column">
          <h2 className="section-title text-gradient">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card glass-card">
                <h4 className="cert-name">{cert.name}</h4>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
