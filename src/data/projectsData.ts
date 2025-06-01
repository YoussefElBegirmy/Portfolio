export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string[];
}

export const ProjectsData: Project[] = [
  {
    title: 'DeepVision: Retail Analytics Platform',
    description: 'An end-to-end computer vision platform for retail environments that tracks customer movements, analyzes product interactions, and generates heatmaps of store activity. The system uses custom-trained YOLO models optimized for edge deployment on in-store cameras.',
    image: 'https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'computer vision',
    technologies: ['PyTorch', 'ONNX', 'TensorRT', 'React', 'Python', 'FastAPI'],
    demoUrl: 'https://example.com/deepvision-demo',
    githubUrl: 'https://github.com/johndoe/deepvision',
    metrics: [
      '95% accuracy in customer tracking',
      '30 FPS real-time processing on edge devices',
      'Deployed in 20+ retail stores nationwide'
    ]
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'A fine-tuned BERT model for sentiment analysis that works across multiple domains including product reviews, social media, and customer support interactions. The model is deployed as an API service with a simple web interface for demonstration purposes.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nlp',
    technologies: ['Hugging Face', 'TensorFlow', 'Flask', 'Docker', 'AWS Lambda'],
    demoUrl: 'https://example.com/sentiment-demo',
    githubUrl: 'https://github.com/johndoe/nlp-sentiment',
    metrics: [
      '92.7% accuracy on benchmark datasets',
      '50ms average inference time',
      '1M+ API calls per month'
    ]
  },
  {
    title: 'AutoML Pipeline Framework',
    description: 'An automated machine learning pipeline that handles data preprocessing, feature engineering, model selection, hyperparameter tuning, and deployment. The system uses a combination of Bayesian optimization and genetic algorithms to find optimal model configurations.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ml engineering',
    technologies: ['Python', 'scikit-learn', 'Optuna', 'MLflow', 'Kubernetes'],
    githubUrl: 'https://github.com/johndoe/automl-pipeline',
    metrics: [
      'Reduced model development time by 70%',
      'Consistently outperforms manual tuning by 5-10%',
      'Supports 30+ model types and 100+ preprocessing options'
    ]
  },
  {
    title: 'Reinforcement Learning for Robot Navigation',
    description: 'A reinforcement learning system that enables robots to navigate complex environments with obstacles and dynamic elements. The approach combines model-based and model-free RL methods with curriculum learning to accelerate training.',
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'reinforcement learning',
    technologies: ['PyTorch', 'OpenAI Gym', 'ROS', 'Python', 'C++'],
    demoUrl: 'https://example.com/rl-robot-demo',
    githubUrl: 'https://github.com/johndoe/rl-navigation',
    metrics: [
      '85% success rate in complex navigation tasks',
      '10x faster training compared to standard PPO',
      'Successfully deployed on 3 different robot platforms'
    ]
  },
  {
    title: 'Medical Image Segmentation Tool',
    description: 'A deep learning-based medical image segmentation tool that automatically identifies and outlines various anatomical structures and abnormalities in CT and MRI scans. The system uses a custom U-Net architecture with attention mechanisms for improved accuracy.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'computer vision',
    technologies: ['PyTorch', 'OpenCV', 'Python', 'Flask', 'DICOM'],
    demoUrl: 'https://example.com/medseg-demo',
    metrics: [
      'Dice coefficient of 0.91 on liver segmentation',
      '88% reduction in annotation time for radiologists',
      'CE marked as a Class I medical device'
    ]
  },
  {
    title: 'Financial Forecasting with Transformers',
    description: 'A time-series forecasting system for financial markets that uses transformer architectures to capture long-range dependencies and market patterns. The model incorporates both technical indicators and fundamental data to improve prediction accuracy.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'time series',
    technologies: ['PyTorch', 'Pandas', 'NumPy', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/johndoe/finance-transformer',
    metrics: [
      '23% improvement over ARIMA baselines',
      'Successfully predicts market turning points with 68% accuracy',
      'Processes data from 50+ global markets in real-time'
    ]
  }
];