import { DecoLine } from "./DecoLine";

const reasons = [
  { t: "Three Generation Trust", d: "A name Ranchi families have whispered to one another since 1978.", c: "#FF1493" },
  { t: "BIS Hallmark, Always", d: "Every gold piece independently certified. No exceptions, no fine print.", c: "#FF6B35" },
  { t: "Certified Diamonds Only", d: "IGI / SGL graded with the certificate handed to you on purchase.", c: "#00D9FF" },
  { t: "Lifetime Exchange", d: "Trade in any Pearl House piece for full value, any time, any year.", c: "#00FF41" },
  { t: "In-House Karigars", d: "Designs crafted on-site — bring a sketch, a story, or a memory.", c: "#FF1493" },
  { t: "Private Bridal Suite", d: "An hour of quiet, chai, and a master jeweller for the bride and her family.", c: "#FF6B35" },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label text-fuchsia-deco">◆ Why Pearl House ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Six Reasons Families <span className="italic">Return.</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.t} className="luxe-card relative bg-[color:var(--ivory)] p-8 border-2 border-[color:var(--gold)]/30">
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
    <section className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "linear-gradient(135deg, #FF1493, #00D9FF 55%, #FF6B35)" }}
    >
      <div className="absolute inset-x-8 inset-y-12 border-2 border-[color:var(--ivory)]/80 md:inset-x-16 md:inset-y-20" />
      <span className="diamond-fuchsia absolute left-10 top-14 text-xl text-[color:var(--ivory)] md:left-20 md:top-24">◆</span>
      <span className="absolute right-10 top-14 text-xl text-[color:var(--ivory)] md:right-20 md:top-24">◆</span>
      <span className="absolute left-10 bottom-14 text-xl text-[color:var(--ivory)] md:left-20 md:bottom-24">◆</span>
      <span className="absolute right-10 bottom-14 text-xl text-[color:var(--ivory)] md:right-20 md:bottom-24">◆</span>

      <div className="relative mx-auto max-w-4xl px-8 text-center text-[color:var(--ivory)]">
        <p className="label opacity-90">◆ A Word from the House ◆</p>
        <blockquote className="mt-10 font-display text-3xl italic leading-tight md:text-5xl">
          "We don't sell jewellery. We hand over a piece of your family's
          <span className="not-italic"> story</span> — to be worn,
          remembered, and one day passed on."
        </blockquote>
        <div className="mt-10 label opacity-90">— The Pearl House Family · Ranchi</div>
      </div>
    </section>
  );
}
