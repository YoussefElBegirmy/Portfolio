// src/components/ProjectModal.tsx
import React, { useEffect } from 'react';
import { Project } from '../data/projectsData';
import { ExternalLink, Github, X, ArrowLeft, Share2 } from 'lucide-react'; // Added ArrowLeft, Share2

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    // When the modal opens, add a class to the body to prevent background scroll
    document.body.classList.add('modal-open-behance');
    // Cleanup function to remove the class when the modal closes
    return () => {
      document.body.classList.remove('modal-open-behance');
    };
  }, []); // Empty dependency array means this effect runs once when mounted, and cleans up when unmounted

  if (!project) return null;

  // We don't need handleBackdropClick anymore as the close button is prominent
  // and the modal takes the full screen.

  return (
    <div
      id="project-modal-behance"
      className="fixed inset-0 bg-background z-[100] flex flex-col animate-fade-in-fast" // bg-background or a darker shade
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
          <div className="flex items-center gap-2">
            {/* Optional: Share button - implement functionality as needed */}
            <button 
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Share project"
              onClick={() => alert('Share functionality to be implemented!')} // Placeholder
            >
              <Share2 size={20} />
            </button>
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
        <div className="container mx-auto max-w-5xl"> {/* Max width for content */}
          
          {/* Project Image/Video (Main Visual) */}
          {project.image && ( // Or a video component if you have video URLs
            <div className="mb-8 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain max-h-[70vh]" // Adjust max-h as needed
              />
            </div>
          )}
          {/* If you had a video, it would be similar:
          {project.videoUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe src={project.videoUrl} title={project.title} className="w-full h-full" allowFullScreen />
            </div>
          )}
          */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column (Description, Links) */}
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

            {/* Right Column (Details, Tech, Metrics) */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-1">Dates</h4>
                <p className="text-sm text-gray-400">{project.startDate} – {project.endDate}</p>
              </div>
              
              // Inside ProjectModal.tsx, in the "Right Column (Details, Tech, Metrics)"
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        // OLD: className="px-2.5 py-1 text-xs bg-accent bg-opacity-20 text-accent rounded-full"
                        // NEW:
                        className="px-2.5 py-1 text-xs bg-accent bg-opacity-20 text-white font-medium rounded-full" // Changed to text-white and added font-medium
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
          
          {/* Optional: More images or content sections can be added here */}
          {/* For example:
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">Additional Visuals</h3>
            <img src="/path/to/another-image.jpg" alt="More details" className="w-full rounded-md shadow-lg"/>
          </div>
          */}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
