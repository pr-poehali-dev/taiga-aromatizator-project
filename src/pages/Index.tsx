import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/files/bebec135-d8ef-4e03-8526-ab32c5a03aae.jpg";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Каталог", href: "#catalog" },
  { label: "Покупка", href: "#purchase" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Пихта & Таёжные ягоды",
    tag: "В наличии",
    available: true,
    desc: "Глубокий аромат сибирской пихты с нотами спелой брусники и черники. Природная чистота в каждой капле.",
    notes: ["Пихта", "Брусника", "Черника", "Хвоя"],
    icon: "🌲",
  },
  {
    id: 2,
    name: "Пихта & Облепиха",
    tag: "В разработке",
    available: false,
    desc: "Бодрящий союз таёжной пихты и солнечной облепихи. Тёплый, кисло-сладкий характер сибирского лета.",
    notes: ["Пихта", "Облепиха", "Цитрус", "Смола"],
    icon: "🍊",
  },
  {
    id: 3,
    name: "Пихта & Зелёное яблоко",
    tag: "В разработке",
    available: false,
    desc: "Свежесть весеннего утра — хвойная чистота встречается с хрустящей зеленью молодого яблока.",
    notes: ["Пихта", "Яблоко", "Свежесть", "Зелень"],
    icon: "🍏",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(12,15,13,0.96)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-8 h-8 border flex items-center justify-center text-xs"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Т
          </div>
          <span
            className="font-serif text-lg tracking-widest"
            style={{ color: "var(--gold)", fontFamily: "Cormorant Garamond, serif" }}
          >
            ТАЙГА
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-4 h-px transition-all duration-300"
            style={{
              background: "var(--gold)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "rgba(12,15,13,0.98)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="nav-link text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Тайга"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3) saturate(0.7)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,15,13,0.3) 0%, rgba(12,15,13,0.0) 40%, rgba(12,15,13,0.8) 100%)",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle animate-float"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.4 + i * 0.05,
            width: i % 2 === 0 ? "2px" : "3px",
            height: i % 2 === 0 ? "2px" : "3px",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="text-xs tracking-[0.35em] mb-8 animate-fade-up"
          style={{ color: "var(--gold)", animationDelay: "0.2s", opacity: 0 }}
        >
          КУЗБАСС · СИБИРЬ · ПИХТА И КЕДР
        </div>

        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          ТАЙГА
        </h1>

        <div
          className="animate-fade-up mt-4"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <span
            className="animate-shimmer text-2xl"
            style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
          >
            Ароматизаторы из Сибири
          </span>
        </div>

        <p
          className="animate-fade-up mt-6 text-sm leading-relaxed max-w-md mx-auto"
          style={{
            color: "var(--text-muted)",
            animationDelay: "0.8s",
            opacity: 0,
            letterSpacing: "0.05em",
          }}
        >
          Там, где кедры касаются неба, а пихта хранит тысячелетний покой —<br />
          рождается аромат настоящей Сибири.
        </p>

        <div
          className="animate-fade-up mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <button
            className="btn-gold"
            onClick={() =>
              document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Смотреть каталог</span>
          </button>
          <button
            className="btn-gold"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--text-muted)" }}
            onClick={() =>
              document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Связаться с нами</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ color: "var(--gold-dim)" }}
      >
        <span className="text-xs tracking-widest" style={{ fontSize: "0.6rem" }}>
          ЛИСТАТЬ
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--gold-dim), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div
              className="reveal text-xs tracking-[0.3em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              О КОМПАНИИ
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--text-main)",
              }}
            >
              Дух кедра и пихты —
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                в каждом флаконе
              </em>
            </h2>

            <div className="divider-gold reveal mt-8 mb-8" style={{ marginLeft: 0 }} />

            <p
              className="reveal text-sm leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              «Тайга» рождена в Кузбассе — там, где столетние кедры стоят как стражи вечности,
              а смола пихты пахнет так, будто сама земля дышит. Мы берём у природы только то,
              что она отдаёт сама — и превращаем это в аромат для вашей жизни.
            </p>
            <p
              className="reveal text-sm leading-7 mt-4"
              style={{ color: "var(--text-muted)" }}
            >
              Никакой химии. Никакой синтетики. Только живое масло кедра и пихты,
              собранное в экологически чистых урочищах Западной Сибири — для вашего автомобиля и дома.
            </p>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "100%", label: "Натуральные масла" },
              { num: "Кузбасс", label: "Производство в Сибири" },
              { num: "3", label: "Линейки ароматов" },
              { num: "2024", label: "Год основания" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal info-card p-8"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-3xl font-light mb-2"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    color: "var(--gold)",
                  }}
                >
                  {item.num}
                </div>
                <div
                  className="text-xs tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            {
              icon: "Leaf",
              title: "Живые масла",
              text: "Кедр и пихта из чистых лесов Кузбасса — без синтетики, без компромиссов",
            },
            {
              icon: "MapPin",
              title: "Сердце Сибири",
              text: "Производим там, где кедровая тайга встречается с горами Кузнецкого Алатау",
            },
            {
              icon: "Star",
              title: "Ручная работа",
              text: "Каждый флакон — как письмо из тайги: личный, настоящий, неповторимый",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal info-card p-8 text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-12 h-12 border mx-auto mb-5 flex items-center justify-center"
                style={{ borderColor: "var(--gold-dim)" }}
              >
                <Icon name={item.icon} size={18} style={{ color: "var(--gold)" }} />
              </div>
              <h3
                className="mb-3 text-base tracking-wider"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "var(--text-main)",
                  fontSize: "1.1rem",
                }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-6" style={{ color: "var(--text-muted)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogSection() {
  return (
    <section
      id="catalog"
      className="py-32 px-6"
      style={{ background: "var(--dark-card)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="reveal text-xs tracking-[0.3em] mb-4"
            style={{ color: "var(--gold)" }}
          >
            КАТАЛОГ
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--text-main)",
            }}
          >
            Наши ароматы
          </h2>
          <div className="divider-gold reveal mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="reveal product-card p-8 flex flex-col"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-xs tracking-[0.2em] px-3 py-1 border"
                  style={{
                    borderColor: product.available ? "var(--gold-dim)" : "rgba(138,128,112,0.3)",
                    color: product.available ? "var(--gold)" : "var(--text-muted)",
                    fontSize: "0.65rem",
                  }}
                >
                  {product.tag}
                </span>
                <span className="text-3xl">{product.icon}</span>
              </div>

              {/* Name */}
              <h3
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--text-main)",
                }}
              >
                {product.name}
              </h3>

              <p className="text-xs leading-6 mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                {product.desc}
              </p>

              {/* Notes */}
              <div className="border-t pt-5" style={{ borderColor: "var(--dark-border)" }}>
                <div
                  className="text-xs tracking-widest mb-3"
                  style={{ color: "var(--gold-dim)", fontSize: "0.6rem" }}
                >
                  НОТЫ АРОМАТА
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="text-xs px-2 py-0.5"
                      style={{
                        border: "1px solid var(--dark-border)",
                        color: "var(--text-muted)",
                        fontSize: "0.65rem",
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                {product.available ? (
                  <button
                    className="btn-gold w-full text-center"
                    onClick={() =>
                      document.querySelector("#purchase")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span>Узнать о покупке</span>
                  </button>
                ) : (
                  <div
                    className="text-center text-xs tracking-widest py-3"
                    style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
                  >
                    СКОРО В ПРОДАЖЕ
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Usage types */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              icon: "Car",
              title: "Для автомобиля",
              text: "Запах кедра и пихты в салоне — как будто едешь сквозь сибирский лес. Аромат держится 30–45 дней, успокаивает и освежает.",
            },
            {
              icon: "Home",
              title: "Для дома",
              text: "Превратите комнату в кедровую рощу. Живой аромат Сибири наполняет пространство теплом и лесной чистотой.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal info-card p-8 flex items-start gap-5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-10 h-10 border flex-shrink-0 flex items-center justify-center mt-1"
                style={{ borderColor: "var(--gold-dim)" }}
              >
                <Icon name={item.icon} size={16} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    color: "var(--text-main)",
                  }}
                >
                  {item.title}
                </h4>
                <p className="text-xs leading-6" style={{ color: "var(--text-muted)" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PurchaseSection() {
  return (
    <section id="purchase" className="py-32 px-6" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="reveal text-xs tracking-[0.3em] mb-4"
            style={{ color: "var(--gold)" }}
          >
            КАК КУПИТЬ
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--text-main)",
            }}
          >
            Покупка и дистрибьюция
          </h2>
          <div className="divider-gold reveal mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Retail */}
          <div className="reveal info-card p-10">
            <div
              className="w-10 h-10 border mb-6 flex items-center justify-center"
              style={{ borderColor: "var(--gold-dim)" }}
            >
              <Icon name="ShoppingBag" size={16} style={{ color: "var(--gold)" }} />
            </div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.6rem",
                color: "var(--text-main)",
              }}
            >
              Розничная покупка
            </h3>
            <p className="text-xs leading-7 mb-8" style={{ color: "var(--text-muted)" }}>
                Кузбасский кедр и сибирская пихта теперь доступны каждому. Свяжитесь с нами —
              расскажем о ценах и доставим живой аромат тайги прямо к вашей двери,
              в любую точку России.
            </p>
            <div className="space-y-3">
              {[
                "Доставка по Кузбассу",
                "Отправка по всей России",
                "Самовывоз в Кемерово",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="btn-gold mt-8"
              onClick={() =>
                document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Оформить заказ</span>
            </button>
          </div>

          {/* Distributor */}
          <div className="reveal info-card p-10" style={{ animationDelay: "0.15s" }}>
            <div
              className="w-10 h-10 border mb-6 flex items-center justify-center"
              style={{ borderColor: "var(--gold-dim)" }}
            >
              <Icon name="Handshake" size={16} style={{ color: "var(--gold)" }} />
            </div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.6rem",
                color: "var(--text-main)",
              }}
            >
              Стать дистрибьютором
            </h3>
            <p className="text-xs leading-7 mb-8" style={{ color: "var(--text-muted)" }}>
                Принесите запах сибирского кедра в свой регион. Мы работаем с магазинами,
              автосервисами и сетями АЗС — предлагаем честные оптовые цены и эксклюзивные
              условия для тех, кто верит в силу настоящей природы.
            </p>
            <div className="space-y-3">
              {[
                "Оптовые цены от производителя",
                "Эксклюзивные условия для партнёров",
                "Маркетинговая поддержка",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="btn-gold mt-8"
              onClick={() =>
                document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Обсудить условия</span>
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-20">
          <div
            className="reveal text-center text-xs tracking-[0.3em] mb-12"
            style={{ color: "var(--gold)" }}
          >
            КАК ЭТО РАБОТАЕТ
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Свяжитесь с нами", text: "Напишите или позвоните — выберем удобный способ" },
              { num: "02", title: "Выберите аромат", text: "Расскажем о наличии и поможем с выбором" },
              { num: "03", title: "Оформим заказ", text: "Выставим счёт и согласуем доставку" },
              { num: "04", title: "Получите продукт", text: "Доставим или отправим удобной службой" },
            ].map((step, i) => (
              <div
                key={i}
                className="reveal text-center p-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-4xl font-light mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--gold-dim)" }}
                >
                  {step.num}
                </div>
                <h4
                  className="mb-2 text-sm"
                  style={{ color: "var(--text-main)", letterSpacing: "0.05em" }}
                >
                  {step.title}
                </h4>
                <p className="text-xs leading-5" style={{ color: "var(--text-muted)" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section
      id="contacts"
      className="py-32 px-6"
      style={{ background: "var(--dark-card)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div
            className="reveal text-xs tracking-[0.3em] mb-4"
            style={{ color: "var(--gold)" }}
          >
            КОНТАКТЫ
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--text-main)",
            }}
          >
            Свяжитесь с нами
          </h2>
          <div className="divider-gold reveal mt-8" />
          <p
            className="reveal mt-6 text-sm leading-7 max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Кузбасская тайга ждёт вас. Напишите нам — и мы расскажем всё
            о нашей продукции, ценах и условиях доставки по России.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "Phone",
              title: "Телефон",
              value: "Указать номер",
              sub: "Пн–Пт, 9:00–18:00 (МСК+4)",
            },
            {
              icon: "Mail",
              title: "Email",
              value: "Указать email",
              sub: "Ответим в течение 24 часов",
            },
            {
              icon: "MapPin",
              title: "Адрес",
              value: "Кузбасс, Сибирь",
              sub: "Самовывоз по договорённости",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal info-card p-8 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-10 h-10 border mx-auto mb-5 flex items-center justify-center"
                style={{ borderColor: "var(--gold-dim)" }}
              >
                <Icon name={item.icon} size={16} style={{ color: "var(--gold)" }} />
              </div>
              <div
                className="text-xs tracking-widest mb-2"
                style={{ color: "var(--gold-dim)", fontSize: "0.6rem" }}
              >
                {item.title.toUpperCase()}
              </div>
              <div
                className="mb-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.1rem",
                  color: "var(--text-main)",
                }}
              >
                {item.value}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="reveal text-center">
          <div
            className="text-xs tracking-[0.3em] mb-6"
            style={{ color: "var(--text-muted)", fontSize: "0.6rem" }}
          >
            МЫ В СОЦИАЛЬНЫХ СЕТЯХ
          </div>
          <div className="flex justify-center gap-4">
            {[
              { icon: "MessageCircle", label: "ВКонтакте" },
              { icon: "Send", label: "Telegram" },
              { icon: "Instagram", label: "Instagram" },
            ].map((s) => (
              <button
                key={s.label}
                className="btn-gold px-5 py-3 flex items-center gap-2"
                style={{ padding: "10px 20px" }}
              >
                <Icon name={s.icon} size={14} />
                <span className="text-xs">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--dark-border)", background: "var(--dark-bg)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 border flex items-center justify-center text-xs"
            style={{ borderColor: "var(--gold-dim)", color: "var(--gold-dim)" }}
          >
            Т
          </div>
          <span
            className="text-sm tracking-widest"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--gold-dim)" }}
          >
            ТАЙГА
          </span>
        </div>

        <div
          className="text-xs text-center"
          style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}
        >
          © 2024 Тайга. Кедр и пихта из Кузбасса — аромат настоящей Сибири.
        </div>

        <div className="flex gap-6">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <button
              key={item.href}
              className="nav-link"
              onClick={() =>
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  useReveal();

  return (
    <div className="grain">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <PurchaseSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;