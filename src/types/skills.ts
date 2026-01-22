export interface Skill {
  name: string;
  icon: string;
  category: Category;
  proficiency: 1 | 2 | 3 | 4 | 5;
  years?: number;
}

export type Category =
  | 'Frontend'
  | 'Backend'
  | 'Styling'
  | 'State Management'
  | 'Build Tools'
  | 'Testing'
  | 'Tools'
  | 'Soft Skills';

export interface SkillCategory {
  name: Category;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'Core frontend technologies and frameworks',
    skills: [
      { name: 'React.js', icon: 'ReactJs', category: 'Frontend', proficiency: 5, years: 3 },
      { name: 'Next.js', icon: 'NextJs', category: 'Frontend', proficiency: 4, years: 2 },
      { name: 'Vue.js', icon: 'VueJs', category: 'Frontend', proficiency: 3, years: 1 },
      { name: 'TypeScript', icon: 'Typescript', category: 'Frontend', proficiency: 5, years: 3 },
      { name: 'JavaScript', icon: 'JavaScript', category: 'Frontend', proficiency: 5, years: 3 },
      { name: 'HTML5', icon: 'Html5', category: 'Frontend', proficiency: 5, years: 3 },
      { name: 'CSS3', icon: 'Css3', category: 'Frontend', proficiency: 5, years: 3 },
    ]
  },
  {
    name: 'Styling',
    description: 'CSS frameworks and styling solutions',
    skills: [
      { name: 'Tailwind CSS', icon: 'TailwindCss', category: 'Styling', proficiency: 5, years: 3 },
      { name: 'SCSS', icon: 'Sass', category: 'Styling', proficiency: 4, years: 3 },
      { name: 'CSS Modules', icon: 'Css3', category: 'Styling', proficiency: 4, years: 2 },
    ]
  },
  {
    name: 'State Management',
    description: 'Application state management libraries',
    skills: [
      { name: 'Redux Toolkit', icon: 'Redux', category: 'State Management', proficiency: 5, years: 3 },
      { name: 'React Query', icon: 'ReactQuery', category: 'State Management', proficiency: 4, years: 2 },
      { name: 'Zustand', icon: 'Zustand', category: 'State Management', proficiency: 3, years: 1 },
    ]
  },
  {
    name: 'Build Tools',
    description: 'Development and build tooling',
    skills: [
      { name: 'Vite', icon: 'Vitejs', category: 'Build Tools', proficiency: 5, years: 2 },
      { name: 'Webpack', icon: 'Webpack', category: 'Build Tools', proficiency: 3, years: 1 },
      { name: 'npm', icon: 'Npm', category: 'Build Tools', proficiency: 5, years: 3 },
    ]
  },
  {
    name: 'Testing',
    description: 'Testing frameworks and libraries',
    skills: [
      { name: 'Jest', icon: 'Jest', category: 'Testing', proficiency: 4, years: 3 },
      { name: 'React Testing Library', icon: 'TestingLibrary', category: 'Testing', proficiency: 4, years: 3 },
    ]
  },
  {
    name: 'Backend',
    description: 'Backend development basics',
    skills: [
      { name: 'Node.js', icon: 'NodeJs', category: 'Backend', proficiency: 3, years: 2 },
      { name: 'Express.js', icon: 'Express', category: 'Backend', proficiency: 3, years: 2 },
    ]
  },
  {
    name: 'Tools',
    description: 'Development tools and platforms',
    skills: [
      { name: 'Git', icon: 'Git', category: 'Tools', proficiency: 5, years: 3 },
      { name: 'GitHub', icon: 'Github', category: 'Tools', proficiency: 5, years: 3 },
      { name: 'Figma', icon: 'Figma', category: 'Tools', proficiency: 4, years: 2 },
      { name: 'VS Code', icon: 'Vscode', category: 'Tools', proficiency: 5, years: 3 },
    ]
  },
  {
    name: 'Soft Skills',
    description: 'Professional skills and methodologies',
    skills: [
      { name: 'Agile/Scrum', icon: 'Users', category: 'Soft Skills', proficiency: 5 },
      { name: 'Problem Solving', icon: 'Lightbulb', category: 'Soft Skills', proficiency: 5 },
      { name: 'Team Collaboration', icon: 'Users', category: 'Soft Skills', proficiency: 5 },
      { name: 'Code Review', icon: 'Eye', category: 'Soft Skills', proficiency: 4 },
    ]
  }
];
