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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-card border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group h-full flex flex-col relative overflow-hidden"
    >
      {/* Shimmer effect on card */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
      {/* Card Header */}
      <div className="mb-4 relative z-10">
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

      {/* Tech Stack - All badges with enhanced styling */}
      <div className="mb-4 flex-1 relative z-10">
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, index) => (
            <Badge
              key={`${tech}-${index}`}
              variant="outline"
              className="hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 text-xs cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Meta Info */}
      <div className="text-xs text-muted-foreground mb-4 space-y-1 relative z-10">
        <p>📅 {project.startDate} - {project.endDate || 'Present'}</p>
        <p>📊 {project.status}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2 mt-auto relative z-10">
        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="flex-1 group/btn"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              Code
              <ExternalLink className="w-3 h-3 ml-2 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button
            size="sm"
            className="flex-1 group/btn"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              Live
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
