import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Award, Target, Users, Calendar, Github, Zap } from 'lucide-react';
import { projectsData } from '@/app/data/projects';
import { useState } from 'react';

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-xl text-white font-bold transition-all hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <div className="relative z-20 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all text-lg font-bold group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back
          </button>
          <div className="text-sm text-gray-500 font-mono">PROJECT SHOWCASE</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-20">
        {/* HERO SECTION - ENHANCED TWO COLUMN */}
        <div className="mb-24">
          {/* Decorative top line with more colors */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">Featured Project</span>
            <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* LEFT: Title & Description */}
            <div className="lg:col-span-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                {project.fullDescription}
              </p>
              
              {/* Quick Stats Inline */}
              <div className="flex flex-wrap gap-4">
                {project.timeline && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-cyan-500/30">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400">{project.timeline}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-purple-500/30">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">{project.teamSize}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-blue-500/30">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">{project.tech.length} Technologies</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Icon Badge & Actions */}
            <div className="lg:col-span-2 flex flex-col items-center gap-6">
              <div className={`p-8 bg-gradient-to-br ${project.gradient} rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform`}>
                <Zap className="w-20 h-20 md:w-24 md:h-24 text-white" />
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex gap-3 w-full">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 hover:shadow-xl transition-all hover:scale-105`}
                  >
                    <Play className="w-4 h-4" />
                    Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 hover:bg-white/20 hover:border-cyan-400 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION - Compact Row Design */}
        <div className="mb-20">
          <div className="glass rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {project.timeline && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Timeline</p>
                    <p className="text-lg font-black text-white">{project.timeline}</p>
                  </div>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Team</p>
                    <p className="text-lg font-black text-white">{project.teamSize}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Tech Stack</p>
                  <p className="text-lg font-black text-white">{project.tech.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Results</p>
                  <p className="text-lg font-black text-white">{project.results.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER - Colorful */}
        <div className="my-16">
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full" />
        </div>

        {/* VIDEO & GALLERY SECTION - TWO COLUMN LAYOUT */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Media Showcase</span>
            </h2>
            <p className="text-base text-gray-400">Experience the project through video and images</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT: VIDEO SECTION */}
            {project.videoUrl && (
              <div>
                <div className="mb-4 border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Live Demo
                  </h3>
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-cyan-500/50 transition-all">
                  <div className="relative w-full bg-black aspect-video">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            )}

            {/* RIGHT: IMAGE GALLERY */}
            <div>
              <div className="mb-4 border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Gallery
                </h3>
              </div>
              
              {/* Main Featured Image */}
              <div className="mb-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group hover:border-purple-500/50 transition-all">
                {project.images[selectedImage] && (
                  <img
                    src={project.images[selectedImage]}
                    alt={`Project screenshot ${selectedImage + 1}`}
                    className="w-full h-auto object-cover aspect-video"
                  />
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {project.images.slice(0, 6).map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`group relative rounded-xl overflow-hidden border-2 transition-all h-16 ${
                      selectedImage === idx
                        ? 'border-purple-400 scale-105 ring-2 ring-purple-400/50'
                        : 'border-white/20 hover:border-purple-400/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER - Colorful */}
        <div className="my-16">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500/50 via-green-500/50 to-cyan-500/50 rounded-full" />
        </div>

        {/* CHALLENGES & SOLUTIONS - ENHANCED TWO COLUMN */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              <span className="text-orange-400">Challenges</span> <span className="text-gray-600">&</span> <span className="text-green-400">Solutions</span>
            </h2>
            <p className="text-base text-gray-400">Technical obstacles and innovative approaches</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: Challenges */}
            <div className="glass rounded-2xl p-6 border-2 border-orange-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold text-lg">⚠</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Challenges Faced</h3>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="group relative p-4 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 hover:border-orange-500/50 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-400 font-bold text-xs">{idx + 1}</span>
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Solutions */}
            <div className="glass rounded-2xl p-6 border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold text-lg">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Solutions Applied</h3>
              </div>
              <div className="space-y-4">
                {project.solutions.map((solution, idx) => (
                  <div key={idx} className="group relative p-4 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 hover:border-green-500/50 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 font-bold text-xs">{idx + 1}</span>
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed">{solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER - Colorful */}
        <div className="my-16">
          <div className="h-1 w-full bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-indigo-500/50 rounded-full" />
        </div>

        {/* KEY RESULTS & FEATURES - ENHANCED TWO COLUMN */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-3">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Achievements & Features</span>
            </h2>
            <p className="text-base text-gray-400">Measurable results and standout capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: Results */}
            <div className="glass rounded-2xl p-6 border-2 border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Key Results</h3>
              </div>
              <div className="space-y-3">
                {project.results.map((result, idx) => (
                  <div key={idx} className="group flex gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed pt-0.5">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Features */}
            <div className="glass rounded-2xl p-6 border-2 border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Core Features</h3>
              </div>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="group flex gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed pt-0.5">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER - Colorful */}
        <div className="my-16">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-cyan-500/50 rounded-full" />
        </div>

        {/* TECH STACK - TWO COLUMN LAYOUT */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* LEFT: Introduction */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="border-l-4 border-cyan-500 pl-6 mb-6">
                  <h2 className="text-4xl font-black mb-3">
                    <span className="text-cyan-400">Tech</span>
                    <br />
                    <span className="text-white">Stack</span>
                  </h2>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Powerful technologies and frameworks that bring this project to life
                  </p>
                </div>
                <div className="glass rounded-2xl p-6 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">{project.tech.length}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Tech Badges Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.tech.map((tech, idx) => (
                  <div
                    key={tech}
                    className={`group relative p-6 rounded-xl glass border border-white/10 hover:border-cyan-400/50 transition-all text-center overflow-hidden`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mx-auto mb-3 group-hover:scale-150 transition-transform" />
                      <p className={`text-base font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
                        {tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER - Colorful */}
        <div className="my-16">
          <div className="h-1 w-full bg-gradient-to-r from-yellow-500/50 via-orange-500/50 to-red-500/50 rounded-full" />
        </div>

        {/* CTA SECTION - ENHANCED TWO COLUMN CARD DESIGN */}
        <div className="mt-16">
          <div className="glass rounded-3xl p-8 border-2 border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black mb-2">
                <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  Ready to Explore?
                </span>
              </h2>
              <p className="text-sm text-gray-400">Check out the live demo or dive into the source code</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-6 py-6 bg-gradient-to-r ${project.gradient} rounded-xl font-bold text-white text-base flex flex-col items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:scale-105 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                  <Play className="w-8 h-8 relative z-10" />
                  <span className="relative z-10">View Live Demo</span>
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-6 bg-white/10 border-2 border-white/20 rounded-xl font-bold text-white text-base flex flex-col items-center justify-center gap-3 hover:bg-white/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <Github className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <span>Source Code</span>
                </a>
              )}
              <button
                onClick={() => navigate('/')}
                className="group relative px-6 py-6 bg-white/5 border-2 border-white/10 rounded-xl font-bold text-white text-base flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all hover:scale-105"
              >
                <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                <span>Back Home</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="mt-12 pt-12 border-t-2 border-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 text-center">
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full mb-8" />
          <p className="text-gray-500 font-mono text-sm">© 2026 Gulfam Amjad - Building the future with code</p>
        </div>
      </div>
    </div>
  );
}

