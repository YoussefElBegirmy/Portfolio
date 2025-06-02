// src/data/certificationsData.ts

export interface Certification {
  name: string;
  issuer: string;
  date: string; // Date issued. CV does not specify, using placeholder.
  expirationDate?: string; // Optional
  description?: string; // Brief description
  badge: string; // URL to the badge image. Using placeholders.
  verificationUrl?: string; // Optional link to verify
}

export const CertificationsData: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Issued: 24 June 2024', // Placeholder: Update with actual date
    // expirationDate: 'Expires: Please Update', // Add if applicable
    description: 'Validates expertise in applying data science and machine learning to implement and run machine learning workloads on Azure.',
    badge: '/images/badges/azure-data-scientist-associate.png', // Placeholder: Replace with actual badge URL (e.g., from Credly)
    verificationUrl: 'https://learn.microsoft.com/en-us/users/youssef-salah-2880/credentials/55c1a8d9ff74dc93?ref=https%3A%2F%2Fwww.linkedin.com%2F', // Placeholder: Replace with actual verification link
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI / Stanford CPD', // Combined issuers as per CV
    date: 'Completed: May 2024', // Placeholder: Update with actual completion date
    description: 'A comprehensive series of courses covering foundational and advanced topics in machine learning and deep learning.',
    badge: '/images/badges/deeplearning-ai-ml-specialization.png', // Placeholder: Replace with actual badge URL
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/9B74QLHDUBS7', // Placeholder: Replace with actual verification link from Coursera
  },
  {
    name: 'Wireless Communication for IOT',
    issuer: 'Information Technology Institute (ITI)',
    date: 'Completed: Aug 2024', // Placeholder: Update with actual completion date
    description: 'Focused on the principles and technologies behind wireless communication in Internet of Things (IoT) systems.',
    badge: '/images/badges/iti-iot-communication.png', // Placeholder: Replace with actual badge URL
    // verificationUrl: '#', // Placeholder: Add if ITI provides one
  },
  // Add more certifications if you have them
];
