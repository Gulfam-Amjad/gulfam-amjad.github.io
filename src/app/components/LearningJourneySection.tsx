import { BookOpen, Award, Code, Lightbulb, Rocket, Trophy } from 'lucide-react';

export function LearningJourneySection() {
  const milestones = [
    {
      icon: BookOpen,
      title: 'Started BSIT Journey',
      period: '2021',
      description: 'Began my Bachelor of Science in Information Technology at University of Education',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Code,
      title: 'Mastered Python',
      period: '2022',
      description: 'Developed strong foundation in Python programming and data structures',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Discovered Machine Learning',
      period: '2023',
      description: 'Fell in love with ML algorithms and started building intelligent systems',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Data Science Projects',
      period: '2024',
      description: 'Completed multiple data analysis and ML projects using Pandas, NumPy, and Scikit-learn',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Trophy,
      title: 'Advanced ML Techniques',
      period: '2025',
      description: 'Exploring deep learning, neural networks, and advanced statistical models',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Rocket,
      title: 'Future Goals',
      period: '2026',
      description: 'Aiming for ML internships and contributing to real-world AI solutions',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section
      id="learning"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            My path to becoming an ML enthusiast
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={milestone.title}
                  className={`flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glassmorphic-card p-6 rounded-xl group relative overflow-hidden hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3 justify-end md:justify-start">
                          <span
                            className={`px-4 py-1 text-sm font-bold bg-gradient-to-r ${milestone.color} rounded-full text-white`}
                          >
                            {milestone.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10">
                    <div className={`p-4 bg-gradient-to-br ${milestone.color} rounded-full shadow-2xl`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
