import { DecoLine } from "./DecoLine";

const cats = [
  { label: "The Bridal Vault",  title: "Bridal",      from: "#1C120A", to: "#3A2408", icon: "♛", accent: "#C9A96E" },
  { label: "Eternal Yellow",    title: "Gold",         from: "#1A1208", to: "#2E1E06", icon: "✦", accent: "#D4913C" },
  { label: "Brilliant Forever", title: "Diamond",      from: "#0F1218", to: "#1C2030", icon: "◆", accent: "#F0E0A8" },
  { label: "Daily Elegance",    title: "Earrings",     from: "#14100A", to: "#2A1E0C", icon: "❀", accent: "#B8A060" },
  { label: "Sacred Bonds",      title: "Mangalsutra",  from: "#1A100A", to: "#301806", icon: "❤", accent: "#C9A96E" },
  { label: "Timeless Lustre",   title: "Pearl Edit",   from: "#16121A", to: "#2C2238", icon: "○", accent: "#F0E0A8" },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label" style={{ color: "#C9A96E" }}>◆ Curated Collections ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            A Showroom <span className="italic shimmer-vibrant">Reimagined</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic text-muted-foreground">
            Six houses of jewellery, each thoughtfully composed for the moments that mark a life.
          </p>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cats.map((c) => (
            <a
              key={c.title}
              href="#contact"
              className="luxe-card relative block aspect-[3/4] overflow-hidden"
              style={{ background: `linear-gradient(155deg, ${c.from}, ${c.to})` }}
            >
              {/* gold ambient glow edge */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: `inset 0 0 60px rgba(201,169,110,0.06)` }}
              />
              {/* inner border */}
              <div
                className="pointer-events-none absolute inset-4 border-2"
                style={{ borderColor: `${c.accent}50` }}
              />
              {/* corner diamonds */}
              <span className="absolute left-6 top-6"    style={{ color: `${c.accent}90` }}>◆</span>
              <span className="absolute right-6 top-6"   style={{ color: `${c.accent}90` }}>◆</span>
              <span className="absolute left-6 bottom-6" style={{ color: `${c.accent}90` }}>◆</span>
              <span className="absolute right-6 bottom-6" style={{ color: `${c.accent}90` }}>◆</span>

              {/* large icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[10rem] leading-none select-none"
                  style={{ color: `${c.accent}28` }}
                >
                  {c.icon}
                </span>
              </div>

              {/* bottom text */}
              <div
                className="absolute inset-x-0 bottom-0 p-8"
                style={{ color: "#FFFEF9" }}
              >
                <div className="label" style={{ color: `${c.accent}CC`, opacity: 1 }}>{c.label}</div>
                <div className="mt-3 font-display text-3xl">{c.title}</div>
                <div className="mt-4 label flex items-center gap-2" style={{ color: `${c.accent}99` }}>
                  Explore <span>→</span>
                </div>
              </div>

              {/* hover gold sheen */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `linear-gradient(135deg, ${c.accent}10, transparent 60%)` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
