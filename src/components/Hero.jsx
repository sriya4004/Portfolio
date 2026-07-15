import React from 'react';
import './Hero.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero section container" id="home">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={profilePic} alt="Anant Pal" className="hero-image" />
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient">Anant Pal</span>
        </h1>
        <h2 className="hero-subtitle">Software Engineer & Full-Stack Developer</h2>
        <p className="hero-description">
          Motivated Computer Science Engineering Graduate with proven skills in software development and front-end technologies. Passionate about solving real-world problems and exploring AI, cloud computing, and web development.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/anant-pal-6a855824b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:anantpal4120@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
