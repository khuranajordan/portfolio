import { projects } from '@/types/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  // Separate projects by format
  const showcaseProjects = projects.filter(p => p.format === 'showcase');
  const cardProjects = projects.filter(p => p.format === 'card');

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building modern web applications
          </p>
        </div>

        {/* Showcase Projects - Full Featured */}
        <div className="space-y-16 mb-16">
          {showcaseProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {project.id === '1' ? (
                <>
                  {/* Hero Image Section for E-commerce */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-background to-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-4xl md:text-5xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Flagship E-commerce Platform
                      </p>
                      <Badge variant="default" className="mt-4">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-8 border-b space-y-6">
                    {/* Project meta */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>📅 {project.startDate} - {project.endDate}</span>
                      <span>•</span>
                      <span>⚡ React, TypeScript, Redux Toolkit</span>
                    </div>

                    <p className="text-base leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border rounded-lg bg-muted/30">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">10K+</p>
                        <p className="text-xs text-muted-foreground">Products</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">40%</p>
                        <p className="text-xs text-muted-foreground">Faster Load</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">100%</p>
                        <p className="text-xs text-muted-foreground">Test Coverage</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-6 md:px-8 py-4 border-b bg-muted/20">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Standard Project Header for other showcase projects */}
                  <div className="p-6 md:p-8 border-b">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="icon" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View on GitHub"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Project Details */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                {project.achievements && (
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                          <span>★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && (
                  <div>
                    <h4 className="font-semibold mb-3">Challenges & Solutions</h4>
                    <ul className="space-y-1">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Section */}
              <div className="bg-muted/30 p-6 md:p-8">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-semibold">Interested in this project?</h4>
                  <p className="text-muted-foreground">
                    Check out the code on GitHub or reach out to discuss
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {project.githubUrl && (
                      <Button size="lg" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card Projects - Grid Layout */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/50 group"
              >
                {/* Project Icon/Header */}
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h4 className="text-lg font-bold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
