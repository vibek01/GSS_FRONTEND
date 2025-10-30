import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#2C5F2D]" size={24} />,
      title: 'Visit Us',
      details: ['Nutan Nagar, Near ABC CAR ZONE, Agartala, Tripura - 799009'],
    },
    {
      icon: <Phone className="text-[#2C5F2D]" size={24} />,
      title: 'Call Us',
      details: ['+91 60092 33749', '+91 70855 90477'],
    },
    {
      icon: <Mail className="text-[#2C5F2D]" size={24} />,
      title: 'Email Us',
      details: ['gyanashreesocialsociety@gmail.com', 'sagarprasadbin@gmail.com'],
    },
  ];

  return (
    <Section id="contact" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-4">Contact Us</h2>
        <div className="w-20 h-1 bg-[#2C5F2D] mx-auto mb-6"></div>
        <p className="text-lg text-[#495057] max-w-3xl mx-auto leading-relaxed">
          Have questions or want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center">
            <div className="flex justify-center mb-4">{info.icon}</div>
            <h3 className="text-lg font-bold text-[#212529] mb-3">{info.title}</h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-[#495057]">
                {detail}
              </p>
            ))}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-2xl font-bold text-[#212529] mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#495057] mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#DEE2E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#495057] mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#DEE2E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#495057] mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-[#DEE2E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent transition-all resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-[#52B788]/10 border border-[#52B788] text-[#1B4332] px-4 py-3 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <Button type="submit" className="w-full flex items-center justify-center space-x-2" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} />
            </Button>
          </form>
        </Card>

        <div className="h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890123!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0.5rem', minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gyana Shree Social Society Location"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};
