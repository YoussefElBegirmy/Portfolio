// src/components/ProjectModal.tsx
import React, { useEffect } from 'react';
import { Project } from '../data/projectsData';
import { ExternalLink, Github, X, ArrowLeft } from 'lucide-react'; // Removed Share2

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.classList.add('modal-open-behance');
    return () => {
      document.body.classList.remove('modal-open-behance');
    };
  }, []);

  if (!project) return null;

  return (
    <div
      id="project-modal-behance"
      className="fixed inset-0 bg-background z-[100] flex flex-col animate-fade-in-fast"
      role="dialog"
      aria-modal="true"
      aria-labelledby="behance-project-title"
    >
      {/* Modal Header (Fixed) */}
      <header className="sticky top-0 left-0 right-0 bg-secondary bg-opacity-80 backdrop-blur-md shadow-md p-4 z-10">
        <div className="container mx-auto flex items-center justify-between max-w-full px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close project"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 id="behance-project-title" className="text-xl md:text-2xl font-bold text-white truncate">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center"> {/* Removed gap-2 as share button is gone */}
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Close project"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Modal Scrollable Content Area */}
      <div className="flex-grow overflow-y-auto p-4 md:p-8">
        <div className="container mx-auto max-w-5xl">
          
          {project.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Project Description</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base">
                  {project.description}
                </p>
              </div>

              {(project.demoUrl || project.githubUrl) && (
                 <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Links</h3>
                    <div className="flex flex-wrap gap-4">
                        {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                        )}
                        {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline inline-flex items-center gap-2"
                        >
                            <Github size={18} />
                            Source Code
                        </a>
                        )}
                    </div>
                 </div>
              )}
            </div>

            <div className="md:col-span-1 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-1">Dates</h4>
                <p className="text-sm text-gray-400">{project.startDate} – {project.endDate}</p>
              </div>
              
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs bg-accent bg-opacity-20 text-white font-medium rounded-full" // MODIFIED HERE
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Metrics</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 pl-1">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx}>{metric}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
