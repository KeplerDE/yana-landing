export default function Footer() {
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Telegram", url: "https://t.me" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">© 2025 Стилист. Все права защищены.</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
