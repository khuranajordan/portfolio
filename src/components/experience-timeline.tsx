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
      className={`relative flex flex-col gap-4 md:gap-6 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {children}
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
              className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-primary/20"
            />

            {/* Timeline entries */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isFirst = index === 0;
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
                        opacity: [0.8, 1, 0.8],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      } : {}}
                      className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] border-4 border-background"
                    />

                    {/* Content - alternates left/right on desktop */}
                    <div className="ml-12 md:ml-0 flex-1">
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
                            whileHover={{
                              y: -4,
                              transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.2
                            }}
                            className="relative p-6 md:p-8 rounded-2xl glass-premium hover:glass-elevated transition-all duration-500 border-l-4 border-primary/50 hover:border-primary cursor-pointer group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                                  {exp.title}
                                </h3>
                                <p className="text-sm md:text-base text-primary font-semibold mb-2">
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

                        <CollapsibleContent className="glass-subtle mt-4 rounded-xl p-4 border-t space-y-4">
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
