import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-emerald-600/10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Sachin Kumar</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Junior Year Computer Science Student | Full-Stack Developer
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Passionate about creating beautiful, functional web experiences. I build modern applications
                with cutting-edge technologies and love solving complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/Sachin-8125"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-486430341/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:sachin2317080@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

