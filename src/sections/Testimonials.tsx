import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sunita Patel',
      role: 'Tailoring Program Graduate',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      feedback: 'The vocational training program changed my life. I learned tailoring skills and now run my own small business from home. I can support my family and have gained confidence and independence.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Digital Literacy Participant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      feedback: 'I was hesitant about computers, but the patient instructors at Gyana Shree made learning easy. Now I can use email, search for information online, and even help my children with their studies.',
    },
    {
      name: 'Meena Devi',
      role: 'Women Empowerment Group Member',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=300',
      feedback: 'The financial literacy and leadership workshops opened my eyes to new possibilities. I learned to save, plan, and dream bigger. Today, I am a group leader helping other women in my village.',
    },
    {
      name: 'Prakash Singh',
      role: 'Organic Farming Workshop Attendee',
      image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=300',
      feedback: 'The sustainable agriculture training helped me reduce costs and improve my crop yield. The organic methods are better for the soil and my health. Thank you for bringing this knowledge to our village.',
    },
  ];

  return (
    <Section id="testimonials" background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">Testimonials</h2>
        <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
        <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
          Hear from the people whose lives have been touched by our programs. Their stories inspire us to continue our mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} hover>
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#111827]">{testimonial.name}</h3>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>
                  <Quote className="text-[#1E3A8A] opacity-30" size={24} />
                </div>
                <p className="text-[#4B5563] leading-relaxed mt-3 italic">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
