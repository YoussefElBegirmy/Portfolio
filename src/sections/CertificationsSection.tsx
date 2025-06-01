import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { CertificationsData } from '../data/certificationsData';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section bg-secondary bg-opacity-5">
      <div className="container">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CertificationsData.map((cert, index) => (
            <div 
              key={index} 
              className="card hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={cert.badge} 
                  alt={cert.name} 
                  className="h-40 w-full object-cover rounded-lg" // Increased height and added width
                />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-center">{cert.name}</h3>
              <p className="text-accent text-center mb-4">{cert.issuer}</p>
              
              <div className="text-center text-gray-400 mb-4">
                <span>{cert.date}</span>
                {cert.expirationDate && (
                  <span> · Expires: {cert.expirationDate}</span>
                )}
              </div>
              
              {cert.description && (
                <p className="text-gray-300 mb-6 text-center">{cert.description}</p>
              )}
              
              {cert.verificationUrl && (
                <div className="text-center">
                  <a 
                    href={cert.verificationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline"
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;