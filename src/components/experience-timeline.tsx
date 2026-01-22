import { experiences } from '@/types/experience';
import { Building2, MapPin, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TimelineEntryProps {
  children: React.ReactNode;
  index: number;
}

function TimelineEntry({ children, index }: TimelineEntryProps) {
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
            {/* Vertical line with gradient - animated */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border origin-top transform md:-translate-x-px"
            />

            {/* Timeline entries */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isFirst = index === 0;
                const isLast = index === experiences.length - 1;
                const [isOpen, setIsOpen] = useState(false);

                return (
                  <TimelineEntry key={exp.id} index={index}>
                    {/* Enhanced dot indicator - animated */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15,
                        type: 'spring',
                        stiffness: 300
                      }}
                      animate={isFirst ? {
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }
                      } : {}}
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

                      {/* Role Card with Collapsible */}
                      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                        <CollapsibleTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.2
                            }}
                            className="bg-card border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2">
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
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors hidden sm:inline-block">
                                  {isOpen ? 'Hide' : 'View'} Details
                                </span>
                                <ChevronDown
                                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                                    isOpen ? 'rotate-180' : ''
                                  }`}
                                />
                              </div>
                            </div>
                          </motion.div>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-4 pt-4 border-t space-y-4">
                          {/* Full Responsibilities */}
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              Responsibilities
                            </p>
                            <ul className="text-sm text-foreground space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                Key Achievements
                              </p>
                              <ul className="text-sm text-foreground space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tech Stack Badge */}
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">Tailwind CSS</Badge>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
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
