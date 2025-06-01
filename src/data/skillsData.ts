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
      { name: 'Azure', level: 85, experience: '5+ years' },
      { name: 'AWS', level: 80, experience: '4+ years' },
      { name: 'Docker', level: 90, experience: '6+ years' },
      { name: 'CI/CD', level: 85, experience: '5+ years' }
    ]
  },
  {
    category: 'GenAI',
    skills: [
      { name: 'Rag systems', level: 90, experience: '6+ years' },
      { name: 'MCP', level: 85, experience: '5+ years' },
      { name: 'Whisper', level: 80, experience: '4+ years' },
      { name: 'Elevenlabs', level: 85, experience: '3+ years' },
      { name: 'Veo3', level: 85, experience: '3+ years' }
    ]
  },
    {
    category: 'Backend',
    skills: [
      { name: 'Django', level: 90, experience: '6+ years' },
      { name: 'MCP', level: 85, experience: '5+ years' },
      { name: 'Whisper', level: 80, experience: '4+ years' },
      { name: 'Elevenlabs', level: 85, experience: '3+ years' },
      { name: 'Veo3', level: 85, experience: '3+ years' }
    ]
  }
  
];
