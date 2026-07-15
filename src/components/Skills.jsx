import React from 'react';
import './Skills.css';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'C', icon: <span className="text-icon">C</span> },
        { name: 'Data Structures', icon: <FaDatabase /> },
        { name: 'Algorithms', icon: <span className="text-icon">Algo</span> },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'React Native', icon: <FaReact /> },
      ]
    },
    {
      title: 'Tools & Databases',
      skills: [
        { name: 'SQL', icon: <SiMysql /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <span className="text-icon">VS</span> },
      ]
    }
  ];

  return (
    <section className="skills section container" id="skills">
      <h2 className="section-title text-gradient">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-card">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
