import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-[#F9FAFB]',
    gray: 'bg-[#F3F4F6]',
  };

  return (
    <section id={id} className={`py-16 md:py-20 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
