// src/App.js
import React, { useEffect } from 'react';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about" data-aos="fade-up"><About /></section>
        <section id="summary" data-aos="fade-up"><Summary /></section>
        <section id="experience" data-aos="fade-up"><Experience /></section>
        <section id="education" data-aos="fade-up"><Education /></section>
        <section id="projects" data-aos="fade-up"><Projects /></section>
        <section id="skills" data-aos="fade-up"><Skills /></section>
        <section id="certifications" data-aos="fade-up"><Certifications /></section>
        <section id="contact" data-aos="fade-up"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
