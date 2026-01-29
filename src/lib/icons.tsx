import * as LucideIcons from 'lucide-react';

export { Moon, Sun } from 'lucide-react';

export const Icons = LucideIcons;

export function getIconComponent(iconName: string): React.ComponentType<{ className?: string }> | null {
  const iconMap: Record<string, string> = {
    // Frontend
    'ReactJs': 'ReactIcon',
    'NextJs': 'Cpu',
    'VueJs': 'Box',
    'Typescript': 'FileCode',
    'JavaScript': 'FileCode',
    'Html5': 'FileCode',
    'Css3': 'FileCode',

    // Styling
    'TailwindCss': 'Palette',
    'Sass': 'FileCode',
    'CssModules': 'Layers',

    // State Management
    'Redux': 'Workflow',
    'ReactQuery': 'Database',
    'Zustand': 'Archive',

    // Build Tools
    'Vitejs': 'Zap',
    'Webpack': 'Box',
    'Npm': 'Package',
    'Yarn': 'Package',
    'Pnpm': 'Package',

    // Testing
    'Jest': 'CheckCircle',
    'TestingLibrary': 'Beaker',
    'Cypress': 'FlaskConical',

    // Backend
    'NodeJs': 'Server',
    'Express': 'Server',
    'NestJs': 'Server',
    'Fastify': 'Zap',

    // Tools
    'Git': 'GitBranch',
    'Github': 'Github',
    'Gitlab': 'Gitlab',
    'Bitbucket': 'Server',
    'Figma': 'PenTool',
    'Vscode': 'Code',
    'Chrome': 'Globe',

    // Soft Skills
    'Users': 'Users',
    'Lightbulb': 'Lightbulb',
    'Eye': 'Eye',
    'MessageSquare': 'MessageSquare',
    'Briefcase': 'Briefcase',

    // Real-Time Systems
    'SocketIO': 'Server',
    'WebSockets': 'Network',
    'EventDrivenUI': 'Zap',
    'RefreshCw': 'RefreshCw',

    // Performance Engineering
    'Virtualization': 'Layers',
    'LazyLoading': 'Loader',
    'CodeSplitting': 'Scissors',
    'Performance': 'Gauge',
    'BundleAnalysis': 'BarChart',
    'Lighthouse': 'Lightbulb',

    // Leadership & Architecture
    'TeamLeadership': 'Users',
    'TechnicalRoadmap': 'GitBranch',
    'CICD': 'Workflow',
    'Monitoring': 'Activity',
    'Architect': 'Building',
    'Hammer': 'Hammer',

    // Frontend Stack
    'Cloud': 'Cloud',
    'Archive': 'Archive',
  };

  const mappedName = iconMap[iconName];
  if (!mappedName) return null;

  const IconComponent = (LucideIcons as any)[mappedName];
  return IconComponent || null;
}
