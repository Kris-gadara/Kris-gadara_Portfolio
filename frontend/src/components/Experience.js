import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'Internship',
      company: 'Prodigy InfoTech',
      position: 'Generative AI Intern',
      duration: '2024',
      responsibilities: [
        'Worked on Generative AI projects',
        'Implemented ML models using TensorFlow',
        'Developed Python scripts for AI applications'
      ],
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Generative AI']
    },
    {
      type: 'Internship',
      company: 'Cognifyz',
      position: 'Full Stack Developer Intern',
      duration: '2024',
      responsibilities: [
        'Developed full-stack web applications',
        'Built RESTful APIs with Node.js',
        'Created responsive UI with React'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      type: 'Internship',
      company: 'Zidio',
      position: 'Full Stack Developer Intern',
      duration: '2024',
      responsibilities: [
        'Developed MERN stack applications',
        'Implemented real-time features with Socket.io',
        'Collaborated with development team'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    }
  ];

  const hackathons = [
    { name: 'Odoo X Charusat', year: '2024' },
    { name: 'Hackron (Blinkit, Pune)', year: '2024' },
    { name: 'CodeArena 1.0 (Darshan University)', year: '2024' },
    { name: 'Hackout (DAIICT)', year: '2024' },
    { name: 'Nexothon (GCET)', year: '2024' },
    { name: 'DataQuest (MSBC, CHARUSAT)', year: '2024' }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and achievements</p>
        </motion.div>

        <div className="experience-content">
          {/* Internships */}
          <div className="experience-section">
            <h3 className="experience-section-title">Internships</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="exp-header">
                      <div>
                        <span className="exp-type">{exp.type}</span>
                        <h4 className="exp-position">{exp.position}</h4>
                        <p className="exp-company">{exp.company}</p>
                      </div>
                      <span className="exp-duration">{exp.duration}</span>
                    </div>
                    <ul className="exp-responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    <div className="exp-skills">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="exp-skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div className="experience-section">
            <h3 className="experience-section-title">Hackathon Participations</h3>
            <div className="hackathons-grid">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  className="hackathon-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="hackathon-icon">🏆</div>
                  <h4 className="hackathon-name">{hackathon.name}</h4>
                  <p className="hackathon-year">{hackathon.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;