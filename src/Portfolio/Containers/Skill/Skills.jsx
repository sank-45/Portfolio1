import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      name: 'HTML/CSS',
      icon: 'fab fa-html5',
      description: 'Semantic HTML, CSS3, Flexbox, Grid, responsive design'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      description: 'ES6+ features, async programming, DOM manipulation'
    },
    {
      name: 'React',
      icon: 'fab fa-react',
      description: 'Building interactive UIs with components and hooks'
    },
    
    
    {
      name: 'SCSS',
      icon: 'fab fa-sass',
      description: 'CSS preprocessing with variables, mixins, and nesting'
    },
    {
      name: 'Java',
      icon: 'fab fa-java',
      description: 'Object-oriented programming, collections, multithreading'
    },
    {
      name: 'Spring Boot',
      icon: 'fas fa-leaf',
      description: 'Creating REST APIs with Spring framework'
    },
    {
      name: 'Hibernate',
      icon: 'fas fa-database',
      description: 'ORM implementation and JPA specifications'
    },
    {
      name: 'JSP',
      icon: 'fas fa-file-code',
      description: 'JavaServer Pages for dynamic web content'
    },
    {
      name: 'JDBC',
      icon: 'fas fa-server',
      description: 'Database connectivity and operations'
    },
    {
      name: 'MySQL',
      icon: 'fas fa-database',
      description: 'Database design, queries, and optimization'
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Technologies I work with
      </motion.p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>
            <h3 className="skill-title">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
