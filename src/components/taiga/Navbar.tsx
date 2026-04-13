import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Каталог", href: "#catalog" },
  { label: "Покупка", href: "#purchase" },
  { label: "Контакты", href: "#contacts" },
];

export function Navbar() {
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
        background: scrolled ? "rgba(12,15,13,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => handleNav("#hero")} className="flex items-center group">
          <img
            src="https://cdn.poehali.dev/projects/9d9e1f69-0295-4ccc-a38b-5f6badc4bb63/bucket/bfbbbbee-af09-42bc-9bef-5800019e7b83.png"
            alt="Тайга"
            className="h-12 w-auto"
            style={{ filter: "invert(1)" }}
          />
        </button>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>

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
            style={{ background: "var(--gold)", opacity: open ? 0 : 1 }}
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

export { NAV_ITEMS };
export default Navbar;