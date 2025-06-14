'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Текстовая часть */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🔥 Кто я</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Яна Осипова — стилист, который запускает трансформации через стиль. <br />
              Помогаю не просто «красиво одеться», а переосмыслить образ — чтобы одежда работала на ваши цели, отражала личность и возвращала связь с собой.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">💬 Чем я могу быть полезна</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Помогу понять, что действительно ваше — без навязанных шаблонов и давления</li>
              <li>Подберу функциональный гардероб, где всё сочетается и не занимает много времени на сборы</li>
              <li>Настрою стиль как инструмент: вы будете управлять впечатлением и достигать целей через образы</li>
              <li>Проведу мягко и точно — от хаоса и «нечего надеть» к уверенности и визуальной ясности</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">💡 Почему мой подход работает</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Я глубоко чувствую клиента — как эмпат и как стилист</li>
              <li>Моя задача — услышать и усилить, не перекроить</li>
              <li>Я соединяю стиль, психологию и рефлексию — помогаю замечать внутренние изменения через одежду</li>
              <li>Работаю бережно, но честно — чтобы результат был не просто эстетичным, а трансформирующим</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">🌍 Немного фактов</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Более 5 лет в сфере моды и психологического подхода к стилю</li>
              <li>Есть европейский опыт работы с клиентами из Украины, Германии, Англии, Молдовы</li>
              <li>Работала с десятками женщин онлайн и лично — и знаю, какие образы действительно “работают”</li>
              <li>После моих консультаций клиентки худели на 40 кг, отпускали контроль, начинали видеть себя по-новому</li>
            </ul>
          </div>
        </div>

        {/* Фото — красиво выровнено и адаптировано */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/about.jpg"
            alt="Яна Осипова"
            className="rounded-2xl shadow-xl max-w-sm w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
