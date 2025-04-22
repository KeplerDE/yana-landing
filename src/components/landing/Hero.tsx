'use client';

import React, { useState } from 'react';

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSecondary?: string;
  backgroundImage?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaSecondary,
  backgroundImage = "/images/hero.png",
}: HeroProps) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка с номером телефона:', phone);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setPhone('');
  };

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Фон"
          className="w-full h-full object-cover object-[center_27%]" // 👈 ключевой момент — смещение вверх
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start min-h-screen pt-[120px] pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl">
          {title}
        </h1>

        <p className="text-xl text-blue-100 mb-8 max-w-xl">
          {subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-xl"
        >
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            className="px-5 py-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors"
          >
            {ctaText}
          </button>
        </form>

        {ctaSecondary && (
          <p className="text-yellow-300 font-semibold text-lg">
            {ctaSecondary}
          </p>
        )}
      </div>
    </section>
  );
}
