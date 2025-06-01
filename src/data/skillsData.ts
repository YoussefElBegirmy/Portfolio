export interface Skill {
  name: string;
  level: number;
  experience: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SkillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95, experience: '8+ years' },
      { name: 'JavaScript/TypeScript', level: 85, experience: '6+ years' },
      { name: 'Java', level: 70, experience: '3+ years' },
      { name: 'C++', level: 70, experience: '3+ years' },
    ]
  },
  {
    category: 'ML/DL Libraries & Frameworks',
    skills: [
      { name: 'PyTorch', level: 90, experience: '5+ years' },
      { name: 'TensorFlow', level: 85, experience: '6+ years' },
      { name: 'Scikit-Learn', level: 90, experience: '7+ years' },
      { name: 'Hugging Face', level: 85, experience: '3+ years' },
      { name: 'LangChain', level: 80, experience: '3+ years' },
      { name: 'Pandas', level: 80, experience: '3+ years' },
      { name: 'Numpy', level: 80, experience: '3+ years' },
    ]
  },
  {
    category: 'Cloud, DevOps & Tools',
    skills: [
      { name: 'Azure', level: 85, experience: '5+ years' },
      { name: 'AWS', level: 80, experience: '4+ years' },
      { name: 'Docker', level: 90, experience: '6+ years' },
      { name: 'CI/CD', level: 85, experience: '5+ years' },
      { name: 'Git/GitHub', level: 85, experience: '5+ years' }      
    ]
  },
  {
    category: 'AI Specializations & Data Expertise',
    skills: [
      { name: 'Computer Vision', level: 90, experience: '6+ years' },
      { name: 'Natural Language Processing', level: 85, experience: '5+ years' },
      { name: 'LLM Application Development / RAG', level: 80, experience: '4+ years' },
      { name: 'Data Engineering', level: 85, experience: '3+ years' },
      { name: 'Data Analysis & Visualization', level: 85, experience: '3+ years' },
      { name: 'MLOps', level: 85, experience: '3+ years' },
    ]
  },
    {
    category: 'Data Handling & Analysis Tools',
    skills: [
      { name: 'Power BI', level: 90, experience: '6+ years' },
      { name: 'Excel ', level: 85, experience: '5+ years' },
      { name: 'Pandas', level: 80, experience: '4+ years' },
      { name: 'NumPy', level: 85, experience: '3+ years' },
      { name: 'SQL', level: 85, experience: '3+ years' }
    ]
  },
      {
    category: 'Web/backend',
    skills: [
      { name: 'Flask', level: 90, experience: '6+ years' },
      { name: 'FastAPI', level: 85, experience: '5+ years' },
      { name: 'Django', level: 80, experience: '4+ years' },
    ]
  }
  
];
