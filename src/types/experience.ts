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
    title: 'Team Lead – Frontend Systems',
    company: 'Ink In Caps',
    location: 'Gujarat, India',
    startDate: 'Jul 2025',
    endDate: null,
    description: 'Leading frontend architecture and 6-member team, reducing technical debt by 30% through CI/CD, performance budgets, and monitoring.',
    responsibilities: [
      'Architecting real-time features with Socket.IO and WebSocket connections',
      'Leading 6-member frontend team with technical roadmap and code reviews',
      'Implementing CI/CD pipelines and performance budgets (Lighthouse < 3s)',
      'Reducing technical debt by 30% through refactoring initiatives'
    ],
    achievements: [
      'Led frontend architecture for KNKY social networking platform (1000s of concurrent users)',
      'Built real-time chat and matchmaking with Socket.IO event-driven UI',
      'Implemented Sentry monitoring and AWS CloudWatch dashboards'
    ]
  },
  {
    id: '2',
    title: 'Senior Software Engineer – Frontend',
    company: 'Ink In Caps',
    location: 'Gujarat, India',
    startDate: 'Mar 2024',
    endDate: 'Jul 2025',
    description: 'Developing real-time, high-traffic frontend systems with Next.js and Socket.IO.',
    responsibilities: [
      'Built real-time features for KNKY platform with Socket.IO and WebSockets',
      'Implemented lazy loading, code splitting, and virtualization for performance',
      'Integrated AWS services (EC2, Lambda, CloudFlare Workers/R2)',
      'Collaborated with backend on real-time data synchronization'
    ],
    achievements: [
      'Served 1000s of concurrent users on KNKY social platform',
      'Optimized bundle size by 40% through code splitting',
      'Built event-driven UI with automatic reconnection strategies'
    ]
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Blodin Pvt. Ltd.',
    location: 'Gujarat, India',
    startDate: 'Jul 2023',
    endDate: 'Feb 2024',
    description: 'Developing React applications with focus on performance and user experience.',
    responsibilities: [
      'Built responsive React applications with TypeScript and Tailwind CSS',
      'Implemented state management with Redux, Zustand, and Recoil',
      'Optimized application performance and implemented lazy loading',
      'Collaborated with design team on pixel-perfect UI implementations'
    ]
  },
  {
    id: '4',
    title: 'Software Engineer',
    company: 'Tracxn Technologies',
    location: 'Bangalore, India',
    startDate: 'Jan 2023',
    endDate: 'Apr 2023',
    description: 'Frontend development for data analytics platform.',
    responsibilities: [
      'Developed React components for financial data visualization',
      'Worked with large datasets and implemented performance optimizations',
      'Collaborated with backend team on API integration',
      'Participated in code reviews and agile development processes'
    ]
  }
];
