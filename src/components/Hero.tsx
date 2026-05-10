import heroBride from "@/assets/hero-bride.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36 dark-section"
      style={{ background: "linear-gradient(175deg, #0F0E09 0%, #1A1610 55%, #201A12 100%)" }}
    >
      {/* sunburst */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2">
        <div className="sunburst" />
      </div>
      <div className="absolute inset-0 -z-10 lattice-dark opacity-70" />

      {/* Corner SVG ornaments */}
      <CornerOrnament className="left-6 top-24"             color="#C9A96E" />
      <CornerOrnament className="right-6 top-24 rotate-90"  color="#F0E0A8" />
      <CornerOrnament className="left-6 bottom-6 -rotate-90" color="#D4913C" />
      <CornerOrnament className="right-6 bottom-6 rotate-180" color="#B8A060" />

      <div className="mx-auto max-w-6xl px-6 text-center fade-up">
        <div className="label mb-6 flex items-center justify-center gap-3" style={{ color: "rgba(240,224,168,0.65)" }}>
          <span className="diamond-fuchsia">◆</span>
          Established Jewellers · Ranchi, Jharkhand
          <span className="diamond-turquoise">◆</span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          Heirlooms of <span className="italic shimmer-vibrant">Light</span>,
          <br />
          Crafted for the <span className="italic">Modern Bride.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic md:text-2xl" style={{ color: "rgba(255,254,249,0.72)" }}>
          For three generations, Pearl House has draped the families of Ranchi in gold,
          diamond and timeless polki — pieces that carry your story long after the wedding lights fade.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a href="#collections" className="btn-fuchsia">◆ Explore Collection</a>
          <a href="#contact" className="btn-turquoise">Book Appointment</a>
          <a
            href="https://wa.me/919334454153?text=Hello%20Pearl%20House%2C%20I%27d%20like%20a%20consultation."
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp Consultation
          </a>
        </div>

        {/* Hero image plate */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <div
            className="absolute -inset-3 -z-10"
            style={{
              background: "linear-gradient(135deg, #C9A96E, #F0E0A8, #D4913C, #B8A060)",
              borderRadius: 4,
              padding: 2,
            }}
          />
          <div className="relative overflow-hidden image-vignette jewel-glow">
            <img
              src={heroBride}
              alt="Indian bride wearing intricate Pearl House gold and emerald bridal jewellery"
              width={1920}
              height={1080}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-4 border-2" style={{ borderColor: "rgba(201,169,110,0.50)" }} />
            <span className="diamond-fuchsia absolute left-6 top-6 text-lg">◆</span>
            <span className="diamond-turquoise absolute right-6 top-6 text-lg">◆</span>
            <span className="diamond-orange absolute left-6 bottom-6 text-lg">◆</span>
            <span className="diamond-lime absolute right-6 bottom-6 text-lg">◆</span>
          </div>
          <div className="label mt-6" style={{ color: "rgba(240,224,168,0.65)" }}>
            ◆ The Mehrunisa Bridal Set · 22K Gold with Uncut Polki ◆
          </div>
        </div>

        {/* Quick trust strip */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["3", "Generations of Trust"],
            ["4.3★", "Google Rating · 96+"],
            ["916", "BIS Hallmarked Gold"],
            ["100%", "Certified Diamonds"],
          ].map(([k, v]) => (
            <div key={v} className="border-y py-5" style={{ borderColor: "rgba(201,169,110,0.30)" }}>
              <div className="font-display text-3xl font-bold" style={{ color: "#C9A96E" }}>{k}</div>
              <div className="label mt-2" style={{ color: "rgba(240,224,168,0.60)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CornerOrnament({ className = "", color }: { className?: string; color: string }) {
  return (
    <svg
      className={`absolute hidden h-16 w-16 md:block ${className}`}
      viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="1.5"
    >
      <path d="M2 2 L62 2 L62 18" />
      <path d="M2 2 L2 62 L18 62" />
      <circle cx="2" cy="2" r="2.5" fill={color} />
      <path d="M10 10 L20 20" />
    </svg>
  );
}
