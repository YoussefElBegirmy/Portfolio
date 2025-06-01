import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SkillsData } from '../data/skillsData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-background">
      <div className="container">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsData.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-6 text-accent">{category.category}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2 bg-secondary bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;