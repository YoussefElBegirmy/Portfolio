// src/sections/CertificationsSection.tsx

import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react'; // Added ShieldCheck for a generic icon
import SectionTitle from '../components/SectionTitle';
import { CertificationsData } from '../data/certificationsData';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section bg-secondary bg-opacity-5">
      <div className="container">
        <SectionTitle>Licenses & Certifications</SectionTitle> {/* Updated title slightly */}
        
        {CertificationsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CertificationsData.map((cert, index) => (
              <div 
                key={index} 
                className="card flex flex-col p-6 bg-secondary bg-opacity-30 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 rounded-xl"
                // Removed hover:translate-y-[-5px] for hover:scale
              >
                {/* Badge Image Area */}
                <div className="h-36 w-full bg-background bg-opacity-20 rounded-lg flex items-center justify-center mb-5 p-3 overflow-hidden"> {/* Container for badge */}
                  {cert.badge && cert.badge.startsWith('/') ? ( // Check if it's a local path
                    <img 
                      src={cert.badge} 
                      alt={`${cert.name} badge`} 
                      className="max-h-full max-w-full object-contain" // Use object-contain for badges
                    />
                  ) : (
                    // Fallback icon if no badge URL or it's not a local path (or use a generic placeholder image)
                    <ShieldCheck size={48} className="text-accent opacity-50" />
                  )}
                </div>
                
                <div className="flex flex-col flex-grow text-center"> {/* Added flex-grow here */}
                    <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                    <p className="text-accent text-sm mb-3">{cert.issuer}</p>
                    
                    <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
                    
                    {cert.description && (
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{cert.description}</p> // Added flex-grow to push link down
                    )}
                </div>
                
                {cert.verificationUrl && cert.verificationUrl !== '#' && ( // Only show if URL is valid
                  <div className="mt-auto text-center pt-3"> {/* mt-auto to push to bottom */}
                    <a 
                      href={cert.verificationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      Verify Credential
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No certifications listed at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
