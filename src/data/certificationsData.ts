export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expirationDate?: string;
  description?: string;
  badge: string;
  verificationUrl?: string;
}

export const CertificationsData: Certification[] = [
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'June 2023',
    expirationDate: 'June 2026',
    description: 'Professional certification demonstrating proficiency in building and training neural networks using TensorFlow.',
    badge: 'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://www.credential.net/example'
  },
  {
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: 'March 2022',
    expirationDate: 'March 2025',
    description: 'Validates expertise in using ML services and implementing ML solutions on the AWS platform.',
    badge: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://www.credly.com/example'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI',
    date: 'January 2021',
    description: 'Five-course specialization covering neural networks, hyperparameter tuning, CNNs, sequence models, and more.',
    badge: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/example'
  },
  {
    name: 'Professional Certificate in Computer Vision',
    issuer: 'OpenCV.org',
    date: 'November 2020',
    description: 'Comprehensive training in computer vision algorithms, applications, and deployment strategies.',
    badge: 'https://images.pexels.com/photos/11035501/pexels-photo-11035501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://opencv.org/courses/example'
  },
  {
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: 'July 2022',
    expirationDate: 'July 2024',
    description: 'Validates skills in designing and implementing AI solutions that leverage Azure cognitive services and machine learning.',
    badge: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/example/credentials'
  },
  {
    name: 'PyTorch Developer Certificate',
    issuer: 'PyTorch Foundation',
    date: 'May 2023',
    description: 'Advanced certification in building and deploying production-grade deep learning models with PyTorch.',
    badge: 'https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    verificationUrl: 'https://pytorchcertificate.example.com/verify'
  }
];