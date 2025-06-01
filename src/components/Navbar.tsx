import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Brain } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background bg-opacity-95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <Brain size={28} className="text-accent" />
            <span className="text-xl font-bold">John Doe</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Home
            </Link>
            <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Experience
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Skills
            </Link>
            <Link to="certifications" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
              Certifications
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-primary">
              Contact Me
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-text" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-background bg-opacity-95 z-50 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="nav-link text-2xl"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="experience" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="nav-link text-2xl"
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="nav-link text-2xl"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="skills" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="nav-link text-2xl"
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link 
            to="certifications" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="nav-link text-2xl"
            onClick={closeMenu}
          >
            Certifications
          </Link>
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="btn btn-primary text-xl mt-4"
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;