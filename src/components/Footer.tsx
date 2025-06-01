// src/components/Footer.tsx

import React from 'react';
import { Github, Linkedin, /* Twitter, */ Brain } from 'lucide-react'; // Removed Twitter
import { Link as ScrollLink } from 'react-scroll'; // Renamed to ScrollLink to avoid confusion

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary bg-opacity-20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 text-sm"> {/* Adjusted grid and text size */}
          {/* Column 1: Name and Bio */}
          <div className="md:col-span-2 lg:col-span-2"> {/* Takes more space on larger screens */}
            <ScrollLink 
              to="hero" // Assuming your hero section has id="hero"
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="flex items-center space-x-2 mb-4 cursor-pointer w-max" // w-max to make only logo/name clickable
            >
              <Brain size={32} className="text-accent" />
              <span className="text-2xl font-bold text-white">Youssef Elbegermy</span> {/* YOUR NAME */}
            </ScrollLink>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Motivated AI & Data Enthusiast with strong foundations in Python, statistics, and machine learning. 
              Passionate about applying ML to real-world challenges and continuously growing technical knowledge. {/* Adapted from your CV summary */}
            </p>
            <div className="flex space-x-5"> {/* Increased spacing */}
              <a 
                href="https://github.com/YoussefElBegirmy" // YOUR GITHUB
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={22} /> {/* Slightly larger icons */}
              </a>
              <a 
                href="https://www.linkedin.com/in/youssef-elbegermy/" // YOUR LINKEDIN
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} /> {/* Slightly larger icons */}
              </a>
              {/* Twitter link removed */}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1"> {/* Adjusted span for better layout */}
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5"> {/* Increased spacing */}
              <li>
                <ScrollLink to="hero" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="experience" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="projects" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="skills" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Skills
                </ScrollLink>
              </li>
               <li>
                <ScrollLink to="certifications" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Certifications
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className="lg:col-span-1">  {/* Adjusted span for better layout */}
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2.5"> {/* Increased spacing */}
              <li>
                <a href="mailto:yelbegermy@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                  yelbegermy@gmail.com {/* YOUR EMAIL */}
                </a>
              </li>
              <li className="text-gray-300">
                Cairo, Egypt {/* YOUR LOCATION */}
              </li>
              <li className="mt-1"> {/* Added margin-top */}
                <ScrollLink to="contact" smooth={true} offset={-70} duration={500} className="font-medium text-accent hover:underline cursor-pointer">
                  Send a message
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8"> {/* Added margin-top */}
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Youssef Elbegermy. All rights reserved. {/* YOUR NAME */}
          </p>
          {/* Optional: Add a small credit or "Made with..." if you like */}
          {/* <p className="text-center text-xs text-gray-500 mt-2">
            Built with React & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
