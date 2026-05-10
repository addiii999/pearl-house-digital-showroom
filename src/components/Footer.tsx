export function Footer() {
  return (
    <footer style={{ background: "#2D2D2D", color: "#FFFEF9" }} className="pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="diamond-fuchsia">◆</span>
              <div className="font-display text-2xl font-bold">
                Pearl <span className="italic text-fuchsia-deco">House</span>
              </div>
              <span className="diamond-turquoise">◆</span>
            </div>
            <p className="label mt-2 opacity-70 text-[10px]">पर्ल हाउस · Since 1978</p>
            <p className="mt-6 font-serif italic opacity-80">
              A trusted name in Ranchi for fine bridal, gold and diamond jewellery — three generations and counting.
            </p>
          </div>

          <FooterCol title="Collections" links={["Bridal Vault", "Gold Jewellery", "Diamond Solitaires", "Mangalsutras", "Pearl Edit", "Custom Design"]} />
          <FooterCol title="Care" links={["Lifetime Exchange", "Buy-Back Promise", "BIS Hallmark", "Diamond Certification", "Repair & Polish", "Bridal Suite"]} />

          <div>
            <div className="label opacity-70">Contact</div>
            <div className="mt-5 space-y-2 font-serif">
              <div>Shop 117, Srilok Complex</div>
              <div>Old Hazaribagh Road, Ranchi</div>
              <div>Jharkhand 834001</div>
              <div className="pt-2">+91 93344 54153</div>
              <div className="opacity-80">Mon – Sun · 10:30 AM – 8:30 PM</div>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { l: "IG", c: "#FF1493", href: "#" },
                { l: "FB", c: "#00D9FF", href: "#" },
                { l: "WA", c: "#00FF41", href: "https://wa.me/919334454153" },
                { l: "GO", c: "#FF6B35", href: "https://maps.google.com/?q=Pearl+House+Ranchi" },
              ].map((s) => (
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border text-xs label hover:bg-white/5 transition"
                  style={{ borderColor: s.c, color: s.c }}
                >{s.l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="deco-line mt-16" />

        <div className="flex flex-col items-center justify-between gap-3 py-8 md:flex-row">
          <div className="label opacity-70">© {new Date().getFullYear()} Pearl House Ranchi · All Rights Reserved</div>
          <div className="label opacity-70">◆ Crafted with love for Jharkhand's families ◆</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="label opacity-70">{title}</div>
      <ul className="mt-5 space-y-2 font-serif">
        {links.map((l) => (
          <li key={l}><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-fuchsia-deco transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
