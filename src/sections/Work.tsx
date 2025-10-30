import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Briefcase, Sparkles, Wrench, Leaf, Map } from 'lucide-react';

export const Work: React.FC = () => {
  // MODIFICATION: Updated all image extensions to .png
  const programs = [
    {
      icon: <Briefcase className="text-[#1E3A8A]" size={36} />,
      title: 'Rojgar Mela Participation',
      description: 'We actively participate in and organize Rojgar Melas, creating a vital platform to connect local youth with employers and meaningful job opportunities.',
      image: '/work-rojgar-mela.png',
    },
    {
      icon: <Sparkles className="text-[#1E3A8A]" size={36} />,
      title: 'Swachh Bharat Abhiyan',
      description: 'Our volunteers and community members regularly organize cleanliness drives, promoting hygiene and contributing to the national Swachh Bharat mission.',
      image: '/work-swachh-bharat.png',
    },
    {
      icon: <Wrench className="text-[#1E3A8A]" size={36} />,
      title: 'Skill India Training',
      description: 'In alignment with the Skill India mission, our centers provide certified training in various trades, empowering individuals with job-ready, practical skills.',
      image: '/work-skill-india.png',
    },
    {
      icon: <Leaf className="text-[#1E3A8A]" size={36} />,
      title: 'Practical Gardening Training',
      description: 'We conduct hands-on gardening and organic farming workshops, teaching sustainable practices that promote community self-reliance and food security.',
      image: '/work-gardening.png',
    },
    {
      icon: <Map className="text-[#1E3A8A]" size={36} />,
      title: 'Education Tour',
      description: 'We organize educational tours to historical sites, museums, and industry hubs, providing students with valuable exposure and real-world learning experiences.',
      image: '/work-education-tour.png',
    },
  ];

  return (
    <Section id="work" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">Our Work</h2>
        <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
        <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
          Through diverse programs and initiatives, we address critical community needs and create pathways for sustainable development and prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          // This parent Card component now correctly clips its children to its rounded shape.
          <Card key={index} hover className="rounded-xl shadow-lg overflow-hidden p-0">
            {/* 
              MODIFICATION:
              Added `rounded-t-xl` here. This is the crucial fix.
              It ensures the image container itself has rounded top corners,
              preventing it from overflowing the parent card's rounded shape.
            */}
            <div className="h-48 overflow-hidden rounded-t-xl">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-110 hover:scale-125"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">{program.title}</h3>
              <p className="text-[#4B5563] leading-relaxed">{program.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-[#F9FAFB] rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-[#111827] mb-4">Impact By Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div>
            <div className="text-4xl font-bold text-[#1E3A8A] mb-2">500+</div>
            <div className="text-[#4B5563]">People Trained</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1E3A8A] mb-2">50+</div>
            <div className="text-[#4B5563]">Villages Reached</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1E3A8A] mb-2">25+</div>
            <div className="text-[#4B5563]">Programs Conducted</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1E3A8A] mb-2">100+</div>
            <div className="text-[#4B5563]">Women Empowered</div>
          </div>
        </div>
      </div>
    </Section>
  );
};