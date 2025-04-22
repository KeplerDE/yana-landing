'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
};

// Default props
const defaultProps: FAQProps = {
  title: "Frequently Asked Questions",
  subtitle: "Find answers to the most common questions about our platform.",
  faqs: [
    {
      question: "How does the 14-day free trial work?",
      answer: "Our 14-day free trial gives you full access to all features of our platform. No credit card is required to sign up. At the end of the trial, you can choose a pricing plan that fits your needs or cancel without any charges."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee for the plan you choose."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information."
    },
    {
      question: "How secure is my data?",
      answer: "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices, conduct regular security audits, and are compliant with GDPR, CCPA, and other privacy regulations."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export all your data at any time in standard formats like CSV, JSON, or Excel. We believe your data belongs to you and make it easy to take it with you."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support with a 24-hour response time. Professional and Enterprise plans also include priority support via phone and live chat, with faster response times. Enterprise plans come with a dedicated account manager."
    },
    {
      question: "Do you have an API?",
      answer: "Yes, we have a comprehensive REST API that allows you to integrate our platform with your existing tools and workflows. API access is available on Professional and Enterprise plans."
    }
  ]
};

export default function FAQ(props: FAQProps) {
  const { title, subtitle, faqs } = { ...defaultProps, ...props };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="space-y-6">
          {faqs?.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full py-5 px-6 text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <svg 
                    className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 
