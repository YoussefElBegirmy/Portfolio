// src/sections/ProjectsSection.tsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ProjectsData, Project } from '../data/projectsData';
import ProjectModal from '../components/ProjectModal';

const ProjectsSection: React.FC = () => {
  console.log('[ProjectsSection] Component attempting to render/re-render.'); // Log 1

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  console.log('[ProjectsSection] Imported ProjectsData:', JSON.stringify(ProjectsData, null, 2)); // Log 2 - Check if data is loaded

  const categories = ['all', ...new Set(ProjectsData.map(project => project.category))];
  console.log('[ProjectsSection] Generated categories:', categories); // Log 3

  const filteredProjects = filter === 'all'
    ? ProjectsData
    : ProjectsData.filter(project => project.category === filter);
  console.log(`[ProjectsSection] Filter is: "${filter}". Number of filtered projects: ${filteredProjects.length}`); // Log 4

  const handleOpenModal = (project: Project) => {
    console.log('[ProjectsSection] Opening modal for project:', project.title); // Log 5
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    console.log('[ProjectsSection] Closing modal.'); // Log 6
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);

  if (!ProjectsData || ProjectsData.length === 0) {
    console.warn('[ProjectsSection] ProjectsData is empty or undefined. Rendering nothing or a placeholder.'); // Log 7
    return (
      <section id="projects" className="section bg-secondary bg-opacity-5">
        <div className="container">
          <SectionTitle>Project Showcase</SectionTitle>
          <p className="text-center text-gray-400 py-10">No projects to display at the moment.</p>
        </div>
      </section>
    );
  }
  
  console.log('[ProjectsSection] About to render main JSX. Number of filtered projects to map:', filteredProjects.length); // Log 8

  return (
    <>
      <section id="projects" className="section bg-secondary bg-opacity-5" style={{ border: '2px dashed limegreen', padding: '10px' }}> {/* TEMPORARY BORDER */}
        <div className="container">
          <SectionTitle>Project Showcase</SectionTitle>
          {console.log("[ProjectsSection] Rendering category buttons.")} {/* Log 9 */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    console.log(`[ProjectsSection] Category filter set to: ${category}`); // Log 10
                    setFilter(category);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-base capitalize transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 ${
                    filter === category
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-secondary bg-opacity-20 text-gray-300 hover:bg-opacity-40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {console.log("[ProjectsSection] Rendering project grid. Filtered projects count:", filteredProjects.length)} {/* Log 11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              console.log(`[ProjectsSection] Mapping project card for: ${project.title}`); // Log 12
              return (
                <div
                  key={project.title}
                  className="card bg-secondary bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
                  onClick={() => handleOpenModal(project)}
                  onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(project)}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={selectedProject?.title === project.title}
                  aria-controls={selectedProject?.title === project.title ? "project-modal" : undefined}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => console.error(`[ProjectsSection] Image failed to load for ${project.title}: ${project.image}`, e)} // Log 13
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-300 drop-shadow-md">
                          {project.startDate} – {project.endDate}
                        </p>
                    </div>
                  </div>

                  <div className="p-5 pt-3 flex-grow flex flex-col">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2.5 py-1 text-xs bg-accent bg-opacity-15 text-accent rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="inline-block px-2.5 py-1 text-xs bg-accent bg-opacity-15 text-accent rounded-full">
                            + {project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-accent font-medium group-hover:underline">
                          View Details →
                        </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {console.log("[ProjectsSection] After project grid. Filtered projects count for 'not found' message:", filteredProjects.length, "Filter:", filter)} {/* Log 14 */}
          {filteredProjects.length === 0 && filter !== 'all' && (
            <p className="text-center text-gray-400 mt-12">No projects found in the "{filter}" category.</p>
          )}
           {filteredProjects.length === 0 && filter === 'all' && ProjectsData.length > 0 && (
             <p className="text-center text-gray-400 mt-12">Something went wrong, projects available but not showing with "all" filter.</p> // Should not happen
           )}
        </div>
      </section>

      {selectedProject && (
         <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectsSection;
