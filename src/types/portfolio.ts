export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  role: string;
  impact: string;
  category: 'Web3' | 'B2B' | 'Healthcare' | 'Education' | 'Fitness';
    liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  category: 'Backend & APIs' | 'Frontend (MERN)' | 'Cloud & DevOps' | 'Databases' | 'Web3' | 'Payments & Integrations';
  level: 'Expert' | 'Advanced' | 'Proficient';
}

export interface Experience {
  title: string;
  description: string;
  icon: string;
}