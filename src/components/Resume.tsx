import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const handleDownloadResume = () => {
    const resumeData = `
ABHILASHA RAJ
rajabhilasha2006ra@gmail.com | +91 XXXX-XXXX-XXX
Vaishali, Bihar | GitHub: github.com/rajabhilasha2006ra | LinkedIn: linkedin.com/in/abhilasha-raj-a9922a308

PROFESSIONAL SUMMARY
Electronics & Communication Engineering student with strong foundation in hardware and software development. Experienced in circuit design, embedded systems, and application development. Demonstrated ability to solve complex problems with innovative solutions and excellent teamwork skills.

EDUCATION
B.Tech in Electronics & Communication Engineering
Government Engineering College, Vaishali | Currently Pursuing

Diploma in Engineering
Government Women's Polytechnic | 2021 - 2024 | CGPA: 8.19

TECHNICAL SKILLS
Programming Languages: C/C++, Python, JavaScript, HTML/CSS
Microcontrollers: Arduino, 8051
Hardware: Circuit Design, PCB Design, Sensors & Actuators
Embedded Systems: Digital Electronics, Signal Processing
Software Tools: MATLAB, Proteus Simulation, Embedded IDE
Applications: Quiz Application Development

SOFT SKILLS
• Team Work & Collaboration
• Problem Solving & Critical Thinking
• Time Management & Flexibility
• Excellent Communication Skills
• Leadership & Adaptability

PROJECTS
Anti-Theft Alarm System (Hardware Project)
• Developed hardware-based security system using sensors and microcontrollers
• Implemented circuit design and programming for reliable theft detection
• Integrated alarm trigger mechanism with electronic components
• Technologies: Microcontrollers, Sensors, Electronics

Quiz Application (Software Project)
• Built interactive quiz application with user-friendly interface
• Implemented timer functionality and real-time score tracking
• Designed gamification features and immediate feedback system
• Technologies: JavaScript, HTML/CSS, UI/UX Design

ACHIEVEMENTS
• Maintained CGPA of 8.19 throughout diploma program
• Successfully completed hardware and software projects
• Strong foundation in ECE fundamentals and practical applications

LANGUAGES
• English (Fluent)
• Hindi (Native)

CERTIFICATIONS & ADDITIONAL TRAINING
• Electronics Fundamentals
• Digital Electronics & Logic Design
• Embedded Systems Basics
`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeData));
    element.setAttribute('download', 'Abhilasha_Raj_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-24 px-4" id="resume">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          My <span className="text-blue-600">Resume</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Download or view my professional background</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Resume Overview</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                <p className="text-sm leading-relaxed">B.Tech in ECE from Government Engineering College, Vaishali. Diploma with 8.19 CGPA from Government Women's Polytechnic.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Expertise</h4>
                <p className="text-sm leading-relaxed">Microcontrollers, Circuit Design, Embedded Systems, Digital Electronics, C/C++, Python, Signal Processing, MATLAB.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Projects</h4>
                <p className="text-sm leading-relaxed">Anti-Theft Alarm System and Quiz Application showcasing hardware and software capabilities.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Key Strengths</h4>
                <p className="text-sm leading-relaxed">Problem solving, team collaboration, time management, excellent communication, and technical expertise.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Share</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Download my complete resume to see my full educational background, technical skills, project experience, and professional achievements in detail.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Complete academic history</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Detailed skill set</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Project descriptions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Achievements & certifications</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold group"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Resume Highlights</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.19</div>
              <p className="text-gray-700 font-medium">Diploma CGPA</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <p className="text-gray-700 font-medium">Completed Projects</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-700 font-medium">Technical Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
