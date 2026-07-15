import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Pinterest Clone Application',
      date: '11/2024 - 12/2024',
      description: 'Developed a web-based application inspired by Pinterest, enabling users to discover, save, and share images on virtual boards. Integrated secure user authentication, optimized image storage, and implemented a Masonry grid layout for enhanced user experience across devices.',
      tags: ['React', 'Node.js', 'Masonry Layout', 'Authentication']
    },
    {
      title: 'Digital Steganography Project',
      date: '07/2024 - 08/2024',
      description: 'Developed a tool to securely embed and extract hidden data within digital images using steganographic techniques. The project ensures confidentiality by concealing text or files within image pixels without visibly altering the image quality.',
      tags: ['Java', 'Algorithms', 'Steganography']
    },
    {
      title: 'Online Pizza Ordering System',
      date: '01/2025 - Present',
      description: 'A full-stack React application for a pizza restaurant. Features include a dynamic menu, shopping cart functionality, user authentication, and order tracking. Built with modern UI aesthetics like glassmorphism and smooth animations.',
      tags: ['React', 'CSS', 'State Management', 'UI/UX']
    }
  ];

  return (
    <section className="projects section container" id="projects">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-content">
              <span className="project-date">{project.date}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
