import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Target, Zap } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  role: string;
  description: string;
  icon: typeof CheckCircle2;
  achievements: string[];
}

export function ProfessionalJourney() {
  const milestones: Milestone[] = [
    {
      year: "2019",
      title: "Started Journey",
      role: "Computer Science Student",
      description: "Began Bachelor's degree in Computer Applications at Gujarat University",
      icon: Target,
      achievements: [
        "Strong foundation in programming fundamentals",
        "Learned HTML, CSS, and JavaScript",
        "Built first web applications"
      ]
    },
    {
      year: "2022",
      title: "Joined Logicwind",
      role: "Junior Frontend Developer",
      description: "Started professional career at Logicwind as Junior Developer",
      icon: Zap,
      achievements: [
        "Worked on production React applications",
        "Gained expertise in TypeScript",
        "Collaborated with senior developers"
      ]
    },
    {
      year: "2023",
      title: "Role Progression",
      role: "Frontend Developer",
      description: "Promoted to Frontend Developer with increased responsibilities",
      icon: CheckCircle2,
      achievements: [
        "Led frontend development for e-commerce platform",
        "Implemented complex state management with Redux",
        "Improved application performance by 40%"
      ]
    },
    {
      year: "2024",
      title: "Senior Developer",
      role: "Senior Frontend Developer",
      description: "Currently working as Senior Frontend Developer at Logicwind",
      icon: Trophy,
      achievements: [
        "Mentoring junior developers",
        "Leading technical decisions",
        "Delivering high-quality, scalable solutions"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Professional Journey
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My path from curious student to Senior Frontend Developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                  />
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {milestone.year}
                        </Badge>
                        <h4 className="text-xl font-bold mb-1">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-primary font-semibold">
                          {milestone.role}
                        </p>
                      </div>
                      <milestone.icon className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        Key Achievements
                      </p>
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary flex-shrink-0">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto p-6 bg-primary/5 border-primary/20">
            <p className="text-sm text-muted-foreground mb-2">
              🚀 The journey continues...
            </p>
            <p className="text-sm">
              Always learning, always growing. Excited for what's next!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
