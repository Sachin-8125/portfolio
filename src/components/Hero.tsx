import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sun, Moon } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
};

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

interface HeroProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Hero({ theme, toggleTheme }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-teal-600/10 via-transparent to-green-600/10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              <motion.h1 variants={textVariants} className={`text-5xl md:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-6`}>
                Hi, I'm <span className="bg-linear-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Sachin Kumar</span>
              </motion.h1>
              <motion.p variants={textVariants} className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                Junior Year Computer Science Student | Full-Stack Developer
              </motion.p>
              <motion.p variants={textVariants} className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-12`}>
                Passionate about creating beautiful, functional web experiences. I build modern applications
                with cutting-edge technologies and love solving complex problems.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.a
                variants={buttonVariants}
                href="#projects"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-600/30"
              >
                View My Work
              </motion.a>
              <motion.a
                variants={buttonVariants}
                href="#contact"
                className={`px-8 py-3 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' : 'bg-black/10 hover:bg-black/20 text-black border-black/20'} border rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.a
                custom={0}
                variants={socialVariants}
                href="https://github.com/Sachin-8125"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'} border rounded-lg transition-all duration-300 transform hover:scale-110 group`}
              >
                <Github className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`} />
              </motion.a>
              <motion.a
                custom={1}
                variants={socialVariants}
                href="https://www.linkedin.com/in/sachin-kumar-486430341/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </motion.a>
              <motion.a
                custom={2}
                variants={socialVariants}
                href="mailto:sachin2317080@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </motion.a>
            </motion.div>
          </div>
      </div>

      <motion.button
        onClick={toggleTheme}
        className={`absolute top-8 right-8 p-3 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'} border rounded-lg transition-all duration-300 transform hover:scale-110`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <Sun className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} /> : <Moon className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />}
      </motion.button>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}

