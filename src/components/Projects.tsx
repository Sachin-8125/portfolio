import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const iconVariants = {
  hover: { rotate: 360, transition: { duration: 0.3 } }
};

export default function Projects() {
  const projects = [
    {
      title: 'Google Gemini Clone',
      description: 'A web application that mimics the functionality of Google Gemini, allowing users to interact with an AI model for various tasks.',
      technologies: ['React', 'Node.js', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/30869081/pexels-photo-30869081.jpeg',
      github: 'https://github.com/Sachin-8125/Gemini-Clone',
      live: 'https://sachin-8125.github.io/Gemini-Clone/'
    },
    {
      title: 'Credit Score Platform',
      description: 'A full-stack application to calculate credit score based on the user\'s credit history and financial behavior.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg',
      github: 'https://github.com/Sachin-8125/NextScore',
      live: 'https://next-score-theta.vercel.app/'
    },
    {
      title: 'Fraud Prevention System',
      description: 'A system to prevent fraud in the banking system by detecting fraudulent transactions and users.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/6266500/pexels-photo-6266500.jpeg/',
      github: 'https://github.com/Sachin-8125/TrustNet',
      live: 'https://trust-net-six.vercel.app/'
    },
    {
      title: 'Project Lighthouse',
      description: 'An early-warning system designed to identify students at risk by analyzing academic data and self-reported well-being.',
      technologies: ['React.js', 'Express.js', 'Neondb', 'Tailwind'],
      image: 'https://images.pexels.com/photos/28608162/pexels-photo-28608162.jpeg',
      github: 'https://github.com/Sachin-8125/Project-Lighthouse',
      live: 'https://project-lighthouse-zeta.vercel.app/'
    },
    {
      title: 'Medicine Comparision App',
      description: 'A web application to compare the prices and availability of medicines in different pharmacies.',
      technologies: ['React', 'API Integration', 'Tailwind', 'JavaScript'],
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      github: 'https://github.com/Sachin-8125/MediCompare',
      live: 'https://medi-compare-steel.vercel.app/'
    },
    {
      title: 'Skills-Gap Analyzer',
      description: 'A full-stack web application that helps users identify skill gaps and provides personalized learning roadmaps.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      github: 'https://github.com/Sachin-8125/Skills-Gap-Analyzer',
      live: 'https://skills-gap-analyzer-omega.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg">
              A collection of projects showcasing my skills and creativity
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl overflow-hidden hover:bg-teal-900/30 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-teal-600/20 text-teal-400 rounded-full border border-teal-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(20, 184, 166, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-900/20 hover:bg-teal-900/30 border border-teal-500/30 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm flex-1 justify-center"
                      whileHover="hover"
                      variants={iconVariants}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-all duration-300 text-sm flex-1 justify-center"
                      whileHover="hover"
                      variants={iconVariants}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}