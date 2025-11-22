import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Government Engineering College, Vaishali',
      period: 'Present',
      status: 'Pursuing'
    },
    {
      degree: 'Diploma in Engineering',
      institution: "Government Women's Polytechnic",
      period: '2021 - 2024',
      cgpa: '8.19'
    }
  ];

  return (
    <section className="py-24 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          <span className="text-blue-600">Education</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Building strong foundations in ECE</p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-x-1 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-3 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="font-semibold text-gray-800">● {edu.period}</span>
                    {edu.cgpa && <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">CGPA: {edu.cgpa}</span>}
                    {edu.status && <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">{edu.status}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
