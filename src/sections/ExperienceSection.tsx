// src/sections/ExperienceSection.tsx

import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  Briefcase, 
  GraduationCap
} from 'lucide-react'; // Removed Award as 'award' type isn't in CV data for this section
import SectionTitle from '../components/SectionTitle';
import { ExperienceData, Experience } from '../data/experienceData'; // Ensure Experience is imported

const ExperienceSection: React.FC = () => {
  const getIcon = (type: Experience['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase />;
      case 'education':
        return <GraduationCap />;
      default:
        // Fallback icon, though all current data has a defined type
        return <Briefcase />; 
    }
  };

  // Determine a dynamic section title based on content
  const getSectionTitleText = () => {
    const hasWork = ExperienceData.some(item => item.type === 'work');
    const hasEducation = ExperienceData.some(item => item.type === 'education');

    if (hasWork && hasEducation) {
      // If you want to separate them later, you might filter data and have two timelines
      // For now, a combined title
      return "Experience & Education"; 
    } else if (hasWork) {
      return "Work Experience";
    } else if (hasEducation) {
      return "Education";
    }
    return "My Journey"; // Default if neither (should not happen with current data)
  };

  return (
    <section id="experience" className="section bg-background">
      <div className="container">
        <SectionTitle>{getSectionTitleText()}</SectionTitle>
        
        <VerticalTimeline lineColor="var(--secondary)"> {/* Using secondary for the line */}
          {ExperienceData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`} // e.g., vertical-timeline-element--work
              contentArrowStyle={{ borderRight: '7px solid var(--secondary)' }} // Arrow matches card bg
              date={item.date}
              dateClassName="text-sm md:text-base text-gray-400 opacity-90 font-medium !block"
              iconStyle={{ 
                background: 'var(--accent)', 
                color: '#fff',
                boxShadow: '0 0 0 4px var(--background), 0 4px 10px rgba(0,0,0,0.3)', // Ring + shadow
              }}
              icon={getIcon(item.type)}
              // contentStyle is primarily handled by global CSS in index.css
            >
              <div> 
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <h4 className="text-md lg:text-lg text-accent mb-1 font-semibold">
                  {item.company}
                </h4>
                {item.location && (
                  <p className="text-sm text-gray-400 mb-3">{item.location}</p>
                )}
                
                {/* Responsibilities / Key Points */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mb-4">
                    {item.type === 'work' && <h5 className="font-semibold text-gray-200 mb-1.5 text-sm">Key Responsibilities:</h5>}
                    {/* For education, these are details like Major, GPA, so no explicit "Responsibilities" title */}
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                    {item.responsibilities.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed">{point}</li>
                    ))}
                    </ul>
                  </div>
                )}
                
                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-3 mb-4 p-3 bg-black bg-opacity-20 rounded-md border border-secondary">
                    <h5 className="font-semibold text-gray-200 mb-1.5 text-sm">
                      {item.type === 'education' ? 'Notable Points:' : 'Key Achievements:'}
                    </h5>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-xs md:text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <h5 className="w-full font-semibold text-gray-200 mb-1.5 text-sm">
                      {item.type === 'education' ? 'Relevant Coursework/Skills:' : 'Technologies & Skills:'}
                    </h5>
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
