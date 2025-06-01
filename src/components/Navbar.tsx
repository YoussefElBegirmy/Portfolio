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
          <a href="#" className="flex items-center space-x-2 cursor-pointer">
            <Brain size={28} className="text-accent" />
            <span className="text-xl font-bold">Youssef Elbegermy</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">
              Home
            </Link>
            <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">
              Experience
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">
              Skills
            </Link>
            <Link to="certifications" spy={true} smooth={true} offset={-70} duration={500} className="nav-link cursor-pointer">
              Certifications
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-primary cursor-pointer">
              Contact Me
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-text cursor-pointer" onClick={toggleMenu}>
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
            className="nav-link text-2xl cursor-pointer"
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
            className="nav-link text-2xl cursor-pointer"
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
            className="nav-link text-2xl cursor-pointer"
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
            className="nav-link text-2xl cursor-pointer"
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
            className="nav-link text-2xl cursor-pointer"
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
            className="btn btn-primary text-xl mt-4 cursor-pointer"
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
