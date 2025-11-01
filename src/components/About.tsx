import { GraduationCap, Code2, Award } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science, with a strong focus on
                web development. Over the past few years, I've built several projects that solve real-world
                problems and provide great user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development started with curiosity and has evolved into a passion for
                creating elegant, efficient solutions. I'm constantly learning new technologies and best
                practices to stay at the forefront of modern web development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source
                projects, or collaborating with fellow developers to build amazing things.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">
                  Junior Year Computer Science Student
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Focused on Software Development & Web Technologies
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-emerald-600/20 rounded-lg">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-gray-300">
                  Multiple Web Development Projects
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Full-stack applications with modern tech stacks
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                </div>
                <p className="text-gray-300">
                  Frontend & Backend Development
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  React, TypeScript, Node.js, Databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
