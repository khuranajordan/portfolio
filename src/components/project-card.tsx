import { Project } from '@/types/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-card border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group h-full flex flex-col"
    >
      {/* Card Header */}
      <div className="mb-4">
        <Badge variant="secondary" className="mb-3">
          {project.category}
        </Badge>
        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack - Show all on hover, preview default */}
      <div className="mb-4 flex-1">
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Meta Info */}
      <div className="text-xs text-muted-foreground mb-4 space-y-1">
        <p>📅 {project.startDate} - {project.endDate || 'Present'}</p>
        <p>📊 {project.status}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 mt-auto">
        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            asChild
          >
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
        {project.liveUrl && (
          <Button
            size="sm"
            className="flex-1"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
