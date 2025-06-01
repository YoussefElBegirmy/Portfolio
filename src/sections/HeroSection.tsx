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
    <section id="home" className="relative h-screen flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#1A1A1A',
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
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#007AFF',
            },
            links: {
              color: '#007AFF',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Youssef Elbegermy <span className="text-accent">|</span> AI Engineer
        </h1>
        
        <div className="h-16 mb-12">
          <TypeAnimation
            sequence={[
              'Machine Learning Expert',
              2000,
              'Deep Learning Specialist',
              2000,
              'Computer Vision Engineer',
              2000,
              'NLP Practitioner',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-2xl lg:text-3xl"
            repeat={Infinity}
          />
        </div>
        
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="btn btn-primary inline-block mt-8"
        >
          View My Work
        </Link>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer text-accent"
        >
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;