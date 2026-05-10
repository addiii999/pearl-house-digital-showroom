import { DecoLine } from "./DecoLine";
import bridal from "@/assets/jewel-bridal.jpg";
import gold from "@/assets/jewel-gold.jpg";
import polki from "@/assets/jewel-polki.jpg";
import diamond from "@/assets/jewel-diamond.jpg";
import earrings from "@/assets/jewel-earrings.jpg";
import pearl from "@/assets/jewel-pearl.jpg";
import mangal from "@/assets/jewel-mangalsutra.jpg";

type ShowcaseProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  reverse?: boolean;
  image: string;
  accent: "fuchsia" | "turquoise" | "orange";
  bullets: { label: string; text: string }[];
};

const accentMap = {
  fuchsia: { color: "#FF1493", varName: "var(--fuchsia)" },
  turquoise: { color: "#00D9FF", varName: "var(--turquoise)" },
  orange: { color: "#FF6B35", varName: "var(--orange)" },
};

function ShowcaseRow(p: ShowcaseProps) {
  const a = accentMap[p.accent];
  return (
    <section id={p.id} className="relative py-24 md:py-32">
      <div className={`mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 ${p.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div
            className="absolute -inset-4 -z-10"
            style={{ background: `linear-gradient(135deg, ${a.color}22, transparent 60%)` }}
          />
          <div
            className="relative overflow-hidden border-2"
            style={{ borderColor: a.color }}
          >
            <img src={p.image} alt="" width={1024} height={1280} loading="lazy"
              className="aspect-[4/5] w-full object-cover luxe-card" />
            <div className="pointer-events-none absolute inset-3 border border-[color:var(--ivory)]/70" />
            <span className="absolute left-4 top-4 text-[color:var(--ivory)]">◆</span>
            <span className="absolute right-4 bottom-4 text-[color:var(--ivory)]">◆</span>
          </div>
        </div>

        <div>
          <p className="label" style={{ color: a.color }}>◆ {p.eyebrow} ◆</p>
          <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{p.title}</h3>
          <p className="mt-6 font-serif text-xl italic text-charcoal/80">{p.copy}</p>

          <div className="mt-10 grid gap-5">
            {p.bullets.map((b) => (
              <div key={b.label} className="flex gap-4 border-l-2 pl-5" style={{ borderColor: a.color }}>
                <div>
                  <div className="label" style={{ color: a.color }}>{b.label}</div>
                  <div className="mt-1 font-serif text-lg">{b.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-fuchsia">Enquire Now</a>
            <a href="https://wa.me/919334454153" target="_blank" rel="noopener noreferrer" className="btn-turquoise">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BridalShowcase() {
  return (
    <ShowcaseRow
      id="bridal"
      eyebrow="The Bridal Vault"
      accent="fuchsia"
      image={bridal}
      title={<>For the <span className="italic shimmer-vibrant">Once-in-a-Lifetime</span> Day</>}
      copy="Heirloom-grade necklace sets, polki chokers, ruby haar and matha pattis — designed in-house by master karigars and finished to museum standard."
      bullets={[
        { label: "22K BIS Hallmarked", text: "Every gram certified, every piece transparent." },
        { label: "Exchange Assurance", text: "Lifetime exchange on Pearl House jewellery." },
        { label: "Bridal Trial Service", text: "Try complete sets in our private showroom suite." },
      ]}
    />
  );
}

export function GoldShowcase() {
  return (
    <ShowcaseRow
      id="gold"
      reverse
      eyebrow="Eternal Yellow"
      accent="orange"
      image={gold}
      title={<>Gold That <span className="italic">Holds Memory</span></>}
      copy="Daily-wear bangles, temple chains, antique kadas and intricate kundan — the warm permanence of 22K gold, crafted for everyday royalty."
      bullets={[
        { label: "Live Rate Pricing", text: "Daily transparent gold rate — same as Sarafa Bazaar." },
        { label: "Buy-Back Promise", text: "100% gold value protection on every purchase." },
        { label: "Custom Orders", text: "Replicate a family heirloom or design your own." },
      ]}
    />
  );
}

export function DiamondShowcase() {
  return (
    <ShowcaseRow
      id="diamond"
      eyebrow="Brilliant Forever"
      accent="turquoise"
      image={diamond}
      title={<>Solitaires, Quietly <span className="italic shimmer-vibrant">Spectacular</span></>}
      copy="IGI and SGL certified solitaires, modern halo rings, classic studs and bridal diamond sets — luminous, ethically sourced, beautifully cut."
      bullets={[
        { label: "IGI · SGL Certified", text: "Independent grading on every diamond above 0.20ct." },
        { label: "Hallmarked Settings", text: "18K rose, white and yellow gold mounts." },
        { label: "Lifetime Polish", text: "Complimentary cleaning and re-polish, always." },
      ]}
    />
  );
}

/* Premium gallery grid */
const gallery = [
  { img: polki, name: "Aabha Polki Choker", price: "Enquire", badge: "Bridal", accent: "#FF1493" },
  { img: earrings, name: "Tara Drop Solitaires", price: "From ₹84,000", badge: "Diamond", accent: "#00D9FF" },
  { img: pearl, name: "Moti Strand Necklace", price: "From ₹38,500", badge: "Pearl", accent: "#FF6B35" },
  { img: mangal, name: "Bandhan Mangalsutra", price: "From ₹26,900", badge: "Sacred", accent: "#00FF41" },
  { img: gold, name: "Saanjh Bangle Stack", price: "Per gram rate", badge: "Gold", accent: "#FF6B35" },
  { img: diamond, name: "Roshni Solitaire Ring", price: "From ₹1,24,000", badge: "Solitaire", accent: "#00D9FF" },
  { img: bridal, name: "Mehrunisa Ruby Haar", price: "Enquire", badge: "Bridal", accent: "#FF1493" },
  { img: earrings, name: "Niharika Studs", price: "From ₹19,800", badge: "Daily", accent: "#00FF41" },
];

export function GalleryGrid() {
  return (
    <section id="gallery" className="relative py-28 lattice-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label text-fuchsia-deco">◆ Premium Gallery ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Pieces We're <span className="italic shimmer-vibrant">In Love With</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <a key={g.name} href="#contact"
              className="luxe-card group relative block bg-[color:var(--ivory)] border-2"
              style={{ borderColor: g.accent }}
            >
              <div
                className="relative aspect-square overflow-hidden"
                style={{ background: `${g.accent}1a` }}
              >
                <img src={g.img} alt={g.name} loading="lazy" width={1024} height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="label absolute left-3 top-3 px-3 py-1 text-[10px] text-white"
                  style={{ background: g.accent }}
                >
                  {g.badge}
                </span>
              </div>
              <div className="flex items-end justify-between p-5">
                <div>
                  <div className="font-display text-lg leading-tight">{g.name}</div>
                  <div className="mt-1 font-serif text-sm italic text-muted-foreground">{g.price}</div>
                </div>
                <span className="diamond-fuchsia text-sm">◆</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="btn-fuchsia">◆ Request Full Catalogue</a>
        </div>
      </div>
    </section>
  );
}
