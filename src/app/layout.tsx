import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Яна Осипова — Персональный стилист",
  description: "Изменения с лёгкостью и стилем. Персональные консультации, разбор гардероба, шопинг и многое другое.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
