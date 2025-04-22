import React from 'react';

type Service = {
  name: string;
  price: string;
};

type Category = {
  name: string;
  services: Service[];
};

type PricingProps = {
  title: string;
  subtitle: string;
  categories: Category[];
  note?: string;
};

export default function Pricing({ title, subtitle, categories, note }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="bg-blue-600 text-white text-center py-3">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-800">{service.name}</span>
                      <span className="font-semibold text-blue-600">{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {note && (
          <div className="text-center text-gray-500 text-sm">
            {note}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a 
            href="#booking" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Запази час сега
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 
