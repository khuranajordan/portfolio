import { experiences } from '@/types/experience';
import { Building2, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface TimelineEntryProps {
  children: React.ReactNode;
  index: number;
  isAlternate: boolean;
}

function TimelineEntry({ children, index, isAlternate }: TimelineEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      className="relative md:grid md:grid-cols-2 md:gap-8 md:items-start"
    >
      {children}
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Career Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional growth at Logicwind, from Junior React Developer to Senior Frontend Developer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border transform md:-translate-x-px" />

            {/* Timeline entries */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isFirst = index === 0;
                const isLast = index === experiences.length - 1;
                const isAlternate = index % 2 === 0;

                return (
                  <TimelineEntry key={exp.id} index={index} isAlternate={isAlternate}>
                    {/* Enhanced dot indicator */}
                    <div
                      className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transform -translate-x-1/2 ${
                        isFirst ? 'bg-primary' : 'bg-background'
                      } ${!isLast ? 'top-8 md:top-6' : 'top-8 md:top-6'}`}
                    />

                    {/* Content - alternates left/right on desktop */}
                    <div
                      className={`ml-8 md:ml-0 ${
                        index % 2 === 0
                          ? 'md:text-right md:pr-8'
                          : 'md:col-start-2 md:pl-8'
                      }`}
                    >
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-3">
                        <Building2 className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate || 'Present'}
                        </span>
                      </div>

                      {/* Role Card */}
                      <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-base mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-sm text-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Responsibilities preview */}
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Key Responsibilities
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {exp.responsibilities.slice(0, 2).map((resp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                          {exp.responsibilities.length > 2 && (
                            <p className="text-xs text-muted-foreground italic pt-1">
                              +{exp.responsibilities.length - 2} more
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </TimelineEntry>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
