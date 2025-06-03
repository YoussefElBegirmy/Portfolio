// src/sections/HeroSection.tsx

import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const HeroSection: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#0A0A0A',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#8B5CF6',
            },
            links: {
              color: '#8B5CF6',
              distance: 160,
              enable: true,
              opacity: 0.35,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: {min: 0.3, max: 0.7},
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
      
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-12">
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-start">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-2xl overflow-hidden border-4 border-accent shadow-2xl hover:shadow-accent/30 transition-shadow duration-300">
            <img
              src="/images/profile/profile.jpg"
              alt="Youssef Elbegermy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left md:w-1/2 lg:w-3/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Youssef Elbegermy <span className="text-accent">|</span> AI Engineer
          </h1>
          
          <div className="h-16 mb-10 md:mb-12">
            <TypeAnimation
              sequence={[
                'Machine Learning Expert', 2000,
                'Deep Learning Specialist', 2000,
                'Computer Vision Engineer', 2000,
                'NLP Practitioner', 2000,
                'Data Scientist', 2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200"
              repeat={Infinity}
            />
          </div>
          
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="btn btn-primary inline-block px-8 py-3.5 text-lg"
          >
            View My Work
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer text-accent hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to experience section"
        >
          <ChevronDown size={36} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;