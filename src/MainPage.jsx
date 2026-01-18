import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const sections = [
    <Header key="header" />,
    <About key="about" />,
    <Projects key="projects" />,
    <Skills key="skills" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <Contact key="contact" />,
    <Footer key="footer" />,
  ];

  return (
    <div
      className="App min-h-screen relative overflow-hidden text-white"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #0c4a4a 50%, #0a3d3d 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-gradient-radial from-teal-500/40 via-cyan-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-15%] w-[80%] h-[80%] bg-gradient-radial from-teal-600/30 via-blue-700/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {sections.map((Section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.6 }}
          >
            {Section}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
