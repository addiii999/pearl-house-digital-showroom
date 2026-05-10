import { useEffect, useState } from "react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Bridal", href: "#bridal" },
  { label: "Diamond", href: "#diamond" },
];
const linksRight = [
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
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
        background: "rgba(255,254,249,0.95)",
        borderBottom: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
        height: 80,
      }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <ul className="hidden flex-1 items-center justify-end gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label text-charcoal hover:text-fuchsia-deco transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#top" className="mx-8 flex items-center gap-3">
          <span className="hidden md:block h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #FF1493)" }} />
          <span className="diamond-fuchsia text-sm">◆</span>
          <div className="text-center leading-none">
            <div className="font-display text-2xl font-bold tracking-wide">
              Pearl <span className="italic text-fuchsia-deco">House</span>
            </div>
            <div className="label mt-1 text-[9px] text-muted-foreground">पर्ल हाउस · Ranchi</div>
          </div>
          <span className="diamond-turquoise text-sm">◆</span>
          <span className="hidden md:block h-px w-12" style={{ background: "linear-gradient(90deg, #00D9FF, transparent)" }} />
        </a>

        <ul className="hidden flex-1 items-center justify-start gap-10 md:flex">
          {linksRight.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label text-charcoal hover:text-fuchsia-deco transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919334454153"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex label items-center gap-2 border-2 border-[color:var(--lime)] px-4 py-2 text-charcoal hover:bg-[color:var(--lime)] transition-colors"
        >
          ◆ WhatsApp
        </a>
      </nav>
    </header>
  );
}
