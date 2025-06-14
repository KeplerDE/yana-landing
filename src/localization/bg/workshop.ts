export const workshopTranslations = {
  meta: {
    title: "Автосервиз | Професионални автоуслуги",
    description: "Професионален автосервиз с опитни механици. Бързо, качествено и надеждно обслужване на вашия автомобил.",
  },
  navigation: {
    links: [
      { label: "Услуги", href: "#services" },
      { label: "За нас", href: "#about" },
      { label: "Екип", href: "#team" },
      { label: "Цени", href: "#pricing" },
      { label: "Контакти", href: "#contact" }
    ],
    ctaText: "Запази час",
    ctaHref: "#booking"
  },
  hero: {
    title: "Надеждна грижа за вашия автомобил",
    subtitle: "Професионален автосервиз с модерно оборудване и опитни механици. Гарантираме качество и коректно отношение.",
    ctaText: "Запази час сега",
    ctaSecondary: "Обади се: 088 888 8888"
  },
  services: {
    title: "Нашите услуги",
    subtitle: "Пълно обслужване за вашия автомобил от опитни професионалисти",
    services: [
      {
        title: "Диагностика",
        description: "Цялостна компютърна диагностика на автомобила с най-съвременно оборудване",
        icon: "diagnostic"
      },
      {
        title: "Ремонт на двигател",
        description: "Професионален ремонт и поддръжка на двигатели от всички марки и модели",
        icon: "engine"
      },
      {
        title: "Смяна на масло",
        description: "Експресна смяна на масло и филтри с оригинални консумативи",
        icon: "oil"
      },
      {
        title: "Спирачна система",
        description: "Ремонт и поддръжка на спирачната система за максимална безопасност",
        icon: "brake"
      },
      {
        title: "Климатична система",
        description: "Обслужване, зареждане и ремонт на климатици за оптимален комфорт",
        icon: "ac"
      },
      {
        title: "Електроника",
        description: "Диагностика и отстраняване на проблеми с електрическата система",
        icon: "electrical"
      }
    ]
  },
  about: {
    title: "За нас",
    subtitle: "Автосервиз с традиции и високо качество на обслужване",
    content: "Нашият автосервиз предлага професионални услуги вече над 15 години. Разполагаме с модерно оборудване и екип от опитни механици, които се грижат за вашия автомобил с внимание към всеки детайл. Използваме само качествени части и материали, за да гарантираме надеждността на извършените ремонти.",
    stats: [
      { value: "15+", label: "години опит" },
      { value: "10000+", label: "обслужени автомобили" },
      { value: "98%", label: "доволни клиенти" }
    ]
  },
  team: {
    title: "Нашият екип",
    subtitle: "Запознайте се с нашите опитни специалисти",
    members: [
      {
        name: "Георги Иванов",
        role: "Главен механик",
        bio: "Над 20 години опит с европейски и азиатски автомобили",
        imageUrl: "/team/georgi.jpg"
      },
      {
        name: "Иван Петров",
        role: "Електротехник",
        bio: "Специалист по автомобилна електроника и диагностика",
        imageUrl: "/team/ivan.jpg"
      },
      {
        name: "Петър Димитров",
        role: "Механик",
        bio: "Експерт в ремонта на двигатели и трансмисии",
        imageUrl: "/team/petar.jpg"
      },
      {
        name: "Мария Георгиева",
        role: "Офис мениджър",
        bio: "Грижи се за перфектната организация и обслужване на клиенти",
        imageUrl: "/team/maria.jpg"
      }
    ]
  },
  pricing: {
    title: "Цени на услуги",
    subtitle: "Прозрачни и конкурентни цени без скрити такси",
    categories: [
      {
        name: "Диагностика и профилактика",
        services: [
          { name: "Компютърна диагностика", price: "40 лв." },
          { name: "Смяна на масло и филтър", price: "60 лв." },
          { name: "Проверка на спирачна система", price: "30 лв." },
          { name: "Проверка на ходова част", price: "40 лв." }
        ]
      },
      {
        name: "Ремонтни дейности",
        services: [
          { name: "Смяна на накладки - предни", price: "80 лв." },
          { name: "Смяна на накладки - задни", price: "90 лв." },
          { name: "Ремонт на спирачни апарати", price: "от 120 лв." },
          { name: "Смяна на амортисьори", price: "от 160 лв." }
        ]
      },
      {
        name: "Двигател и трансмисия",
        services: [
          { name: "Смяна на ангренажен ремък", price: "от 220 лв." },
          { name: "Смяна на съединител", price: "от 380 лв." },
          { name: "Основен ремонт на двигател", price: "по договаряне" },
          { name: "Ремонт на скоростна кутия", price: "по договаряне" }
        ]
      }
    ],
    note: "* Цените са ориентировъчни и зависят от марката и модела на автомобила. Посочените цени не включват части."
  },
  testimonials: {
    title: "Отзиви от клиенти",
    subtitle: "Какво казват нашите доволни клиенти",
    testimonials: [
      {
        quote: "Страхотен сервиз с отлично обслужване. Механиците са истински професионалисти и открито обясняват проблемите на автомобила.",
        author: "Димитър Колев",
        car: "BMW 320d"
      },
      {
        quote: "Вече трета година обслужвам колата си тук и съм изключително доволен от качеството на работата и коректното отношение.",
        author: "Мартин Стоянов",
        car: "VW Golf 7"
      },
      {
        quote: "Бърза реакция и отлично обслужване при спешен случай. Намериха проблема и го отстраниха за минимално време.",
        author: "Елена Петрова",
        car: "Toyota Corolla"
      }
    ]
  },
  booking: {
    title: "Запази час",
    subtitle: "Бързо и лесно запазване на час за обслужване на вашия автомобил",
    form: {
      name: "Име",
      phone: "Телефон",
      car: "Марка и модел на автомобила",
      service: "Услуга",
      date: "Предпочитана дата",
      message: "Съобщение",
      submit: "Запази час",
      services: [
        "Диагностика",
        "Смяна на масло",
        "Ремонт на спирачки",
        "Ремонт на двигател",
        "Ремонт на ходова част",
        "Обслужване на климатик",
        "Друго"
      ]
    },
    confirmation: "Благодарим ви! Ще се свържем с вас скоро за потвърждение."
  },
  contact: {
    title: "Контакти",
    subtitle: "Свържете се с нас за въпроси или запазване на час",
    address: {
      title: "Адрес",
      street: "ул. Автомобилна 123",
      city: "София, 1000",
      country: "България"
    },
    phone: {
      title: "Телефон",
      number: "088 888 8888"
    },
    email: {
      title: "Имейл",
      address: "info@autoservice.bg"
    },
    hours: {
      title: "Работно време",
      weekdays: "Понеделник - Петък: 8:00 - 18:00",
      saturday: "Събота: 9:00 - 14:00",
      sunday: "Неделя: Затворено"
    }
  },
  footer: {
    company: "Автосервиз ЕООД",
    rights: `© ${new Date().getFullYear()} Автосервиз. Всички права запазени.`,
    links: [
      { label: "Услуги", href: "#services" },
      { label: "За нас", href: "#about" },
      { label: "Контакти", href: "#contact" },
      { label: "Политика за поверителност", href: "/privacy" }
    ]
  }
}; 
