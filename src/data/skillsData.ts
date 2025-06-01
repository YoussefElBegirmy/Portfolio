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
      { name: 'C++', level: 75, experience: '4+ years' },
      { name: 'Java', level: 70, experience: '3+ years' },
      { name: 'Go', level: 60, experience: '2+ years' }
    ]
  },
  {
    category: 'ML/DL Frameworks',
    skills: [
      { name: 'PyTorch', level: 90, experience: '5+ years' },
      { name: 'TensorFlow', level: 85, experience: '6+ years' },
      { name: 'Scikit-Learn', level: 90, experience: '7+ years' },
      { name: 'Hugging Face', level: 85, experience: '3+ years' },
      { name: 'ONNX', level: 80, experience: '3+ years' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85, experience: '5+ years' },
      { name: 'GCP', level: 80, experience: '4+ years' },
      { name: 'Docker', level: 90, experience: '6+ years' },
      { name: 'Kubernetes', level: 75, experience: '3+ years' },
      { name: 'CI/CD', level: 85, experience: '5+ years' }
    ]
  },
  {
    category: 'Specialized Skills',
    skills: [
      { name: 'Computer Vision', level: 90, experience: '6+ years' },
      { name: 'Natural Language Processing', level: 85, experience: '5+ years' },
      { name: 'Reinforcement Learning', level: 80, experience: '4+ years' },
      { name: 'MLOps', level: 85, experience: '3+ years' },
      { name: 'Data Engineering', level: 75, experience: '4+ years' }
    ]
  }
];