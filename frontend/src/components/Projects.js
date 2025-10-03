import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Paper Trading Platform',
      description: 'A comprehensive stock trading simulation platform for practice trading without real money.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'QuickDesk',
      description: 'Help Desk System with real-time communication and ticket management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'Modern Expense Tracker',
      description: 'Track your expenses and manage your budget with real-time analytics.',
      tech: ['React', 'Firebase'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'Chat App',
      description: 'Real-time chat application with multiple rooms and user authentication.',
      tech: ['React', 'Node.js', 'Socket.io'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'SmartKart',
      description: 'E-Commerce platform with shopping cart, payment integration, and order management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: '3D Racing Game',
      description: 'Immersive 3D racing game with realistic physics and engaging gameplay.',
      tech: ['Unity', 'C#'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'Fit Sync App',
      description: 'Fitness tracking mobile application to monitor workouts and health metrics.',
      tech: ['Flutter', 'Dart'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'Waste Automation',
      description: 'Smart waste management system developed during a hackathon.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'SnapSpace AR',
      description: 'AR-based tile visualization app for interior design and planning.',
      tech: ['Unity', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'CropSense AI',
      description: 'AI-powered crop disease prediction and diagnosis system for farmers.',
      tech: ['React', 'AI/ML', 'Python'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    },
    {
      title: 'StockScope',
      description: 'Real-time stock ticker tracker with charts and market analysis.',
      tech: ['React', 'Node.js', 'MongoDB', 'API'],
      github: 'https://github.com/Kris-gadara',
      demo: null
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <div className="project-icon">
                  <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;