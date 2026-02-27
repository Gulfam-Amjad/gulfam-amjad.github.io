import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StarfieldBackground } from '@/app/components/StarfieldBackground';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { LearningJourneySection } from '@/app/components/LearningJourneySection';
import { ContactSection } from '@/app/components/ContactSection';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    const cursorGlow = document.querySelector('.cursor-glow') as HTMLElement;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated starfield background */}
      <StarfieldBackground />

      {/* Cursor glow effect */}
      <div className="cursor-glow" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <SkillsSection />
          <LearningJourneySection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}