import { useState } from 'react';
import { skillCategories, Category } from '@/types/skills';
import { Badge } from '@/components/ui/badge';
import { getIconComponent } from '@/lib/icons';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // Flatten all skills for 'All' view
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  // Get skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === 'All') return allSkills;
    return skillCategories.find(cat => cat.name === activeCategory)?.skills || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, organized by category
          </p>
        </div>

        {/* Category Filter Tabs */}
        <Tabs defaultValue="All" className="w-full mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger
              value="All"
              onClick={() => setActiveCategory('All')}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All ({allSkills.length})
            </TabsTrigger>
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                onClick={() => setActiveCategory(category.name as Category)}
              >
                {category.name} ({category.skills.length})
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Filtered Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filteredSkills.map((skill) => {
                const IconComponent = getIconComponent(skill.icon);

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-xl transition-all duration-300 group cursor-default relative overflow-hidden"
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      {/* Icon with enhanced hover */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300"
                      >
                        {IconComponent ? (
                          <IconComponent className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <span className="text-2xl">⚡</span>
                        )}
                      </motion.div>

                      {/* Skill Info */}
                      <div className="space-y-2 w-full">
                        <p className="font-semibold text-sm md:text-base leading-tight">
                          {skill.name}
                        </p>

                        {/* Proficiency Indicator with Label */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="text-muted-foreground">Level</span>
                            <span className="font-medium text-foreground">
                              {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.proficiency - 1]}
                            </span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((level, idx) => (
                              <motion.div
                                key={level}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: idx * 0.05, type: 'spring' }}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                  level <= skill.proficiency
                                    ? 'bg-primary'
                                    : 'bg-muted-foreground/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Years (if applicable) */}
                        {skill.years && (
                          <Badge variant="secondary" className="text-xs">
                            {skill.years} {skill.years === 1 ? 'year' : 'years'}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
