'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Текстовая часть */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Обо мне
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Меня зовут Яна Осипова, я персональный стилист. Помогаю женщинам находить уверенность в себе через стиль. Работаю как онлайн, так и лично, подбираю образы под ваш образ жизни и цели.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>👗 Более 200 довольных клиентов</li>
            <li>👜 Опыт работы — 5 лет в сфере моды</li>
            <li>🌍 Консультации по всему миру</li>
            <li>✨ Индивидуальный подход к каждому</li>
          </ul>
        </div>

        {/* Фото уменьшенное в 2 раза */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/about.jpg"
            alt="Яна Осипова"
            className="w-1/2 h-auto object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
