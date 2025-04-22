'use client';

import React from 'react';

type Testimonial = {
  name: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Анна К.',
    text: 'Яна полностью изменила моё восприятие себя! Образы стали отражением моего характера.',
    avatar: '/images/clients/11.jpg',
  },
  {
    name: 'Мария Л.',
    text: 'Очень внимательный подход, всё было подобрано со вкусом и заботой. Рекомендую!',
    avatar: '/images/clients/12.jpg',
  },
  {
    name: 'Ольга С.',
    text: 'Яна помогла мне почувствовать себя уверенно перед важной встречей. Спасибо!',
    avatar: '/images/clients/13.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Отзывы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-sm mb-4">{item.text}</p>
              <span className="font-semibold text-gray-900">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
