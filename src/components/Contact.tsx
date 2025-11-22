import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          Get <span className="text-blue-600">In Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Let's collaborate and create something amazing</p>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100/50">
          <p className="text-lg text-gray-700 text-center mb-12 font-light leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:rajabhilasha2006ra@gmail.com"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group border border-blue-200 hover:border-blue-300"
            >
              <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-semibold">Email</div>
                <div className="text-gray-900 font-semibold group-hover:text-blue-700 transition-colors">rajabhilasha2006ra@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/rajabhilasha2006ra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-gray-300"
            >
              <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-semibold">GitHub</div>
                <div className="text-gray-900 font-semibold group-hover:text-gray-700 transition-colors">@rajabhilasha2006ra</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/abhilasha-raj-a9922a308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group border border-blue-200 hover:border-blue-300"
            >
              <div className="p-4 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1 font-semibold">LinkedIn</div>
                <div className="text-gray-900 font-semibold group-hover:text-blue-700 transition-colors">Abhilasha Raj</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-amber-700 mb-1 font-semibold">Location</div>
                <div className="text-gray-900 font-semibold">Vaishali, Bihar</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>© 2025 Abhilasha Raj. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
