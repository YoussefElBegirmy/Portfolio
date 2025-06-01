import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  Briefcase, 
  GraduationCap,
  Award
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { ExperienceData } from '../data/experienceData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section bg-background">
      <div className="container">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <VerticalTimeline lineColor="var(--accent)">
          {ExperienceData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{}}
              contentArrowStyle={{ borderRight: '7px solid var(--secondary)' }}
              date={item.date}
              iconStyle={{ background: 'var(--accent)', color: '#fff' }}
              icon={
                item.type === 'work' ? <Briefcase /> : 
                item.type === 'education' ? <GraduationCap /> : 
                <Award />
              }
            >
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <h4 className="text-lg text-accent mb-2">{item.company}</h4>
                <p className="text-gray-300 mb-4">{item.location}</p>
                
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-300">{responsibility}</li>
                  ))}
                </ul>
                
                {item.achievements && (
                  <div className="mt-4">
                    <h5 className="font-bold mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-3 py-1 text-sm bg-accent bg-opacity-20 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;