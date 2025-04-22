'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 bg-transparent shadow-none fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Яна Осипова
        </Link>

        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-white text-sm font-medium">
          <Link href="#about" className="hover:text-yellow-300 transition-colors">
            Обо мне
          </Link>
          <Link href="#services" className="hover:text-yellow-300 transition-colors">
            Услуги
          </Link>
          <Link href="#contact" className="hover:text-yellow-300 transition-colors">
            Контакты
          </Link>

          {/* Telegram */}
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 md:ml-4 hover:opacity-80"
          >
            <img
              src="/images/icons/telegr.jpg"
              alt="Telegram"
              className="h-6 w-6 rounded-full"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img
              src="/images/icons/insta.jpg"
              alt="Instagram"
              className="h-6 w-6 rounded-full"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
