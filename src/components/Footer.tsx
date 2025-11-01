import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a
                href="https://github.com/Sachin-8125"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-486430341/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:sachin2317080@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Sachin Kumar. Built with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}