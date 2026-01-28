import { Project } from '@/types/projects';
import { Badge } from '@/components/ui/badge';
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
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
      }}
      className="glass-premium rounded-3xl overflow-hidden glass-glow hover:glass-elevated p-6 transition-all duration-500 group h-full flex flex-col relative"
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
            <span
              key={`${tech}-${index}`}
              className="glass-subtle px-3 py-1 rounded-full text-sm font-medium border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-default hover:scale-105"
            >
              {tech}
            </span>
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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-subtle px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:glass-elevated transition-all duration-300 border border-white/10 hover:border-primary/30 flex-1 text-sm font-medium"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-subtle px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:glass-elevated transition-all duration-300 border border-white/10 hover:border-primary/30 flex-1 text-sm font-medium"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
