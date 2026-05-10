import { useEffect, useState } from "react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Bridal",      href: "#bridal" },
  { label: "Diamond",     href: "#diamond" },
];
const linksRight = [
  { label: "Reviews", href: "#reviews" },
  { label: "Visit",   href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(15,14,9,0.96)"
          : "rgba(15,14,9,0.80)",
        borderBottom: "1px solid rgba(201,169,110,0.22)",
        height: 80,
      }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <ul className="hidden flex-1 items-center justify-end gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label transition-colors"
                style={{ color: "rgba(240,224,168,0.72)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,224,168,0.72)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#top" className="mx-8 flex items-center gap-3">
          <span
            className="hidden md:block h-px w-12"
            style={{ background: "linear-gradient(90deg, transparent, #C9A96E)" }}
          />
          <span className="diamond-fuchsia text-sm">◆</span>
          <div className="text-center leading-none">
            <div className="font-display text-2xl font-bold tracking-wide" style={{ color: "#FFFEF9" }}>
              Pearl <span className="italic shimmer-vibrant">House</span>
            </div>
            <div className="label mt-1 text-[9px]" style={{ color: "rgba(240,224,168,0.55)" }}>पर्ल हाउस · Ranchi</div>
          </div>
          <span className="diamond-turquoise text-sm">◆</span>
          <span
            className="hidden md:block h-px w-12"
            style={{ background: "linear-gradient(90deg, #F0E0A8, transparent)" }}
          />
        </a>

        <ul className="hidden flex-1 items-center justify-start gap-10 md:flex">
          {linksRight.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label transition-colors"
                style={{ color: "rgba(240,224,168,0.72)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,224,168,0.72)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919334454153"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex label items-center gap-2 px-4 py-2 transition-colors"
          style={{
            border: "2px solid rgba(201,169,110,0.55)",
            color: "#C9A96E",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.12)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          ◆ WhatsApp
        </a>
      </nav>
    </header>
  );
}
