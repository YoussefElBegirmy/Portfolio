// src/components/ProjectModal.tsx
import React from 'react';
import { Project }_from '../data/projectsData'; // Adjust path if your data file is elsewhere
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Handle click outside to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-[100] transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-secondary rounded-lg shadow-xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100 animate-modal-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-accent pr-10">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-6">
          {project.startDate} – {project.endDate}
        </p>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-md mb-6 shadow-lg"
        />

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.description}</p>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm bg-accent bg-opacity-20 text-accent rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Key Metrics & Achievements</h3>
              <ul className="list-disc list-inside space-y-1.5 text-gray-300 pl-1">
                {project.metrics.map((metric, idx) => (
                  <li key={idx}>{metric}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-2">
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
      </div>
    </div>
  );
};

export default ProjectModal;
