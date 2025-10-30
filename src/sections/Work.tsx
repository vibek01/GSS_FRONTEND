import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { GraduationCap, Users, Laptop, Heart, Leaf, BookOpen } from 'lucide-react';

export const Work: React.FC = () => {
  const programs = [
    {
      icon: <GraduationCap className="text-[#1E3A8A]" size={36} />,
      title: 'Vocational Training',
      description: 'Hands-on skill development programs in tailoring, handicrafts, carpentry, and other trades to enhance employability and promote self-employment.',
      image: 'https://images.pexels.com/photos/7972721/pexels-photo-7972721.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Laptop className="text-[#1E3A8A]" size={36} />,
      title: 'Digital Literacy',
      description: 'Computer basics, internet usage, and digital tools training to bridge the digital divide and prepare community members for the modern economy.',
      image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Heart className="text-[#1E3A8A]" size={36} />,
      title: 'Health Awareness',
      description: 'Regular health camps, nutrition education, hygiene workshops, and awareness programs on preventive healthcare and wellness.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Users className="text-[#1E3A8A]" size={36} />,
      title: 'Women Empowerment',
      description: 'Leadership training, financial literacy, and support groups focused on enhancing women\'s participation in economic and social activities.',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Leaf className="text-[#1E3A8A]" size={36} />,
      title: 'Sustainable Agriculture',
      description: 'Organic farming techniques, water conservation methods, and sustainable practices to support local farmers and promote food security.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <BookOpen className="text-[#1E3A8A]" size={36} />,
      title: 'Adult Education',
      description: 'Literacy programs and continuing education opportunities for adults who missed formal schooling, promoting lifelong learning.',
      image: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=600',
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
          <Card key={index} hover className="overflow-hidden p-0">
            <div className="h-48 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
