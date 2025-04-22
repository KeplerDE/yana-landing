'use client';

import React from 'react';

type Props = {
  image: string;
  title: string;
  price: string;
  points: string[];
};

function ServiceCard({ image, title, price, points }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* 👇 Исправленное позиционирование изображения */}
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover object-[center_20%]"
      />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-gray-800 font-bold text-lg">{price}</div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            image="/images/wardrobe.png"
            title="Разбор гардероба"
            price="150 €"
            points={[
              'Избавляемся от ненужного',
              'Спасаем и трансформируем одежду',
              'Создаём новые образы из вашего гардероба',
              'Корректируем фигуру с помощью одежды',
              'Составляем список покупок (шоп-лист)',
            ]}
          />

          <ServiceCard
            image="/images/event.png"
            title="Образ на мероприятие"
            price="35 €"
            points={[
              'Экстренная помощь перед важным событием',
              'Подбор образа для корпоратива, свадьбы и т.п.',
              'Образ целиком: одежда, обувь, аксессуары, макияж, прическа',
            ]}
          />

          <ServiceCard
            image="/images/shopping.png"
            title="Шоппинг-сопровождение"
            price="100 € / 150 €"
            points={[
              'Определяем цель и бюджет шоппинга',
              'Составляю список магазинов под твой стиль',
              'Онлайн: активные ссылки на одежду',
              'Оффлайн: сопровождаю в магазинах или покупаю за тебя',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
