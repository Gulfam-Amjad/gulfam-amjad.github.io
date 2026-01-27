import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: 'Machine Learning',
      skills: ['Machine Learning', 'Scikit-learn', 'Deep Learning', 'Model Training'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      category: 'Programming',
      skills: ['Python', 'NumPy', 'Pandas', 'Data Structures'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Data Analysis',
      skills: ['Data Analysis', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section
      id="skills"
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glassmorphic-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="skill-pill group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Critical Thinking',
              'Team Collaboration',
              'Research & Development',
              'Data Visualization',
              'Algorithm Design',
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-gray-300 backdrop-blur-md hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
              >
                {competency}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
