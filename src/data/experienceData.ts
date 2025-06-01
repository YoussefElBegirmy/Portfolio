// src/data/experienceData.ts

export interface Experience { // Renamed from ExperienceItem to Experience to match your provided interface
  type: 'work' | 'education' | 'award'; // Added 'award' as a possibility
  title: string;
  company: string; // For education, this could be 'Institution' or 'University'
  location: string;
  date: string;
  responsibilities: string[]; // For education, these could be 'Key Courses', 'Thesis', 'GPA'
  achievements?: string[];
  technologies: string[];
}

export const ExperienceData: Experience[] = [
  {
    type: 'work',
    title: 'Senior AI Engineer',
    company: 'TechVision AI',
    location: 'San Francisco, CA',
    date: 'Jan 2023 - Present',
    responsibilities: [
      'Lead a team of 5 AI engineers developing computer vision solutions for retail analytics',
      'Design and implement deep learning models for customer behavior analysis',
      'Optimize model inference for edge deployment on low-power devices',
      'Collaborate with product teams to define AI feature roadmaps'
    ],
    achievements: [
      'Reduced model inference time by 40% while maintaining accuracy through quantization and pruning',
      'Implemented a novel approach to multi-object tracking that improved accuracy by 25%',
      'Published research paper at CVPR 2023 on efficient vision transformers'
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Python', 'CUDA', 'Docker', 'AWS']
  },
  {
    type: 'work',
    title: 'Machine Learning Engineer',
    company: 'DataSmart Inc.',
    location: 'Seattle, WA',
    date: 'Mar 2020 - Dec 2022',
    responsibilities: [
      'Developed and deployed NLP models for sentiment analysis and entity extraction',
      'Built and maintained data processing pipelines for model training',
      'Created visualization tools for model performance monitoring',
      'Mentored junior engineers on ML best practices'
    ],
    achievements: [
      'Increased entity extraction F1 score from 0.72 to 0.86 using BERT-based models',
      'Reduced data processing time by 60% through parallel processing optimizations',
      'Led migration from on-premise to cloud-based ML infrastructure'
    ],
    technologies: ['Python', 'Hugging Face', 'Spark', 'Kubernetes', 'GCP', 'scikit-learn']
  },
  {
    type: 'work',
    title: 'AI Research Intern',
    company: 'Research Innovations Lab',
    location: 'Boston, MA',
    date: 'May 2019 - Feb 2020',
    responsibilities: [
      'Conducted research on reinforcement learning for robotics applications',
      'Implemented and evaluated various RL algorithms (PPO, SAC, TD3)',
      'Collaborated with hardware team to integrate ML models with robotic systems',
      'Presented research findings at internal and external conferences'
    ],
    achievements: [
      'Published 2 papers on sample-efficient reinforcement learning algorithms',
      'Developed a simulation environment that reduced physical testing needs by 70%'
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI Gym', 'ROS', 'C++', 'MATLAB']
  },
  {
    type: 'education',
    title: 'M.S. in Computer Science, AI Specialization',
    company: 'Stanford University', // Using 'company' field for Institution name
    location: 'Stanford, CA',
    date: '2017 - 2019',
    responsibilities: [ // Using 'responsibilities' for details like GPA, Thesis, etc.
      'GPA: 3.92/4.0',
      'Thesis: "Efficient Transfer Learning for Vision-Language Models"',
      'Research Assistant at Stanford AI Lab',
      'Teaching Assistant for Deep Learning and Computer Vision courses'
    ],
    achievements: [ // Can add academic awards or significant project outcomes here
      'Awarded Stanford Graduate Fellowship',
      'Best Thesis Award Nominee'
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'Probabilistic Graphical Models']
  }
];
