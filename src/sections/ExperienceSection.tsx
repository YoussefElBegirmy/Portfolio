// src/sections/ExperienceSection.tsx

import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Crucial for base styling
import { 
  Briefcase, 
  GraduationCap,
  Award // For 'award' type if you add it
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { ExperienceData, Experience } from '../data/experienceData'; // Import Experience interface

const ExperienceSection: React.FC = () => {
  const getIcon = (type: Experience['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase />;
      case 'education':
        return <GraduationCap />;
      case 'award': // Added case for 'award'
        return <Award />;
      default:
        return <Briefcase />; // Default icon
    }
  };

  const getSectionTitle = () => {
    // If you mix education and work, a more generic title might be better.
    // For now, assuming the primary focus is work experience.
    const hasWork = ExperienceData.some(item => item.type === 'work');
    const hasEducation = ExperienceData.some(item => item.type === 'education');

    if (hasWork && hasEducation) return "Journey & Milestones";
    if (hasWork) return "Professional Experience";
    if (hasEducation) return "Education";
    return "My Background";
  };

  return (
    <section id="experience" className="section bg-background">
      <div className="container">
        <SectionTitle>{getSectionTitle()}</SectionTitle>
        
        <VerticalTimeline lineColor="var(--secondary)">
          {ExperienceData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentArrowStyle={{ borderRight: '7px solid var(--secondary)' }}
              date={item.date}
              dateClassName="text-sm md:text-base text-gray-400 opacity-90 font-medium !block" // !block for better responsiveness
              iconStyle={{ 
                background: 'var(--accent)', 
                color: '#fff', 
                // Using a simpler shadow for broader compatibility, can revert to glow if preferred
                boxShadow: '0 0 0 4px var(--background), 0 4px 8px rgba(0,0,0,0.2)',
              }}
              icon={getIcon(item.type)}
              // contentStyle and other styles are best managed via global CSS overrides for consistency
              // provided in index.css for .vertical-timeline-element-content
            >
              <div> 
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <h4 className="text-md lg:text-lg text-accent mb-1 font-semibold"> 
                  {item.company} {/* This will show University name for education items */}
                </h4>
                <p className="text-sm text-gray-400 mb-3">{item.location}</p>
                
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mb-4">
                    {item.type !== 'education' && <h5 className="font-semibold text-gray-200 mb-1.5 text-sm">Responsibilities:</h5>}
                    {/* For education, 'responsibilities' are more like key points */}
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                    {item.responsibilities.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed">{point}</li>
                    ))}
                    </ul>
                  </div>
                )}
                
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-3 mb-4 p-3 bg-black bg-opacity-20 rounded-md border border-secondary"> {/* Slightly different bg for achievements box */}
                    <h5 className="font-semibold text-gray-200 mb-1.5 text-sm">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-xs md:text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block px-3 py-1.5 text-xs md:text-sm bg-accent bg-opacity-20 text-white font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
