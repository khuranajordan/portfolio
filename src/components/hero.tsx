import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-primary font-medium">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary">Rohan</span> Patel
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              Senior Frontend Developer
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build exceptional digital experiences with React, TypeScript, and modern web technologies.
            Transforming ideas into polished, performant applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-base px-8 py-6"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-base px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
