import { DecoLine } from "./DecoLine";

const reviews = [
  {
    name: "Anjali & Rohan",
    where: "Bariatu, Ranchi",
    text: "We bought my entire bridal set from Pearl House. Owner uncle sat with my mother for three hours, explained every gram, every stone. The polki choker is now an heirloom for our daughter someday.",
    accent: "#FF1493",
  },
  {
    name: "Sushma Devi",
    where: "Doranda",
    text: "Three generations of our family buy here. They never push. The exchange policy is honest. My mangalsutra was made exactly to my mother-in-law's old design.",
    accent: "#00D9FF",
  },
  {
    name: "Karan Agarwal",
    where: "Lalpur",
    text: "Bought a 1.2ct solitaire for my wife's anniversary. IGI certificate, fair price, beautiful presentation box. Felt like a Mumbai showroom — right here in Ranchi.",
    accent: "#FF6B35",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label text-fuchsia-deco">◆ Trusted by Ranchi Families ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            4.3 <span className="italic shimmer-vibrant">★★★★★</span> on Google
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic text-muted-foreground">
            Stories — not just star ratings — from families who chose Pearl House for the most precious moments of their lives.
          </p>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="luxe-card relative bg-[color:var(--ivory)] p-9 border"
              style={{ borderColor: r.accent }}
            >
              <div className="pointer-events-none absolute inset-3 border" style={{ borderColor: `${r.accent}40` }} />
              <div className="relative">
                <div className="flex gap-0.5 text-lg" style={{ color: r.accent }}>★★★★★</div>
                <p className="mt-6 font-serif text-lg italic leading-relaxed text-charcoal/85">
                  "{r.text}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-sm" style={{ color: r.accent }}>◆</span>
                  <div>
                    <div className="font-display text-lg">{r.name}</div>
                    <div className="label mt-0.5 text-muted-foreground text-[10px]">{r.where}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center label text-muted-foreground">
          ◆ 96+ Verified Google Reviews · Updated Weekly ◆
        </div>
      </div>
    </section>
  );
}
