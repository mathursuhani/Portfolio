export default function About() {
  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-blue-100/50 hover:shadow-3xl transition-shadow duration-300">
          <p className="text-lg text-gray-700 leading-8 mb-8 font-light">
            I am a dedicated Electronics & Communication Engineering student at Government Engineering College, Vaishali,
            with a strong foundation in both theoretical knowledge and practical application. My academic journey began
            with a diploma from Government Women's Polytechnic (2021-2024) where I achieved a CGPA of 8.19.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>

          <p className="text-lg text-gray-700 leading-8 font-light">
            I am passionate about leveraging technology to solve real-world problems, with hands-on experience in
            hardware projects like Anti-Theft Alarm systems and software development including Quiz applications.
            I combine technical expertise with strong soft skills to deliver innovative solutions and collaborate
            effectively in team environments.
          </p>
        </div>
      </div>
    </section>
  );
}
