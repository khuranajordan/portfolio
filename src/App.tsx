import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { SkillsSection } from '@/components/skills-section';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Hero />

        <section id="about" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Section</h2>
            <p className="text-muted-foreground">Professional journey</p>
          </div>
        </section>

        <ExperienceTimeline />

        <SkillsSection />

        <section id="projects" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Projects Section</h2>
            <p className="text-muted-foreground">Portfolio showcase</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Section</h2>
            <p className="text-muted-foreground">Get in touch</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
