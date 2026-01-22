export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Logicwind',
    location: 'Gujarat, India',
    startDate: 'Jan 2024',
    endDate: null,
    description: 'Leading frontend development initiatives and mentoring team members.',
    responsibilities: [
      'Architecting and implementing scalable frontend solutions',
      'Mentoring junior developers and conducting code reviews',
      'Collaborating with design and backend teams on feature development'
    ],
    achievements: [
      'Promoted to Senior role within 1 year',
      'Led development of key frontend features',
      'Mentored 3 junior developers'
    ]
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Logicwind',
    location: 'Gujarat, India',
    startDate: 'Jan 2023',
    endDate: 'Dec 2023',
    description: 'Developing and maintaining web applications with React and TypeScript.',
    responsibilities: [
      'Building responsive user interfaces with React and TypeScript',
      'Implementing state management with Redux Toolkit and React Query',
      'Optimizing application performance and code quality'
    ]
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'Logicwind',
    location: 'Gujarat, India',
    startDate: 'May 2022',
    endDate: 'Dec 2022',
    description: 'Focusing on React-based application development and feature implementation.',
    responsibilities: [
      'Developing reusable React components and hooks',
      'Integrating RESTful APIs and managing application state',
      'Working closely with UX designers to implement pixel-perfect designs'
    ]
  },
  {
    id: '4',
    title: 'Junior React Developer',
    company: 'Logicwind',
    location: 'Gujarat, India',
    startDate: 'Jan 2022',
    endDate: 'Apr 2022',
    description: 'Starting professional journey in React development.',
    responsibilities: [
      'Learning and implementing React best practices',
      'Building UI components from design specifications',
      'Collaborating with senior developers on feature development'
    ]
  }
];
