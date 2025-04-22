import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact"; // ✅ новый финальный блок

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Яна Осипова"
        subtitle="Персональный стилист — уверенность в себе через стиль"
        ctaText="Оставить заявку"
        ctaSecondary="Первая консультация — бесплатно"
        backgroundImage="/images/hero.png"
      />
      <About />
      <Services />
      <Testimonials />
      <Contact /> {/* ✅ финальный блок со связью */}
    </>
  );
}
