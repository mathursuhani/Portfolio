import { Users, Lightbulb, Clock, MessageCircle, Cpu, Code2 } from 'lucide-react';

export default function Skills() {
  const softSkills = [
    { name: 'Team Work', icon: Users },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Time Management', icon: Clock },
    { name: 'Flexibility', icon: MessageCircle },
    { name: 'Excellent Communication', icon: MessageCircle }
  ];

  const technicalSkills = [
    'C/C++ Programming',
    'Python',
    'Microcontrollers (Arduino, 8051)',
    'Circuit Design',
    'PCB Design',
    'Embedded Systems',
    'Digital Electronics',
    'Signal Processing',
    'MATLAB',
    'Proteus Simulation',
    'HTML/CSS',
    'JavaScript'
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/40 to-blue-50/30" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Technical expertise combined with essential soft skills</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </div>

            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-all duration-300 group"
                >
                  <skill.icon className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                <Cpu className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-full font-semibold hover:from-blue-100 hover:to-blue-50 hover:text-blue-700 transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
