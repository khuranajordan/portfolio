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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />

      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Greeting */}
          <div className="space-y-2 md:space-y-4">
            <p className="text-base md:text-lg text-primary font-medium">
              Hi, I'm
            </p>

            {/* Name with gradient effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary">Rohan</span> Patel
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Senior Frontend Developer
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            I build exceptional digital experiences with React, TypeScript, and modern web technologies.
            Transforming ideas into polished, performant applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 px-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
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
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 md:pt-12 animate-bounce">
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
              className="h-10 w-10"
            >
              <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
