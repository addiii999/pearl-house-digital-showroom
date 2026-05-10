import { DecoLine } from "./DecoLine";
import a from "@/assets/jewel-bridal.jpg";
import b from "@/assets/jewel-gold.jpg";
import c from "@/assets/jewel-diamond.jpg";
import d from "@/assets/jewel-polki.jpg";
import e from "@/assets/jewel-pearl.jpg";
import f from "@/assets/jewel-earrings.jpg";

const tiles = [a, b, c, d, e, f];

export function Instagram() {
  return (
    <section id="instagram" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label" style={{ color: "#C9A96E" }}>◆ @pearlhouse.ranchi ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Live From Our <span className="italic shimmer-vibrant">Showroom Floor</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-6">
          {tiles.map((t, i) => (
            <a key={i} href="#" className="group relative block overflow-hidden aspect-square">
              <img src={t} alt="" loading="lazy" width={600} height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {/* gold cinematic overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(16,14,9,0.70) 0%, rgba(201,169,110,0.12) 60%, transparent 100%)" }}
              >
                <span className="label text-[10px]" style={{ color: "#F0E0A8" }}>◆ View on IG</span>
              </div>
              {/* subtle gold border on hover */}
              <div
                className="pointer-events-none absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: "rgba(201,169,110,0.45)" }}
              />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-turquoise">Follow @pearlhouse.ranchi</a>
        </div>
      </div>
    </section>
  );
}
