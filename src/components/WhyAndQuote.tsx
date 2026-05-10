import { DecoLine } from "./DecoLine";

const reasons = [
  { t: "Three Generation Trust",  d: "A name Ranchi families have whispered to one another since 1978.", c: "#C9A96E" },
  { t: "BIS Hallmark, Always",    d: "Every gold piece independently certified. No exceptions, no fine print.", c: "#D4913C" },
  { t: "Certified Diamonds Only", d: "IGI / SGL graded with the certificate handed to you on purchase.", c: "#F0E0A8" },
  { t: "Lifetime Exchange",       d: "Trade in any Pearl House piece for full value, any time, any year.", c: "#B8A060" },
  { t: "In-House Karigars",       d: "Designs crafted on-site — bring a sketch, a story, or a memory.", c: "#C9A96E" },
  { t: "Private Bridal Suite",    d: "An hour of quiet, chai, and a master jeweller for the bride and her family.", c: "#D4913C" },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label" style={{ color: "#C9A96E" }}>◆ Why Pearl House ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Six Reasons Families <span className="italic">Return.</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              className="luxe-card relative bg-[color:var(--ivory)] p-8 border-2"
              style={{ borderColor: `${r.c}40` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl italic" style={{ color: r.c }}>0{i + 1}</span>
                <span style={{ color: r.c }}>◆</span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{r.t}</h3>
              <p className="mt-3 font-serif text-base italic text-muted-foreground">{r.d}</p>
              <div className="deco-line mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeritageQuote() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36 dark-section"
      style={{
        background: "linear-gradient(135deg, #100E09 0%, #1F1608 40%, #2A1E0A 70%, #100E09 100%)",
      }}
    >
      {/* gold ambient vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* inner border frame */}
      <div
        className="absolute inset-x-8 inset-y-12 border-2 md:inset-x-16 md:inset-y-20"
        style={{ borderColor: "rgba(201,169,110,0.30)" }}
      />

      <span className="absolute left-10 top-14 text-xl md:left-20 md:top-24" style={{ color: "rgba(201,169,110,0.70)" }}>◆</span>
      <span className="absolute right-10 top-14 text-xl md:right-20 md:top-24" style={{ color: "rgba(240,224,168,0.50)" }}>◆</span>
      <span className="absolute left-10 bottom-14 text-xl md:left-20 md:bottom-24" style={{ color: "rgba(212,145,60,0.60)" }}>◆</span>
      <span className="absolute right-10 bottom-14 text-xl md:right-20 md:bottom-24" style={{ color: "rgba(201,169,110,0.50)" }}>◆</span>

      <div className="relative mx-auto max-w-4xl px-8 text-center">
        <p className="label" style={{ color: "rgba(201,169,110,0.75)" }}>◆ A Word from the House ◆</p>
        <blockquote className="mt-10 font-display text-3xl italic leading-tight md:text-5xl" style={{ color: "#FFFEF9" }}>
          "We don't sell jewellery. We hand over a piece of your family's
          <span className="not-italic"> story</span> — to be worn,
          remembered, and one day passed on."
        </blockquote>
        <div className="mt-10 label" style={{ color: "rgba(240,224,168,0.65)" }}>— The Pearl House Family · Ranchi</div>
      </div>
    </section>
  );
}
