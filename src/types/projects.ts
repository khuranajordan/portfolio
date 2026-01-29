export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Tool' | 'Other' | 'Real-Time Systems';
  format: 'showcase' | 'card';
  image?: string;
  images?: string[];
  techStack: string[];
  features: string[];
  achievements?: string[];
  challenges?: string[];
  liveUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  status: 'Completed' | 'In Progress' | 'Side Project';
}

export const projects: Project[] = [
  {
    id: '0',
    title: 'KNKY - Social Networking Platform',
    description: 'Real-time social platform with live chat, matchmaking, and media sharing',
    longDescription: 'Built a full-featured social networking platform with real-time features serving thousands of concurrent users. Implemented Socket.IO-based chat system, real-time matchmaking algorithm, and shared media galleries with event-driven UI and automatic reconnection strategies.',
    category: 'Real-Time Systems',
    format: 'showcase',
    startDate: 'Mar 2024',
    endDate: 'Present',
    status: 'In Progress',
    githubUrl: 'https://github.com/rohankhurana/knky',
    liveUrl: undefined,
    techStack: [
      'Next.js',
      'TypeScript',
      'Socket.IO',
      'WebSockets',
      'AWS EC2',
      'CloudFlare R2',
      'Zustand',
      'Tailwind CSS'
    ],
    features: [
      'Real-time chat with Socket.IO and event-driven UI',
      'Live matchmaking system with WebSocket connections',
      'Shared media galleries with real-time updates',
      'Automatic reconnection strategies for unstable connections',
      'Optimistic UI updates for instant feedback',
      'User presence indicators and typing indicators',
      'Push notifications for new messages and matches'
    ],
    achievements: [
      'Serving 1000s of concurrent users with sub-100ms message latency',
      'Reduced reconnection time by 60% through connection pooling',
      'Achieved 99.9% uptime for real-time features',
      'Scaled to 10,000+ daily active users'
    ],
    challenges: [
      'Implemented heartbeat mechanism to detect stale connections',
      'Used Socket.IO rooms to efficiently broadcast to user groups',
      'Optimized bundle size by 40% through code splitting for real-time features',
      'Built custom reconnection logic with exponential backoff',
      'Integrated CloudFlare R2 for media storage with CDN delivery'
    ]
  },
  {
    id: '1',
    title: 'Logicwind E-commerce Platform',
    description: 'Comprehensive e-commerce solution with modern frontend architecture.',
    longDescription: 'Led frontend development of a full-featured e-commerce platform for Logicwind. Implemented responsive design, shopping cart functionality, user authentication, and payment integration.',
    category: 'Full Stack',
    format: 'showcase',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Vite'],
    features: [
      'Responsive product catalog with filtering',
      'Shopping cart with persistent state',
      'User authentication and authorization',
      'Payment gateway integration',
      'Order tracking and history',
      'Admin dashboard for product management'
    ],
    achievements: [
      'Handled 10,000+ products efficiently',
      'Reduced page load time by 40%',
      'Implemented comprehensive testing suite'
    ],
    challenges: [
      'Optimizing performance for large product catalog',
      'Managing complex state across multiple features'
    ],
    status: 'Completed',
    startDate: 'Jan 2023',
    endDate: 'Dec 2023',
    githubUrl: 'https://github.com/rohan/ecommerce-platform'
  },
  {
    id: '2',
    title: 'Task Management Application',
    description: 'Productivity app for task tracking and team collaboration.',
    longDescription: 'Built a comprehensive task management application with real-time updates, drag-and-drop task organization, team workspaces, and progress tracking.',
    category: 'Full Stack',
    format: 'showcase',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Drag-and-drop task organization',
      'Real-time collaboration',
      'Team workspaces and permissions',
      'Progress tracking and analytics',
      'Deadline reminders and notifications',
      'Calendar integration'
    ],
    achievements: [
      'Improved team productivity by 35%',
      'Served 50+ active users',
      '99.9% uptime during peak usage'
    ],
    challenges: [
      'Implementing real-time updates without performance degradation',
      'Managing complex drag-and-drop state across multiple users',
      'Designing intuitive workspace hierarchy with flexible permissions'
    ],
    status: 'Completed',
    startDate: 'May 2022',
    endDate: 'Dec 2022',
    githubUrl: 'https://github.com/rohan/task-manager'
  },
  {
    id: '3',
    title: 'Weather Application',
    description: 'Real-time weather app with location-based forecasting.',
    longDescription: 'Created a weather application that provides real-time weather data, location-based forecasts, and interactive weather maps using external APIs.',
    category: 'Frontend',
    format: 'card',
    techStack: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    features: [
      'Location-based weather data',
      '7-day forecast display',
      'Interactive weather map',
      'Severe weather alerts',
      'Multiple location support'
    ],
    status: 'Completed',
    startDate: 'Jan 2022',
    endDate: 'Apr 2022',
    githubUrl: 'https://github.com/rohan/weather-app'
  },
  {
    id: '4',
    title: 'Expense Tracker',
    description: 'Personal finance tool for tracking expenses and budgeting.',
    longDescription: 'Developed a personal expense tracking application with categorization, budget management, spending analytics, and financial insights.',
    category: 'Tool',
    format: 'card',
    techStack: ['React', 'TypeScript', 'Chart.js', 'LocalStorage', 'Tailwind CSS'],
    features: [
      'Expense categorization',
      'Budget planning tools',
      'Spending analytics charts',
      'Financial insights',
      'Data export functionality'
    ],
    status: 'Completed',
    startDate: 'Jan 2022',
    endDate: 'Apr 2022',
    githubUrl: 'https://github.com/rohan/expense-tracker'
  },
  {
    id: '5',
    title: 'Blog Application',
    description: 'Content management system for technical articles and tutorials.',
    longDescription: 'Built a blog application with markdown support, code syntax highlighting, tag-based organization, and SEO optimization.',
    category: 'Full Stack',
    format: 'card',
    techStack: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS', 'Vercel'],
    features: [
      'Markdown article authoring',
      'Code syntax highlighting',
      'Tag and category system',
      'Search functionality',
      'SEO optimization',
      'RSS feed generation'
    ],
    status: 'Completed',
    startDate: 'Jan 2022',
    endDate: 'Apr 2022',
    githubUrl: 'https://github.com/rohan/blog'
  }
];
