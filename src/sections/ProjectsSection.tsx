import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { ProjectsData } from '../data/projectsData';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(ProjectsData.map(project => project.category))];

  const filteredProjects = filter === 'all' 
    ? ProjectsData 
    : ProjectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-secondary bg-opacity-5">
      <div className="container">
        <SectionTitle>Project Showcase</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category 
                  ? 'bg-accent text-white' 
                  : 'bg-secondary bg-opacity-20 text-gray-300 hover:bg-opacity-30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card card group overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-2 py-1 text-xs bg-accent bg-opacity-20 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent hover:underline"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent hover:underline"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
                
                {project.metrics && (
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <h4 className="font-bold mb-2 text-sm">Key Metrics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                      {project.metrics.map((metric, idx) => (
                        <li key={idx}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;