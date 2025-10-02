import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Foundation in Prompt Engineering',
      issuer: 'AWS',
      year: '2024',
      icon: '🎓'
    },
    {
      title: 'HackerRank - C# (Basic)',
      issuer: 'HackerRank',
      year: '2024',
      icon: '💻'
    },
    {
      title: 'HackerRank - JavaScript (Basic)',
      issuer: 'HackerRank',
      year: '2024',
      icon: '💻'
    },
    {
      title: 'HackerRank - Python (Basic)',
      issuer: 'HackerRank',
      year: '2024',
      icon: '💻'
    },
    {
      title: 'DSA Full Course',
      issuer: 'Scaler Academy',
      year: '2024',
      icon: '📊'
    },
    {
      title: 'ChatGPT for Everyone',
      issuer: 'GUVI (IIT-M & AICTE)',
      year: '2024',
      icon: '🤖'
    },
    {
      title: 'AWS AI/ML Fundamentals',
      issuer: 'Coursera',
      year: '2024',
      icon: '☁️'
    },
    {
      title: 'IBM Data Visualization',
      issuer: 'Coursera',
      year: '2024',
      icon: '📊'
    },
    {
      title: 'Microsoft Data Analysis',
      issuer: 'Coursera',
      year: '2024',
      icon: '📊'
    },
    {
      title: 'IBM Exploratory Data Analysis',
      issuer: 'Coursera',
      year: '2024',
      icon: '🔍'
    },
    {
      title: 'IBM Software Engineering',
      issuer: 'Coursera',
      year: '2024',
      icon: '🔧'
    },
    {
      title: 'C# & .NET Workshop',
      issuer: 'CHARUSAT',
      year: '2024',
      icon: '🎯'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and courses completed</p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;