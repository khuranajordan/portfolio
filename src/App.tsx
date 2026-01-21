import { Navigation } from '@/components/navigation';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Section placeholders for testing navigation */}
        <section id="hero" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Hero Section</h1>
            <p className="text-muted-foreground">Top of page</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Section</h2>
            <p className="text-muted-foreground">Professional journey</p>
          </div>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Experience Section</h2>
            <p className="text-muted-foreground">Work timeline</p>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center border-b">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Skills Section</h2>
            <p className="text-muted-foreground">Tech stack visualization</p>
          </div>
        </section>

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
    </div>
  );
}

export default App;
