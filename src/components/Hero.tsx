import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 inline-block animate-fade-in">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            AR
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Abhilasha Raj
        </h1>

        <p className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Electronics & Communication Engineering
        </p>

        <p className="text-lg text-gray-600 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Government Engineering College, Vaishali
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="mailto:rajabhilasha2006ra@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/rajabhilasha2006ra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abhilasha-raj-a9922a308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <button
          onClick={handleScroll}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
