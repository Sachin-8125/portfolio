import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-linear-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-linear-to-br from-gray-100 via-gray-200 to-gray-100'}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Hero theme={theme} toggleTheme={toggleTheme} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <About theme={theme} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Skills theme={theme} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Projects theme={theme} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Contact theme={theme} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Footer theme={theme} />
        </motion.div>
      </motion.div>
    </div>
  );
}