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
          <p className="label text-fuchsia-deco">◆ @pearlhouse.ranchi ◆</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="label text-white">◆ View on IG</span>
              </div>
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
