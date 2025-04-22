'use client';

import { useState } from 'react';
import { useExperiment } from '@/hooks/useExperiment';

type CTAProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundImage?: string;
};

// Default props
const defaultProps: CTAProps = {
  title: "Ready to Transform Your Business?",
  subtitle: "Join thousands of companies already using our platform to grow their business.",
  ctaText: "Get Started for Free",
  backgroundImage: "/cta-background.jpg"
};

// CTA experiment configuration
const ctaExperiment = {
  id: 'cta-section',
  variants: [
    { id: 'standard', weight: 0.5 },
    { id: 'form', weight: 0.5 }
  ]
};

export default function CTA(props: CTAProps) {
  const { title, subtitle, ctaText, ctaAction, backgroundImage } = { ...defaultProps, ...props };
  const [email, setEmail] = useState('');
  const { variant } = useExperiment(ctaExperiment);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaAction) {
      ctaAction();
    } else {
      console.log('CTA form submitted with email:', email);
    }
  };
  
  // Form variant
  if (variant === 'form') {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-gray-300 mb-10">{subtitle}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-5 py-4 rounded-lg text-gray-900 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 py-4 px-8 rounded-lg font-medium text-white whitespace-nowrap transition-colors"
              >
                {ctaText}
              </button>
            </form>
            
            <p className="mt-4 text-sm text-gray-400">
              No credit card required. 14-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  // Standard variant (default)
  return (
    <section 
      className="py-24 bg-cover bg-center text-white relative"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">{subtitle}</p>
        
        <button
          onClick={ctaAction}
          className="bg-blue-600 hover:bg-blue-700 py-4 px-10 rounded-lg font-medium text-lg transition-colors inline-flex items-center"
        >
          {ctaText}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <p className="mt-6 text-gray-300">
          No credit card required. 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
} 
