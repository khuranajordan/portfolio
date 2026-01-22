import { skillCategories } from '@/types/skills';
import { Badge } from '@/components/ui/badge';

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
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      {/* Skill Icon Placeholder */}
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-2xl">⚡</span>
                      </div>

                      {/* Skill Name */}
                      <div className="text-center space-y-1">
                        <p className="font-semibold text-sm">{skill.name}</p>

                        {/* Proficiency Indicator */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`h-1.5 w-1.5 rounded-full ${
                                level <= skill.proficiency
                                  ? 'bg-primary'
                                  : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Years (if applicable) */}
                        {skill.years && (
                          <p className="text-xs text-muted-foreground">
                            {skill.years} {skill.years === 1 ? 'year' : 'years'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
