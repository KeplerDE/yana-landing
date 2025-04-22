'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Я свяжусь с вами в ближайшее время.');
    setPhone('');
  };

  return (
    <section id="contact" className="bg-yellow-100 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Готова начать трансформацию?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Заполни свой номер, и я свяжусь с тобой лично.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="px-5 py-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Оставить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
