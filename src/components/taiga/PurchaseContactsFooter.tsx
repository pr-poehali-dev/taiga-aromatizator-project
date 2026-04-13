import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Каталог", href: "#catalog" },
  { label: "Покупка", href: "#purchase" },
  { label: "Контакты", href: "#contacts" },
];

function PurchaseSection() {
  return (
    <section id="purchase" className="py-32 px-6" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal text-xs tracking-[0.3em] mb-4" style={{ color: "var(--gold)" }}>
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
          <div className="reveal info-card p-10">
            <div
              className="w-10 h-10 border mb-6 flex items-center justify-center"
              style={{ borderColor: "var(--gold-dim)" }}
            >
              <Icon name="ShoppingBag" size={16} style={{ color: "var(--gold)" }} />
            </div>
            <h3
              className="mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "var(--text-main)" }}
            >
              Розничная покупка
            </h3>
            <p className="text-xs leading-7 mb-8" style={{ color: "var(--text-muted)" }}>
              Кузбасский кедр и сибирская пихта теперь доступны каждому. Свяжитесь с нами —
              расскажем о ценах и доставим живой аромат тайги прямо к вашей двери,
              в любую точку России.
            </p>
            <div className="space-y-3">
              {["Доставка по Кузбассу", "Отправка по всей России", "Самовывоз в Кемерово"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-gold mt-8"
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Оформить заказ</span>
            </button>
          </div>

          <div className="reveal info-card p-10" style={{ animationDelay: "0.15s" }}>
            <div
              className="w-10 h-10 border mb-6 flex items-center justify-center"
              style={{ borderColor: "var(--gold-dim)" }}
            >
              <Icon name="Handshake" size={16} style={{ color: "var(--gold)" }} />
            </div>
            <h3
              className="mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "var(--text-main)" }}
            >
              Стать дистрибьютором
            </h3>
            <p className="text-xs leading-7 mb-8" style={{ color: "var(--text-muted)" }}>
              Принесите запах сибирского кедра в свой регион. Мы работаем с магазинами,
              автосервисами и сетями АЗС — предлагаем честные оптовые цены и эксклюзивные
              условия для тех, кто верит в силу настоящей природы.
            </p>
            <div className="space-y-3">
              {["Оптовые цены от производителя", "Эксклюзивные условия для партнёров", "Маркетинговая поддержка"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-gold mt-8"
              onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Обсудить условия</span>
            </button>
          </div>
        </div>

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
                <h4 className="mb-2 text-sm" style={{ color: "var(--text-main)", letterSpacing: "0.05em" }}>
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
    <section id="contacts" className="py-32 px-6" style={{ background: "var(--dark-card)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal text-xs tracking-[0.3em] mb-4" style={{ color: "var(--gold)" }}>
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

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { name: "Иван Иванов", role: "Менеджер по продажам", phone: "+7 (000) 000-00-01" },
            { name: "Мария Петрова", role: "Менеджер по работе с клиентами", phone: "+7 (000) 000-00-02" },
            { name: "Алексей Сидоров", role: "Менеджер по оптовым поставкам", phone: "+7 (000) 000-00-03" },
          ].map((m, i) => (
            <div
              key={i}
              className="reveal info-card p-8 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 border mx-auto mb-5 flex items-center justify-center"
                style={{ borderColor: "var(--gold-dim)" }}
              >
                <Icon name="User" size={18} style={{ color: "var(--gold)" }} />
              </div>
              <div
                className="mb-1"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "var(--text-main)" }}
              >
                {m.name}
              </div>
              <div className="text-xs mb-4 tracking-wide" style={{ color: "var(--text-muted)" }}>
                {m.role}
              </div>
              <a
                href={`tel:${m.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="text-sm tracking-wider"
                style={{ color: "var(--gold)", textDecoration: "none" }}
              >
                {m.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: "Mail", title: "Email", value: "Указать email", sub: "Ответим в течение 24 часов" },
            { icon: "MapPin", title: "Адрес", value: "Кузбасс, Сибирь", sub: "Самовывоз по договорённости" },
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
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "var(--text-main)" }}
              >
                {item.value}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <div
            className="text-xs tracking-[0.3em] mb-6"
            style={{ color: "var(--text-muted)", fontSize: "0.6rem" }}
          >
            МЫ В СОЦИАЛЬНЫХ СЕТЯХ
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: "MessageCircle", label: "ВКонтакте", href: "#" },
              { icon: "Send", label: "Telegram", href: "#" },
              { icon: "ShoppingBag", label: "Авито", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="btn-gold px-5 py-3 flex items-center gap-2"
                style={{ padding: "10px 20px", textDecoration: "none" }}
              >
                <Icon name={s.icon} size={14} />
                <span className="text-xs">{s.label}</span>
              </a>
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
        <div className="flex items-center">
          <img
            src="https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/bucket/bfbbbbee-af09-42bc-9bef-5800019e7b83.png"
            alt="Тайга"
            className="h-10 w-auto"
            style={{ filter: "invert(1)", opacity: 0.5 }}
          />
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
              onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PurchaseContactsFooter() {
  return (
    <>
      <PurchaseSection />
      <ContactsSection />
      <Footer />
    </>
  );
}

export default PurchaseContactsFooter;