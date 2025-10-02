import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const contactInfo = [
    { label: 'Phone', value: '+91 9313929324', icon: '📱' },
    { label: 'Email', value: 'krishgadara0701@gmail.com', icon: '📧' },
    { label: 'Location', value: 'Mota bazar, Vallabh Vidhyanagar, Anand', icon: '📍' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and expertise</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="objective-card">
              <h3>Objective</h3>
              <p>
                A motivated and fast learner, excited to begin my career as a Web Developer.
                Eager to apply my skills in front-end and back-end technologies while
                continuously learning and growing in a collaborative development environment.
                Looking forward to contributing to real-world projects and delivering
                effective web solutions.
              </p>
            </div>

            <div className="soft-skills">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                <div className="skill-item">Fast Learner</div>
                <div className="skill-item">Collaborative</div>
                <div className="skill-item">Problem Solving</div>
                <div className="skill-item">Eager to Improve</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-contact"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-list">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;