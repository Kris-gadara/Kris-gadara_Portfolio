import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Kris Gadara | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Kris Gadara - A motivated Full Stack Web Developer skilled in React.js, Node.js, MongoDB, and more." />
        <meta name="keywords" content="Kris Gadara, Web Developer, Full Stack, React, Node.js, Portfolio" />
      </Helmet>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </Router>
  );
}

export default App;