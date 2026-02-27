import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '@/app/data/projects';

export function ProjectsSection() {
  const navigate = useNavigate();
  const projects = projectsData;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Real-world applications of Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glassmorphic-card p-6 rounded-xl group relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              onClick={() => navigate(`/project/${project.id}`)}
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
                  <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-full transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/5 border border-cyan-500/30 rounded-full text-cyan-400 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-white/5 border border-cyan-500/30 rounded-full text-cyan-400 backdrop-blur-sm">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
