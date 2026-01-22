import { experiences } from '@/types/experience';
import { Building2 } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey at Logicwind, from Junior React Developer to Senior Frontend Developer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px" />

            {/* Timeline entries */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative md:grid md:grid-cols-2 md:gap-8 items-start"
                >
                  {/* Dot indicator */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 top-8 md:top-6 border-4 border-background z-10" />

                  {/* Content - alternates left/right on desktop */}
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'} ml-8 md:ml-0`}>
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                    </div>

                    {/* Role Card */}
                    <div className="bg-card border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.location}
                      </p>
                      <p className="text-sm mb-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
