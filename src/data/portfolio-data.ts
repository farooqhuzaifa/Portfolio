import { Project, Skill, Experience } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'gymuzzi',
    name: 'Gymuzzi',
    description: 'Comprehensive fitness platform with workout tracking, meal planning, and community features',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'AWS'],
    role: 'Full-Stack Lead Developer',
    impact: 'Built scalable backend supporting 10K+ users with real-time features',
    category: 'Fitness',
    liveUrl: 'https://gymuzzi.com',
    githubUrl: 'https://github.com/huzaifa/gymuzzi'
  },
  {
    id: 'pickle-zone',
    name: 'Pickle Zone',
    description: 'Web3 NFT marketplace with smart contract integration and decentralized trading',
    techStack: ['React', 'Node.js', 'Solidity', 'Web3.js', 'MongoDB', 'Ethereum'],
    role: 'Senior MERN + Blockchain Developer',
    impact: 'Architected smart contracts handling $500K+ in transactions',
    category: 'Web3',
    liveUrl: 'https://picklezone.com',
    githubUrl: 'https://github.com/huzaifa/pickle-zone'
  },
  {
    id: 'trustclarity',
    name: 'TrustClarity',
    description: 'B2B marketplace connecting verified suppliers with enterprise buyers',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    role: 'Backend Architecture Lead',
    impact: 'Designed RBAC system managing 1000+ business entities',
    category: 'B2B',
    liveUrl: 'https://store.trustclarity.com',
    githubUrl: 'https://github.com/huzaifa/trustclarity'
  },
  {
    id: 'idialogue',
    name: 'iDialogue',
    description: 'Interactive education platform with real-time collaboration and assessment tools',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Azure', 'WebRTC'],
    role: 'Full-Stack Developer',
    impact: 'Built real-time collaboration features for 5K+ students',
    category: 'Education',
    liveUrl: 'https://idialogue.com',
    githubUrl: 'https://github.com/huzaifa/idialogue'
  },
  {
    id: 'diabeteswala',
    name: 'DiabetesWala',
    description: 'Healthcare management platform for diabetes patients with AI-powered insights',
    techStack: ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS'],
    role: 'Senior Backend Developer',
    impact: 'Implemented secure patient data handling with HIPAA compliance',
    category: 'Healthcare',
    liveUrl: 'https://diabeteswala.com',
    githubUrl: 'https://github.com/huzaifa/diabeteswala'
  },
  {
    id: 'medkart',
    name: 'Medkart',
    description: 'Online pharmacy platform with prescription management and delivery tracking',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    role: 'MERN Stack Developer',
    impact: 'Built payment processing system handling 1000+ daily orders',
    category: 'Healthcare',
    liveUrl: 'https://medkart.in',
    githubUrl: 'https://github.com/huzaifa/medkart'
  },
  {
    id: 'mereka',
    name: 'Mereka',
    description: 'Subscription management platform with recurring billing and analytics',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
    role: 'Full-Stack Developer',
    impact: 'Architected subscription engine processing $100K+ monthly revenue',
    category: 'B2B',
    liveUrl: 'https://mereka.io',
    githubUrl: 'https://github.com/huzaifa/mereka'
  }
];


export const skills: Skill[] = [
  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', level: 'Expert' },
  { name: 'Express.js', category: 'Backend & APIs', level: 'Expert' },
  { name: 'REST APIs', category: 'Backend & APIs', level: 'Expert' },
  { name: 'GraphQL', category: 'Backend & APIs', level: 'Advanced' },
  { name: 'Socket.io', category: 'Backend & APIs', level: 'Advanced' },
  { name: 'Microservices', category: 'Backend & APIs', level: 'Advanced' },

  // Frontend (MERN)
  { name: 'React', category: 'Frontend (MERN)', level: 'Expert' },
  { name: 'TypeScript', category: 'Frontend (MERN)', level: 'Expert' },
  { name: 'Next.js', category: 'Frontend (MERN)', level: 'Advanced' },
  { name: 'Redux', category: 'Frontend (MERN)', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend (MERN)', level: 'Expert' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', level: 'Advanced' },
  { name: 'Azure', category: 'Cloud & DevOps', level: 'Advanced' },
  { name: 'Docker', category: 'Cloud & DevOps', level: 'Advanced' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', level: 'Proficient' },
  { name: 'CI/CD', category: 'Cloud & DevOps', level: 'Advanced' },

  // Databases
  { name: 'MongoDB', category: 'Databases', level: 'Expert' },
  { name: 'PostgreSQL', category: 'Databases', level: 'Advanced' },
  { name: 'Redis', category: 'Databases', level: 'Advanced' },
  { name: 'MySQL', category: 'Databases', level: 'Advanced' },

  // Web3
  { name: 'Ethereum', category: 'Web3', level: 'Advanced' },
  { name: 'Solidity', category: 'Web3', level: 'Advanced' },
  { name: 'Web3.js', category: 'Web3', level: 'Advanced' },
  { name: 'Smart Contracts', category: 'Web3', level: 'Advanced' },

  // Payments & Integrations
  { name: 'Stripe', category: 'Payments & Integrations', level: 'Expert' },
  { name: 'PayPal', category: 'Payments & Integrations', level: 'Advanced' },
  { name: 'Webhooks', category: 'Payments & Integrations', level: 'Expert' },
  { name: 'Third-party APIs', category: 'Payments & Integrations', level: 'Expert' }
];

export const experiences: Experience[] = [
  {
    title: 'System Architecture',
    description: 'Designed scalable microservices architectures handling millions of requests with 99.9% uptime',
    icon: 'Building'
  },
  {
    title: 'RBAC Implementation',
    description: 'Built enterprise-grade role-based access control systems for complex B2B platforms',
    icon: 'Shield'
  },
  {
    title: 'Payment Processing',
    description: 'Integrated Stripe and custom payment solutions processing $2M+ in transactions',
    icon: 'CreditCard'
  },
  {
    title: 'Real-time Systems',
    description: 'Implemented WebSocket and Socket.io solutions for live collaboration and notifications',
    icon: 'Zap'
  },
  {
    title: 'Cloud Deployments',
    description: 'Managed AWS and Azure deployments with auto-scaling and monitoring solutions',
    icon: 'Cloud'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized applications achieving 90+ Lighthouse scores and sub-second load times',
    icon: 'Gauge'
  }
];