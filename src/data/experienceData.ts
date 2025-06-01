// src/data/experienceData.ts

export interface Experience {
  type: 'work' | 'education'; // Removed 'award' as it's not on your CV in this section
  title: string;
  company: string;
  location?: string; // Optional, as ASI Community doesn't list one
  date: string;
  responsibilities: string[]; // For education, these are details like Major, GPA
  achievements?: string[]; // CV doesn't explicitly list "achievements" under work, but points can be inferred
  technologies: string[]; // Key tools or skills used/taught
}

export const ExperienceData: Experience[] = [
  // WORK EXPERIENCE
  {
    type: 'work',
    title: 'Co-leader',
    company: 'ASI Community',
    // location: 'Cairo, Egypt', // Not specified on CV for this role
    date: '07/2024 – Present',
    responsibilities: [
      'Led 10 hands-on workshops empowering 50+ undergrads in CNNs, NLP, and AI deployment.',
      'Mentored 30+ students on real-world AI projects, guiding model deployments and fostering innovation.',
    ],
    achievements: [
      // Example: "Successfully guided X student projects to completion."
      // Example: "Achieved an average workshop rating of X/5."
    ],
    technologies: ['CNNs', 'NLP', 'AI Deployment', 'Mentorship', 'Workshop Facilitation', 'Guidance'],
  },
  {
    type: 'work',
    title: 'Data Analysis Instructor',
    company: 'Upgrade',
    location: 'Cairo, Egypt',
    date: '05/2024 – 09/2024',
    responsibilities: [
      'Led hands-on data analysis sessions for 10 students utilizing Power BI, Excel, and MySQL to derive insights from datasets.',
      'Developed and updated curriculum content focused on practical data analysis skills, aligning with industry standards.',
    ],
    achievements: [
      // Example: "Curriculum adopted by X subsequent cohorts."
    ],
    technologies: ['Power BI', 'Excel', 'MySQL', 'Data Analysis', 'Curriculum Development', 'Teaching', 'Instruction'],
  },
  {
    type: 'work',
    title: 'Data analysis Intern', // CV says "Data analysis Intern, Bi sloution"
    company: 'Bi sloution', // Please verify this company name, "Bi Solution" might be more likely
    location: 'Cairo, Egypt',
    date: '2022 – 07/2023', // Consider making start month more specific if known, e.g., "01/2022 – 07/2023"
    responsibilities: [
      'Analyzed raw datasets using Power BI and SQL to provide actionable business insights.',
      'Designed interactive dashboards for KPI tracking, improving executive decision-making by 20%.',
      'Collaborated with cross-functional teams to streamline data workflows and identify reporting needs.',
    ],
    achievements: [
      'Improved executive decision-making by 20% through interactive dashboards.',
    ],
    technologies: ['Power BI', 'SQL', 'Dashboard Design', 'KPI Tracking', 'Data Workflow Optimization'],
  },
  // EDUCATION
  {
    type: 'education',
    title: 'Computer Science', // Degree Name
    company: 'Higher Technological Institute (HTI)', // Institution Name
    location: 'Egypt', // Assuming location based on other Cairo entries, add if known
    date: '2021 – 2025',
    responsibilities: [ // Using 'responsibilities' for major and GPA
      'Major: Computer Science',
      'GPA: 3.3',
    ],
    achievements: [
      // Example: "Dean's List (Year)"
      // Example: "Led capstone project on X"
    ],
    technologies: ['Computer Science Fundamentals', /* Add key coursework areas if desired */ ],
  },
];
