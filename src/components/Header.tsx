import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#work', label: 'Our Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Changed initial state to be more transparent
        isScrolled ? 'bg-white shadow-md' : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GSS</span>
              </div>
              <span
                className={`text-xl font-bold hidden sm:block transition-colors duration-300 ${
                  // Dynamically change text color based on scroll
                  isScrolled ? 'text-[#1E3A8A]' : 'text-white'
                }`}
              >
                Gyana Shree Social Society
              </span>
              <span
                className={`text-xl font-bold sm:hidden transition-colors duration-300 ${
                  // Dynamically change text color based on scroll
                  isScrolled ? 'text-[#1E3A8A]' : 'text-white'
                }`}
              >
                GSS
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 font-medium ${
                  // Dynamically change link color based on scroll
                  isScrolled
                    ? 'text-[#4B5563] hover:text-[#1E3A8A]'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              // Dynamically change menu icon color based on scroll
              isScrolled ? 'text-[#1E3A8A] hover:bg-[#F9FAFB]' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          // Ensure mobile menu has a solid background
          <div className="md:hidden pb-4 pt-2 border-t border-[#E5E7EB] bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-[#4B5563] hover:text-[#1E3A8A] hover:bg-[#F9FAFB] px-4 rounded-md transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};