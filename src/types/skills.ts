export interface Skill {
  name: string;
  icon: string;
  category: Category;
  proficiency: 1 | 2 | 3 | 4 | 5;
  years?: number;
}

export type Category =
  | 'Real-Time Systems'
  | 'Performance Engineering'
  | 'Leadership & Architecture'
  | 'Frontend Stack';

export interface SkillCategory {
  name: Category;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Real-Time Systems',
    description: 'Core competency in real-time, high-traffic frontend systems',
    skills: [
      { name: 'Socket.IO', icon: 'SocketIO', category: 'Real-Time Systems', proficiency: 5, years: 2 },
      { name: 'WebSockets', icon: 'WebSockets', category: 'Real-Time Systems', proficiency: 5, years: 2 },
      { name: 'Event-Driven UI', icon: 'EventDrivenUI', category: 'Real-Time Systems', proficiency: 5, years: 2 },
      { name: 'Next.js', icon: 'NextJs', category: 'Real-Time Systems', proficiency: 5, years: 3 },
      { name: 'React', icon: 'ReactJs', category: 'Real-Time Systems', proficiency: 5, years: 3 },
      { name: 'Reconnection Strategies', icon: 'RefreshCw', category: 'Real-Time Systems', proficiency: 4, years: 1 },
    ]
  },
  {
    name: 'Performance Engineering',
    description: 'Optimization techniques and performance monitoring',
    skills: [
      { name: 'Virtualization', icon: 'Virtualization', category: 'Performance Engineering', proficiency: 4, years: 2 },
      { name: 'Lazy Loading', icon: 'LazyLoading', category: 'Performance Engineering', proficiency: 5, years: 3 },
      { name: 'Code Splitting', icon: 'CodeSplitting', category: 'Performance Engineering', proficiency: 5, years: 3 },
      { name: 'Performance Optimization', icon: 'Performance', category: 'Performance Engineering', proficiency: 5, years: 3 },
      { name: 'Bundle Analysis', icon: 'BundleAnalysis', category: 'Performance Engineering', proficiency: 4, years: 2 },
      { name: 'Lighthouse Auditing', icon: 'Lighthouse', category: 'Performance Engineering', proficiency: 4, years: 2 },
    ]
  },
  {
    name: 'Leadership & Architecture',
    description: 'Team leadership and technical architecture experience',
    skills: [
      { name: 'Team Leadership', icon: 'TeamLeadership', category: 'Leadership & Architecture', proficiency: 5, years: 1 },
      { name: 'Technical Roadmap', icon: 'TechnicalRoadmap', category: 'Leadership & Architecture', proficiency: 4, years: 1 },
      { name: 'CI/CD', icon: 'CICD', category: 'Leadership & Architecture', proficiency: 5, years: 2 },
      { name: 'Code Review', icon: 'Eye', category: 'Leadership & Architecture', proficiency: 5, years: 3 },
      { name: 'Architecture Design', icon: 'Architect', category: 'Leadership & Architecture', proficiency: 4, years: 2 },
      { name: 'Technical Debt Management', icon: 'Hammer', category: 'Leadership & Architecture', proficiency: 4, years: 1 },
      { name: 'Monitoring', icon: 'Monitoring', category: 'Leadership & Architecture', proficiency: 4, years: 2 },
    ]
  },
  {
    name: 'Frontend Stack',
    description: 'Core frontend technologies and development tools',
    skills: [
      { name: 'TypeScript', icon: 'Typescript', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'JavaScript', icon: 'JavaScript', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'HTML5/CSS3', icon: 'Html5', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'Tailwind CSS', icon: 'TailwindCss', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'State Management', icon: 'Archive', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'Build Tools', icon: 'Vitejs', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'Testing', icon: 'Jest', category: 'Frontend Stack', proficiency: 4, years: 2 },
      { name: 'Git/GitHub', icon: 'Github', category: 'Frontend Stack', proficiency: 5, years: 3 },
      { name: 'AWS', icon: 'Cloud', category: 'Frontend Stack', proficiency: 4, years: 1 },
    ]
  }
];
