import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description:
        'Built a comprehensive ML dashboard for predicting customer behavior using regression and classification models.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Image Classification System',
      description:
        'Developed a deep learning model to classify images with high accuracy using convolutional neural networks.',
      tech: ['Python', 'TensorFlow', 'NumPy', 'OpenCV'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Sentiment Analysis Tool',
      description:
        'Created an NLP-based tool to analyze sentiment from social media data and generate insights.',
      tech: ['Python', 'NLTK', 'Pandas', 'Scikit-learn'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Sales Forecasting Model',
      description:
        'Designed a time series forecasting model to predict future sales trends and optimize inventory.',
      tech: ['Python', 'Prophet', 'Pandas', 'Seaborn'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Customer Segmentation',
      description:
        'Implemented K-means clustering algorithm to segment customers and enable targeted marketing.',
      tech: ['Python', 'Scikit-learn', 'Matplotlib', 'NumPy'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Data Visualization Platform',
      description:
        'Built an interactive platform for visualizing complex datasets with dynamic charts and graphs.',
      tech: ['Python', 'Plotly', 'Dash', 'Pandas'],
      gradient: 'from-pink-500 to-purple-600',
    },
  ];

  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Real-world applications of Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="project-card glassmorphic-card p-6 rounded-xl group relative overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg shadow-lg`}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300 group/btn">
                      <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-cyan-400" />
                    </button>
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-cyan-400" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/5 border border-cyan-500/30 rounded-full text-cyan-400 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
