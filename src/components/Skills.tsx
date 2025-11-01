import { Code2, Database, Globe, Wrench } from "lucide-react";

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
      blue: 'from-blue-600/20 to-blue-600/5 border-blue-500/30 text-blue-400',
      emerald: 'from-emerald-600/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400',
      purple: 'from-purple-600/20 to-purple-600/5 border-purple-500/30 text-purple-400',
      orange: 'from-orange-600/20 to-orange-600/5 border-orange-500/30 text-orange-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 bg-linear-to-br ${getColorClasses(category.color)} rounded-lg mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-gray-300 text-sm py-1 px-3 bg-white/5 rounded-md border border-white/10"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}