export function Footer() {
  return (
    <footer
      className="pt-20"
      style={{
        background: "linear-gradient(180deg, #0F0E09 0%, #100E09 60%, #0A0907 100%)",
        color: "#FFFEF9",
      }}
    >
      {/* subtle ambient glow */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          left: 0, right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.40), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="diamond-fuchsia">◆</span>
              <div className="font-display text-2xl font-bold">
                Pearl <span className="italic shimmer-vibrant">House</span>
              </div>
              <span className="diamond-turquoise">◆</span>
            </div>
            <p className="label mt-2 text-[10px]" style={{ color: "rgba(240,224,168,0.50)" }}>पर्ल हाउस · Since 1978</p>
            <p className="mt-6 font-serif italic" style={{ color: "rgba(255,254,249,0.68)" }}>
              A trusted name in Ranchi for fine bridal, gold and diamond jewellery — three generations and counting.
            </p>
          </div>

          <FooterCol title="Collections" links={["Bridal Vault", "Gold Jewellery", "Diamond Solitaires", "Mangalsutras", "Pearl Edit", "Custom Design"]} />
          <FooterCol title="Care" links={["Lifetime Exchange", "Buy-Back Promise", "BIS Hallmark", "Diamond Certification", "Repair & Polish", "Bridal Suite"]} />

          <div>
            <div className="label" style={{ color: "rgba(201,169,110,0.65)" }}>Contact</div>
            <div className="mt-5 space-y-2 font-serif" style={{ color: "rgba(255,254,249,0.80)" }}>
              <div>Shop 117, Srilok Complex</div>
              <div>Old Hazaribagh Road, Ranchi</div>
              <div>Jharkhand 834001</div>
              <div className="pt-2">+91 93344 54153</div>
              <div style={{ color: "rgba(255,254,249,0.55)" }}>Mon – Sun · 10:30 AM – 8:30 PM</div>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { l: "IG", c: "#C9A96E",  href: "#" },
                { l: "FB", c: "#F0E0A8",  href: "#" },
                { l: "WA", c: "#25D366",  href: "https://wa.me/919334454153" },
                { l: "GO", c: "#D4913C",  href: "https://maps.google.com/?q=Pearl+House+Ranchi" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border text-xs label transition"
                  style={{ borderColor: s.c, color: s.c }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = `${s.c}18`)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* deco separator */}
        <div className="deco-line mt-16" />

        <div className="flex flex-col items-center justify-between gap-3 py-8 md:flex-row">
          <div className="label" style={{ color: "rgba(201,169,110,0.50)" }}>
            © {new Date().getFullYear()} Pearl House Ranchi · All Rights Reserved
          </div>
          <div className="label" style={{ color: "rgba(201,169,110,0.50)" }}>
            ◆ Crafted with love for Jharkhand's families ◆
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="label" style={{ color: "rgba(201,169,110,0.65)" }}>{title}</div>
      <ul className="mt-5 space-y-2 font-serif">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#contact"
              className="transition"
              style={{ color: "rgba(255,254,249,0.65)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#C9A96E";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,254,249,0.65)";
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
