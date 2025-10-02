import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and achievements</p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="education-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          </div>
          <div className="education-content">
            <h3 className="education-degree">Bachelor of Technology in Information Technology</h3>
            <p className="education-institute">CHARUSAT University - Devang Patel Institute of Advance Technology and Research</p>
            <div className="education-gpa">
              <span className="gpa-label">GPA:</span>
              <span className="gpa-value">8.31</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;