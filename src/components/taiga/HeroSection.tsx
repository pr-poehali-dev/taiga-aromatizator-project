const HERO_IMAGE = "https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/files/bebec135-d8ef-4e03-8526-ab32c5a03aae.jpg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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

export default HeroSection;
