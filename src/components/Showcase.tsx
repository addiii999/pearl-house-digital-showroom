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
  accent: "gold" | "amber" | "champagne";
  bullets: { label: string; text: string }[];
  dark?: boolean;
};

const accentMap = {
  gold:      { color: "#C9A96E" },
  amber:     { color: "#D4913C" },
  champagne: { color: "#F0E0A8" },
};

function ShowcaseRow(p: ShowcaseProps) {
  const a = accentMap[p.accent];
  const sectionStyle = p.dark
    ? { background: "linear-gradient(160deg, #120F09 0%, #1C1710 60%, #221B12 100%)" }
    : {};

  return (
    <section
      id={p.id}
      className={`relative py-24 md:py-32 ${p.dark ? "dark-section" : ""}`}
      style={sectionStyle}
    >
      {p.dark && <div className="absolute inset-0 lattice-dark opacity-60 pointer-events-none" />}
      <div className={`relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 ${p.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div
            className="absolute -inset-4 -z-10"
            style={{ background: `linear-gradient(135deg, ${a.color}20, transparent 60%)` }}
          />
          <div
            className="relative overflow-hidden border-2 jewel-glow image-vignette"
            style={{ borderColor: a.color }}
          >
            <img src={p.image} alt="" width={1024} height={1280} loading="lazy"
              className="aspect-[4/5] w-full object-cover luxe-card" />
            <div
              className="pointer-events-none absolute inset-3 border"
              style={{ borderColor: p.dark ? "rgba(255,254,249,0.20)" : "rgba(255,254,249,0.70)" }}
            />
            <span className="absolute left-4 top-4" style={{ color: p.dark ? "rgba(255,254,249,0.60)" : "rgba(255,254,249,1)" }}>◆</span>
            <span className="absolute right-4 bottom-4" style={{ color: p.dark ? "rgba(255,254,249,0.60)" : "rgba(255,254,249,1)" }}>◆</span>
          </div>
        </div>

        <div>
          <p className="label" style={{ color: a.color }}>◆ {p.eyebrow} ◆</p>
          <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{p.title}</h3>
          <p
            className="mt-6 font-serif text-xl italic"
            style={{ color: p.dark ? "rgba(255,254,249,0.72)" : "rgba(45,45,45,0.80)" }}
          >
            {p.copy}
          </p>

          <div className="mt-10 grid gap-5">
            {p.bullets.map((b) => (
              <div key={b.label} className="flex gap-4 border-l-2 pl-5" style={{ borderColor: a.color }}>
                <div>
                  <div className="label" style={{ color: a.color }}>{b.label}</div>
                  <div
                    className="mt-1 font-serif text-lg"
                    style={{ color: p.dark ? "rgba(255,254,249,0.80)" : "inherit" }}
                  >
                    {b.text}
                  </div>
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
      dark
      eyebrow="The Bridal Vault"
      accent="gold"
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
      accent="amber"
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
      accent="champagne"
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

/* Premium gallery grid — dark cinematic */
const gallery = [
  { img: polki,    name: "Aabha Polki Choker",     price: "Enquire",         badge: "Bridal",   accent: "#C9A96E" },
  { img: earrings, name: "Tara Drop Solitaires",    price: "From ₹84,000",   badge: "Diamond",  accent: "#F0E0A8" },
  { img: pearl,    name: "Moti Strand Necklace",    price: "From ₹38,500",   badge: "Pearl",    accent: "#D4913C" },
  { img: mangal,   name: "Bandhan Mangalsutra",     price: "From ₹26,900",   badge: "Sacred",   accent: "#B8A060" },
  { img: gold,     name: "Saanjh Bangle Stack",     price: "Per gram rate",  badge: "Gold",     accent: "#D4913C" },
  { img: diamond,  name: "Roshni Solitaire Ring",   price: "From ₹1,24,000", badge: "Solitaire",accent: "#F0E0A8" },
  { img: bridal,   name: "Mehrunisa Ruby Haar",     price: "Enquire",         badge: "Bridal",   accent: "#C9A96E" },
  { img: earrings, name: "Niharika Studs",          price: "From ₹19,800",   badge: "Daily",    accent: "#B8A060" },
];

export function GalleryGrid() {
  return (
    <section
      id="gallery"
      className="relative py-28 dark-section lattice-dark"
      style={{ background: "linear-gradient(180deg, #100E09 0%, #1A1610 50%, #100E09 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label" style={{ color: "#C9A96E" }}>◆ Premium Gallery ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Pieces We're <span className="italic shimmer-vibrant">In Love With</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <a
              key={g.name}
              href="#contact"
              className="luxe-card group relative block border-2"
              style={{
                borderColor: `${g.accent}55`,
                background: "#1C1710",
              }}
            >
              <div
                className="relative aspect-square overflow-hidden"
                style={{ background: `${g.accent}12` }}
              >
                <img src={g.img} alt={g.name} loading="lazy" width={1024} height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span
                  className="label absolute left-3 top-3 px-3 py-1 text-[10px]"
                  style={{ background: g.accent, color: "#100E09" }}
                >
                  {g.badge}
                </span>
                {/* Cinematic hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at center, ${g.accent}18 0%, rgba(10,8,5,0.45) 100%)` }}
                />
              </div>
              <div className="flex items-end justify-between p-5">
                <div>
                  <div className="font-display text-lg leading-tight" style={{ color: "#FFFEF9" }}>{g.name}</div>
                  <div className="mt-1 font-serif text-sm italic" style={{ color: "rgba(240,224,168,0.60)" }}>{g.price}</div>
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
