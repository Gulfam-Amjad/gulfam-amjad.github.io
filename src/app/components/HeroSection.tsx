import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Gulfam
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amjad
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-gray-300">
              <span className="text-cyan-400 font-semibold">BSIT Student</span> |{' '}
              <span className="text-purple-400 font-semibold">Machine Learning Enthusiast</span>
            </p>
            <p className="text-gray-400">
              University of Education, Township Campus, Lahore
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
          >
            I build{' '}
            <span className="text-orange-400 font-semibold">intelligent systems</span>{' '}
            that turn{' '}
            <span className="text-cyan-400 font-semibold">data</span>{' '}
            into{' '}
            <span className="text-purple-400 font-semibold">solutions</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="mailto:gulfam@example.com"
              className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" />
            
            {/* Image container */}
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
              <img
                src="https://images.unsplash.com/photo-1608662867938-f50663c033f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk1MjA3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gulfam Amjad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating particles around image */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
