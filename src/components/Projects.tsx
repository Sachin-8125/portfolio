import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg">
              A collection of projects showcasing my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300 text-sm flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}