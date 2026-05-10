import { DecoLine } from "./DecoLine";

export function Consultation() {
  return (
    <section id="consult" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="label text-fuchsia-deco">◆ Expert Consultation ◆</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Sit With a <span className="italic shimmer-vibrant">Master Jeweller</span>
            </h2>
            <p className="mt-6 font-serif text-xl italic text-charcoal/80">
              Whether it's a complete bridal trousseau or a single solitaire — book a
              private 60-minute consultation with our senior in-house jeweller.
              Chai included. Pressure, never.
            </p>

            <ul className="mt-8 space-y-4 font-serif text-lg">
              {[
                "Complete bridal styling for the full wedding wardrobe",
                "Heirloom redesign — modernise without losing the soul",
                "Diamond grading session with certificates explained",
                "Live gold-rate guidance and investment advice",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="diamond-fuchsia mt-2">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border p-8 md:p-10">
            <h3 className="font-display text-2xl">Book your appointment</h3>
            <p className="mt-2 font-serif italic text-muted-foreground">No obligation. No deposit.</p>

            <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <Field label="Your Name" placeholder="e.g. Anjali Sharma" />
              <Field label="Phone / WhatsApp" placeholder="+91 9XXXX XXXXX" />
              <div>
                <label className="label text-muted-foreground">Interested In</label>
                <select className="mt-2 w-full border-2 border-[color:var(--gold)]/40 bg-transparent px-4 py-3 font-serif text-lg focus:border-fuchsia-deco focus:outline-none">
                  <option>Bridal Collection</option>
                  <option>Gold Jewellery</option>
                  <option>Diamond Jewellery</option>
                  <option>Custom Design</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <Field label="Message (optional)" placeholder="Tell us a little about the occasion…" textarea />
              <button className="btn-fuchsia mt-2 w-full justify-center">◆ Request Appointment</button>
              <a
                href="https://wa.me/919334454153"
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                Or message us on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, textarea }: { label: string; placeholder?: string; textarea?: boolean }) {
  return (
    <div>
      <label className="label text-muted-foreground">{label}</label>
      {textarea ? (
        <textarea rows={4}
          placeholder={placeholder}
          className="mt-2 w-full border-2 border-[color:var(--gold)]/40 bg-transparent px-4 py-3 font-serif text-lg focus:border-fuchsia-deco focus:outline-none"
        />
      ) : (
        <input
          placeholder={placeholder}
          className="mt-2 w-full border-2 border-[color:var(--gold)]/40 bg-transparent px-4 py-3 font-serif text-lg focus:border-fuchsia-deco focus:outline-none"
        />
      )}
    </div>
  );
}

export function VisitContact() {
  return (
    <section id="visit" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center fade-up">
          <p className="label text-fuchsia-deco">◆ Visit Our Showroom ◆</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Step Into <span className="italic shimmer-vibrant">Pearl House</span>
          </h2>
          <DecoLine className="mt-10" />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <InfoCard
            title="Address"
            accent="#FF1493"
            lines={[
              "Shop No. 117, Srilok Complex",
              "Old Hazaribagh Road, Bhaba Nagar",
              "Ranchi, Jharkhand 834001",
            ]}
            cta={{ label: "Get Directions", href: "https://maps.google.com/?q=Srilok+Complex+Old+Hazaribagh+Road+Ranchi" }}
          />
          <InfoCard
            title="Speak With Us"
            accent="#00D9FF"
            lines={[
              "Phone — 093344 54153",
              "WhatsApp — 093344 54153",
              "Mon – Sun · 10:30 AM – 8:30 PM",
            ]}
            cta={{ label: "Call Now", href: "tel:+919334454153" }}
          />
        </div>

        <div className="mt-12 overflow-hidden border-2 border-[color:var(--gold)]/40">
          <iframe
            title="Pearl House Ranchi map"
            className="h-[420px] w-full grayscale-[20%]"
            loading="lazy"
            src="https://www.google.com/maps?q=Srilok+Complex+Old+Hazaribagh+Road+Ranchi&output=embed"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, lines, accent, cta }: { title: string; lines: string[]; accent: string; cta: { label: string; href: string } }) {
  return (
    <div className="luxe-card relative border-2 p-10" style={{ borderColor: accent }}>
      <div className="pointer-events-none absolute inset-3 border" style={{ borderColor: `${accent}40` }} />
      <div className="relative">
        <div className="flex items-center gap-3 label" style={{ color: accent }}>
          <span>◆</span> {title}
        </div>
        <div className="mt-6 space-y-2 font-serif text-xl">
          {lines.map((l) => <div key={l}>{l}</div>)}
        </div>
        <a href={cta.href} target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 label hover:opacity-70 transition-opacity"
          style={{ color: accent }}
        >
          {cta.label} →
        </a>
      </div>
    </div>
  );
}
