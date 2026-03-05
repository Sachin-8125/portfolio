import { motion } from 'framer-motion';
import { Code2, Database, Globe, Wrench } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const badgeVariants = {
  hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } }
};

export default function Skilss(){
  const skills = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'blue',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      icon: Code2,
      color: 'emerald',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication', 'Supabase']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'purple',
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Database Design', 'Supabase']
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'orange',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm', 'Responsive Design']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-teal-600/20 to-teal-600/5 border-teal-500/30 text-teal-400',
      emerald: 'from-green-600/20 to-green-600/5 border-green-500/30 text-green-400',
      purple: 'from-green-600/20 to-green-600/5 border-green-500/30 text-green-400',
      orange: 'from-orange-600/20 to-orange-600/5 border-orange-500/30 text-orange-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:bg-teal-900/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 bg-linear-to-br ${getColorClasses(category.color)} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={badgeVariants}
                        whileHover="hover"
                        className="text-gray-300 text-sm py-1 px-3 bg-teal-600/20 rounded-md border border-teal-500/30"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}