import { Code, Shield, Brain } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Anti-Theft Alarm System',
      description: 'Developed a hardware-based security system using sensors and microcontrollers to detect unauthorized access and trigger alarms. Implemented circuit design and programming to ensure reliable theft detection.',
      icon: Shield,
      tags: ['Hardware', 'Sensors', 'Microcontrollers', 'Security']
    },
    {
      title: 'Quiz Application',
      description: 'Built an interactive quiz application with user-friendly interface, timer functionality, and score tracking. Designed to enhance learning through gamification and immediate feedback.',
      icon: Brain,
      tags: ['Software', 'UI/UX', 'Interactive', 'Education']
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/40" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Showcasing my hardware and software expertise</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-blue-100/50 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
