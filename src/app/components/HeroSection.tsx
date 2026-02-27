import { Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 z-10">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Gulfam
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amjad
            </span>
          </h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-gray-300">
              <span className="text-cyan-400 font-semibold">BSIT Student</span> |{' '}
              <span className="text-purple-400 font-semibold">Machine Learning Enthusiast</span>
            </p>
            <p className="text-gray-400">
              University of Education, Township Campus, Lahore
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            I build{' '}
            <span className="text-orange-400 font-semibold">intelligent systems</span>{' '}
            that turn{' '}
            <span className="text-cyan-400 font-semibold">data</span>{' '}
            into{' '}
            <span className="text-purple-400 font-semibold">solutions</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Gulfam-Amjad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/gulfam-amjad-948179290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="mailto:gulfamamjad633@gmail.com"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative z-10">
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" />
            
            {/* Image container */}
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
              <img
                src="/gulfam.webp"
                alt="Gulfam Amjad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating particles around image */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
