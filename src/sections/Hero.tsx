import React from 'react';
import { Button } from '../components/Button';
import { ChevronDown } from 'lucide-react';
import mainImage from '../../main.jpg';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Reduced overlay from bg-black/50 to bg-black/40 to make the image brighter */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            // Added a text shadow to make the heading pop
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Gyana Shree Social Society
          </h1>
          <div className="w-32 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-6 font-light leading-relaxed"
            // Added a text shadow for better readability
            style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
          >
            Empowering Communities Through Knowledge
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto"
            // Added a text shadow for better readability
            style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
          >
            Dedicated to transforming lives through comprehensive training programs, community awareness initiatives, and sustainable development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToAbout} size="lg">
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1E3A8A]"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};