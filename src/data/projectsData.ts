// src/data/projectsData.ts

export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string[];
}

export const ProjectsData: Project[] = [
  {
    title: 'Medica (Graduation Project)',
    startDate: '01/2025',
    endDate: '05/2025',
    description: `A multi-faceted AI graduation project focusing on healthcare solutions:
• AI Assistant: Developed an advanced RAG (Retrieval Augmented Generation) System chatbot utilizing Gemini API, LangChain, and Faiss. Successfully served over 150+ users weekly, providing intelligent assistance.
• Voice Interaction: Engineered and integrated bilingual (e.g., English/Arabic) voice interaction capabilities using Kokoro-ONNX for seamless real-time communication with the AI assistant.
• Cancer Detection: Designed, trained, and validated a Convolutional Neural Network (CNN) on a dataset of 20K augmented CT scans, achieving a 93% classification accuracy for identifying kidney-related conditions.`,
    shortDescription: 'AI-driven healthcare solutions including a RAG chatbot, bilingual voice interaction, and CNN-based cancer detection from CT scans.',
    image: 'https://images.unsplash.com/a-basket-filled-with-lots-of-different-types-of-vegetables-nXKDqpmdx_8',
    category: 'AI & Healthcare',
    technologies: ['Gemini API', 'LangChain', 'Faiss', 'Kokoro-ONNX', 'Hugging Face Transformers', 'CNNs (PyTorch/TensorFlow)', 'Flask', 'Docker'],
    githubUrl: 'https://github.com/YoussefElBegirmy/medica-graduation-project',
    metrics: [
      '150+ weekly users for AI Assistant',
      '93% classification accuracy in Cancer Detection',
      'Real-time bilingual voice interaction'
    ]
  },
  {
    title: 'Fruit & Vegetable Image Classifier',
    startDate: '09/2024',
    endDate: '12/2024',
    description: `Developed an efficient image classification system for identifying fruits and vegetables:
• Custom CNN Model: Built and trained a custom Convolutional Neural Network (CNN) achieving over 80%+ accuracy in classifying more than 40+ distinct types of fruits and vegetables.
• Optimized Training: Leveraged ImageNet pre-trained models for feature extraction (transfer learning), significantly reducing model training time by approximately 40%.
• Real-Time Web Application: Launched a responsive real-time web application for classification, which received positive feedback from early users for its intuitive design and performance.`,
    shortDescription: 'Custom CNN for 40+ fruit/vegetable types, optimized training, and a real-time web app.',
    image: 'https://images.unsplash.com/person-holding-black-round-plate-E9Ucfek-Lp0',
    category: 'Computer Vision',
    technologies: ['CNNs (PyTorch/TensorFlow)', 'ImageNet', 'Python', 'Flask/FastAPI', 'HTML/CSS/JavaScript'],
    demoUrl: 'https://YoussefElBegirmy.github.io/fruit-vegetable-classifier/',
    githubUrl: 'https://github.com/YoussefElBegirmy/fruit-vegetable-classifier',
    metrics: [
      '80%+ classification accuracy',
      'Identifies 40+ types of fruits and vegetables',
      'Training time reduced by 40% using transfer learning',
      'Real-time web application deployment'
    ]
  }
];
