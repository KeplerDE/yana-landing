'use client';
import React, { useState, useEffect } from 'react';

type NavLink = {
  id: string;
  label: string;
};

type NavigationProps = {
  logo: string;
  links: NavLink[];
  cta: {
    label: string;
    href: string;
  };
};

export default function Navigation({ logo, links, cta }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src={logo} 
                alt="Auto Service Logo" 
                className="h-10 w-auto" 
              />
              <span className={`ml-3 font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Auto Service
              </span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href={cta.href} 
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {cta.label}
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              } focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={cta.href}
            className="block w-full text-center px-5 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            {cta.label}
          </a>
        </div>
      </div>
    </nav>
  );
} 
