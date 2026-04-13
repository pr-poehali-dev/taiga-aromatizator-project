import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: 1,
    name: "Пихта & Таёжные ягоды",
    tag: "В наличии",
    available: true,
    desc: "Глубокий аромат сибирской пихты с нотами спелой брусники и черники. Природная чистота в каждой капле.",
    notes: ["Пихта", "Брусника", "Черника", "Хвоя"],
    image: "https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/files/02010aa2-1114-4369-823a-026f2251b501.jpg",
  },
  {
    id: 2,
    name: "Пихта & Облепиха",
    tag: "В разработке",
    available: false,
    desc: "Бодрящий союз таёжной пихты и солнечной облепихи. Тёплый, кисло-сладкий характер сибирского лета.",
    notes: ["Пихта", "Облепиха", "Цитрус", "Смола"],
    image: "https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/files/49794170-4711-469c-b8a5-05696cac0057.jpg",
  },
  {
    id: 3,
    name: "Пихта & Зелёное яблоко",
    tag: "В разработке",
    available: false,
    desc: "Свежесть весеннего утра — хвойная чистота встречается с хрустящей зеленью молодого яблока.",
    notes: ["Пихта", "Яблоко", "Свежесть", "Зелень"],
    image: "https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/files/415a731f-5eac-4618-a9ce-004fb0f929a2.jpg",
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "var(--dark-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="reveal text-xs tracking-[0.3em] mb-4" style={{ color: "var(--gold)" }}>
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
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>в каждом флаконе</em>
            </h2>

            <div className="divider-gold reveal mt-8 mb-8" style={{ marginLeft: 0 }} />

            <p className="reveal text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              «Тайга» рождена в Кузбассе — там, где столетние кедры стоят как стражи вечности,
              а смола пихты пахнет так, будто сама земля дышит. Мы берём у природы только то,
              что она отдаёт сама — и превращаем это в аромат для вашей жизни.
            </p>
            <p className="reveal text-sm leading-7 mt-4" style={{ color: "var(--text-muted)" }}>
              Никакой химии. Никакой синтетики. Только живое масло кедра и пихты,
              собранное в экологически чистых урочищах Западной Сибири — для вашего автомобиля и дома.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "100%", label: "Натуральные масла" },
              { num: "Кузбасс", label: "Производство в Сибири" },
              { num: "3", label: "Линейки ароматов" },
              { num: "2024", label: "Год основания" },
            ].map((item, i) => (
              <div key={i} className="reveal info-card p-8" style={{ animationDelay: `${i * 0.1}s` }}>
                <div
                  className="text-3xl font-light mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--gold)" }}
                >
                  {item.num}
                </div>
                <div className="text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            { icon: "Leaf", title: "Живые масла", text: "Кедр и пихта из чистых лесов Кузбасса — без синтетики, без компромиссов" },
            { icon: "MapPin", title: "Сердце Сибири", text: "Производим там, где кедровая тайга встречается с горами Кузнецкого Алатау" },
            { icon: "Star", title: "Ручная работа", text: "Каждый флакон — как письмо из тайги: личный, настоящий, неповторимый" },
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
                style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--text-main)", fontSize: "1.1rem" }}
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
    <section id="catalog" className="py-32 px-6" style={{ background: "var(--dark-card)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal text-xs tracking-[0.3em] mb-4" style={{ color: "var(--gold)" }}>
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
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover"
                  style={{ border: "1px solid var(--dark-border)" }}
                />
              </div>

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
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "var(--text-main)" }}
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

export function AboutCatalogSection() {
  return (
    <>
      <AboutSection />
      <CatalogSection />
    </>
  );
}

export default AboutCatalogSection;
