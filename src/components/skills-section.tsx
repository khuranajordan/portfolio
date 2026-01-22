import { skillCategories } from '@/types/skills';
import { Badge } from '@/components/ui/badge';
import { getIconComponent } from '@/lib/icons';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, organized by category
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Category Description */}
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = getIconComponent(skill.icon);

                  return (
                    <div
                      key={skill.name}
                      className="bg-card border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-default"
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        {/* Skill Icon with better container */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                          {IconComponent ? (
                            <IconComponent className="w-7 h-7 text-primary" />
                          ) : (
                            <span className="text-2xl">⚡</span>
                          )}
                        </div>

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
                              {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                  key={level}
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
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
