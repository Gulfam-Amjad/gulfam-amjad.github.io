import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Brain, Database, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Passionate about building intelligent systems and ML models',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights',
    },
    {
      icon: Code2,
      title: 'Python Development',
      description: 'Proficient in Python ecosystem for ML and data science',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glassmorphic-card p-8 md:p-12 rounded-2xl shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-cyan-400 font-semibold">Gulfam Amjad</span>, a{' '}
              <span className="text-purple-400 font-semibold">BSIT student</span> at the{' '}
              <span className="text-orange-400 font-semibold">University of Education, Township Campus, Lahore</span>,
              with a deep passion for{' '}
              <span className="text-cyan-400 font-semibold">Machine Learning</span> and{' '}
              <span className="text-purple-400 font-semibold">Artificial Intelligence</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              My journey in tech is driven by curiosity and the desire to create{' '}
              <span className="text-orange-400 font-semibold">intelligent solutions</span> that solve{' '}
              <span className="text-cyan-400 font-semibold">real-world problems</span>. I specialize in{' '}
              <span className="text-purple-400 font-semibold">data analysis</span>,{' '}
              <span className="text-cyan-400 font-semibold">machine learning algorithms</span>, and{' '}
              <span className="text-orange-400 font-semibold">Python development</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm constantly learning and exploring new technologies, working on exciting projects,
              and looking forward to contributing to the{' '}
              <span className="text-cyan-400 font-semibold">AI revolution</span>.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glassmorphic-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
