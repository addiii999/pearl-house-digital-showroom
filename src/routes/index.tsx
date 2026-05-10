import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { BridalShowcase, GoldShowcase, DiamondShowcase, GalleryGrid } from "@/components/Showcase";
import { Reviews } from "@/components/Reviews";
import { WhyChoose, HeritageQuote } from "@/components/WhyAndQuote";
import { Consultation, VisitContact } from "@/components/ConsultAndContact";
import { Instagram } from "@/components/Instagram";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl House Ranchi — Luxury Bridal, Gold & Diamond Jewellery" },
      {
        name: "description",
        content:
          "Pearl House (पर्ल हाउस) — three generations of trusted bridal, gold and certified diamond jewellery in Ranchi. Visit Srilok Complex, Old Hazaribagh Road or book a private consultation.",
      },
      { property: "og:title", content: "Pearl House Ranchi — Luxury Jewellery, Crafted to be Inherited" },
      { property: "og:description", content: "Bridal sets, 22K hallmarked gold, IGI-certified diamonds. Lifetime exchange. Trusted by Ranchi families since 1978." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="contact">
        <Hero />
        <Collections />
        <BridalShowcase />
        <GoldShowcase />
        <DiamondShowcase />
        <GalleryGrid />
        <Reviews />
        <WhyChoose />
        <HeritageQuote />
        <Consultation />
        <Instagram />
        <VisitContact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
