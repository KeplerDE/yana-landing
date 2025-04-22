'use client';

import React, { useState } from 'react';

type BookingProps = {
  title: string;
  subtitle: string;
  form: {
    name: string;
    phone: string;
    car: string;
    service: string;
    date: string;
    message: string;
    submit: string;
    services: string[];
  };
  confirmation: string;
};

export default function Booking({ title, subtitle, form, confirmation }: BookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: '',
    date: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // In a real app, you would send this data to your API
    setIsSubmitted(true);
  };
  
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  return (
    <section id="booking" className="py-20 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-blue-200">{subtitle}</p>
        </div>
        
        {isSubmitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Успешно запазване</h3>
            <p className="text-lg">{confirmation}</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Ново запазване
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{form.name}</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{form.phone}</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{form.car}</label>
                <input 
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{form.service}</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="" className="bg-blue-900">Изберете...</option>
                  {form.services.map((service, index) => (
                    <option key={index} value={service} className="bg-blue-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{form.date}</label>
                <input 
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">{form.message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                type="submit"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg transition-colors"
              >
                {form.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 
