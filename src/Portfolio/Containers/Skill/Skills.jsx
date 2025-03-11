import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "HTML & CSS", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React.js", level: "85%" },
    { name: "SCSS", level: "80%" },
  ],
  backend: [
    { name: "Java", level: "85%" },
    { name: "Jdbc", level: "80%" },
    { name: "Hibernate", level: "75%" },
    { name: "SpringBoot", level: "70%" },
  ],
  tools: [
    { name: "Git & GitHub", level: "90%" },
    { name: "Eclipse", level: "70%" },
    { name: "VsCode", level: "75%" },
    { name: "MySqlWorkbench", level: "80%" },
  ],
};

const Skills = () => {
  return (
    <div className="skills-container">
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SKILLS
      </motion.h2>

      <motion.p 
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        As a Full Stack Developer, I have expertise in various technologies.
      </motion.p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div 
            key={category} 
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.3 }}
          >
            <h3 className="category-title">{category.toUpperCase()}</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <div className="skill" key={idx}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      style={{ width: skill.level }}
                      initial={{ width: "0%" }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
