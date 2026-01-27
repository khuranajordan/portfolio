import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';

// Lazy load heavy sections below the fold
const AboutSection = lazy(() => import('@/components/about-section').then(m => ({ default: m.AboutSection })));
const ExperienceTimeline = lazy(() => import('@/components/experience-timeline').then(m => ({ default: m.ExperienceTimeline })));
const SkillsSection = lazy(() => import('@/components/skills-section').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('@/components/projects-section').then(m => ({ default: m.ProjectsSection })));
const ContactSection = lazy(() => import('@/components/contact-section').then(m => ({ default: m.ContactSection })));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Hero />

        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ExperienceTimeline />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
