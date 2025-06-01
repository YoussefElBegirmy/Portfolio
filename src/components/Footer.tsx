import React from 'react';
import { Github, Linkedin, Twitter, Brain } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary bg-opacity-20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain size={32} className="text-accent" />
              <span className="text-2xl font-bold">John Doe</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Crafting intelligent solutions through AI innovation. Specialized in machine learning, deep learning, 
              and building scalable AI systems that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="home" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-accent cursor-pointer transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                johndoe@example.com
              </li>
              <li className="text-gray-300">
                San Francisco, CA
              </li>
              <li>
                <Link to="contact" smooth={true} offset={-70} duration={500} className="text-accent hover:underline cursor-pointer">
                  Send a message
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;