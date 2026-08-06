import { AgeGroupSection } from "@/components/AgeGroupSection";
import { FestiveFeature } from "@/components/FestiveFeature";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { MandalaDivider } from "@/components/Motifs";
import { ShopExperience } from "@/components/ShopExperience";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <MandalaDivider label="Curated for every celebration" />
      <ShopExperience />
      <AgeGroupSection />
      <FestiveFeature />
      <TrustBadges />
      <Footer />
    </main>
  );
}
