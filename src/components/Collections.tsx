import { DecoLine } from "./DecoLine";

const cats = [
  { label: "The Bridal Vault", title: "Bridal", from: "#FF1493", to: "#7A0040", icon: "♛" },
  { label: "Eternal Yellow", title: "Gold", from: "#FF6B35", to: "#7A2A00", icon: "✦" },
  { label: "Brilliant Forever", title: "Diamond", from: "#00D9FF", to: "#003E5A", icon: "◆" },
  { label: "Daily Elegance", title: "Earrings", from: "#00FF41", to: "#0A4A1E", icon: "❀" },
  { label: "Sacred Bonds", title: "Mangalsutra", from: "#FF1493", to: "#3A0824", icon: "❤" },
  { label: "Timeless Lustre", title: "Pearl Edit", from: "#FFD9F0", to: "#FF6B35", icon: "○" },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label text-fuchsia-deco">◆ Curated Collections ◆</p>
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
              style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
            >
              <div className="pointer-events-none absolute inset-4 border-2 border-[color:var(--ivory)]/80" />
              {/* corner diamonds */}
              <span className="absolute left-6 top-6 text-[color:var(--ivory)]/90">◆</span>
              <span className="absolute right-6 top-6 text-[color:var(--ivory)]/90">◆</span>
              <span className="absolute left-6 bottom-6 text-[color:var(--ivory)]/90">◆</span>
              <span className="absolute right-6 bottom-6 text-[color:var(--ivory)]/90">◆</span>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10rem] leading-none text-[color:var(--ivory)] opacity-30 select-none">
                  {c.icon}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 text-[color:var(--ivory)]">
                <div className="label opacity-90">{c.label}</div>
                <div className="mt-3 font-display text-3xl">{c.title}</div>
                <div className="mt-4 label flex items-center gap-2 opacity-80">
                  Explore <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
