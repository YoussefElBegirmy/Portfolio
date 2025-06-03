// src/data/certificationsData.ts

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
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Issued: 24 June 2024',
    expirationDate: 'Expires: 25 June 2025',
    description: 'Validates expertise in applying data science and machine learning to implement and run machine learning workloads on Azure.',
    badge: '/images/badges/microsoft.png',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/youssef-salah-2880/credentials/55c1a8d9ff74dc93?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera / DeepLearning.AI / Stanford CPD',
    date: 'Completed: May 2024',
    description: 'A comprehensive series of courses covering foundational and advanced topics in machine learning and deep learning.',
    badge: '/images/badges/coursera.jpg',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/9B74QLHDUBS7',
  },
  {
    name: 'Wireless Communication for IOT',
    issuer: 'Information Technology Institute (ITI)',
    date: 'Completed: Aug 2024',
    description: 'Focused on the principles and technologies behind wireless communication in Internet of Things (IoT) systems.',
    badge: '/images/badges/iti-iot.jpg',
    verificationUrl: 'https://www.linkedin.com/in/youssef-elbegermy/overlay/1728402084078/single-media-viewer/?profileId=ACoAADduGYYBVubIwDHoQ8BR_liqZmavtGE0m5w',
  },
];