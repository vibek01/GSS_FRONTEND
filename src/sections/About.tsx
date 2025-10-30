import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Target, Eye, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-[#1E3A8A]" size={40} />,
      title: 'Our Mission',
      description: 'To empower rural and urban communities through quality education, skill development, and awareness programs that foster sustainable growth and self-reliance.',
    },
    {
      icon: <Eye className="text-[#1E3A8A]" size={40} />,
      title: 'Our Vision',
      description: 'A society where every individual has access to knowledge, opportunities, and resources needed to lead a dignified and prosperous life.',
    },
    {
      icon: <Heart className="text-[#1E3A8A]" size={40} />,
      title: 'Our Values',
      description: 'Integrity, compassion, inclusivity, and commitment to community welfare guide everything we do. We believe in transparent operations and collaborative growth.',
    },
  ];

  return (
    <Section id="about" background="light">
      {/* Main About Us section with a two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        
        {/* Left Column: Text Content */}
        {/* On mobile (order-2), this text will appear below the image */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4 text-center lg:text-left">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto lg:mx-0 mb-6"></div>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto lg:mx-0 leading-relaxed text-justify">
            Gyana Shree Social Society is a registered Self Help Group committed to creating positive
            change in communities. Established with the goal of bridging knowledge gaps and providing
            practical skills, we work tirelessly to uplift marginalized sections through holistic
            development programs.
          </p>
        </div>

        {/* Right Column: Image */}
        {/* On mobile (order-1), this image will appear on top */}
        <div className="order-1 lg:order-2">
          <img
            src="/group-photo.png" // Directly referencing the image from the 'public' folder
            alt="Members and beneficiaries of Gyana Shree Social Society"
            className="rounded-xl shadow-2xl w-full h-auto object-cover transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-primary/20"
          />
        </div>
      </div>

      {/* Mission, Vision, and Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {values.map((value, index) => (
          <Card 
            key={index} 
            hover // This prop enables the hover effect from your Card component
            className="text-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">{value.title}</h3>
            <p className="text-[#4B5563] leading-relaxed">{value.description}</p>
          </Card>
        ))}
      </div>

      {/* Our Story Section */}
      <div className="mt-20 bg-white rounded-lg p-8 lg:p-12 shadow-lg">
        <h3 className="text-2xl font-bold text-[#111827] mb-4 text-center sm:text-left">Our Story</h3>
        <p className="text-[#4B5563] leading-relaxed mb-4 text-justify">
          Founded in 2018, Gyana Shree Social Society emerged from a small group of dedicated
          community members who recognized the critical need for accessible education and skill
          development in underserved areas. What started as informal weekend training sessions has
          grown into a comprehensive community development initiative.
        </p>
        <p className="text-[#4B5563] leading-relaxed text-justify">
          Today, we serve hundreds of families across multiple districts, offering programs in
          vocational training, digital literacy, health awareness, women's empowerment, and
          sustainable agriculture. Our success is measured not in numbers, but in the transformed
          lives and strengthened communities we serve.
        </p>
      </div>
    </Section>
  );
};