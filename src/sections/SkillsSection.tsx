import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SkillsData } from '../data/skillsData';

interface SkillBarProps {
  name: string;
  level: number;
  experience: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, experience }) => {
  return (
    <div className="mb-6 group">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {experience}
        </span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-background">
      <div className="container">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsData.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-6 text-accent">{category.category}</h3>
              
              {category.skills.map((skill, idx) => (
                <SkillBar 
                  key={idx}
                  name={skill.name}
                  level={skill.level}
                  experience={skill.experience}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;