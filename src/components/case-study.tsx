import { Project } from '@/types/projects';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <Card className="border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <Badge variant="secondary" className="mb-2">
          {project.category}
        </Badge>
        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
        <p className="text-primary/80">{project.startDate} - {project.endDate || 'Present'}</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Overview */}
        <div>
          <h4 className="font-semibold mb-2 text-lg">Overview</h4>
          <p className="text-muted-foreground">{project.longDescription}</p>
        </div>

        {/* Separator */}
        <div className="border" />

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-lg">Challenges</h4>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Separator */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="border" />
        )}

        {/* Solution */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Solution Approach</h4>
          <p className="text-muted-foreground mb-3">
            Leveraged modern frontend technologies and best practices to build a scalable,
            maintainable solution.
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-primary font-semibold">→</span>
              <p className="text-sm">Component-based architecture with React</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-semibold">→</span>
              <p className="text-sm">Redux Toolkit for state management</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-semibold">→</span>
              <p className="text-sm">TypeScript for type safety</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border" />

        {/* Results */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Results</h4>
          {project.achievements && (
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Separator */}
        <div className="border" />

        {/* Tech Stack */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
