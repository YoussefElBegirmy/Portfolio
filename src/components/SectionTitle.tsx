import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {children}
      </h2>
      <div className="mx-auto w-24 h-1 bg-accent"></div>
    </div>
  );
};

export default SectionTitle;