import { motion } from 'framer-motion';
import { GraduationCap, Code2, Award } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

interface AboutProps {
  theme: string;
}

function About({ theme: _theme }: AboutProps) {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-green-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              className="space-y-6"
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
              <motion.div variants={cardVariants} className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:bg-teal-900/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-teal-600/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">
                  Junior Year Computer Science Student
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Focused on Software Development & Web Technologies
                </p>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:bg-teal-900/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Code2 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-gray-300">
                  Multiple Web Development Projects
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Full-stack applications with modern tech stacks
                </p>
              </motion.div>

              <motion.div variants={cardVariants} className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:bg-teal-900/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Award className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
                </div>
                <p className="text-gray-300">
                  Frontend & Backend Development
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  React, TypeScript, Node.js, Databases
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
