import { HeroSection } from "@/components/site/hero-section";
import { ManifestoSection } from "@/components/site/manifesto-section";
import { StatsSection } from "@/components/site/stats-section";
import { UniversesSection } from "@/components/site/universes-section";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ClientsSection } from "@/components/site/clients-section";
import { EquipmentSection } from "@/components/site/equipment-section";
import { CtaSection } from "@/components/site/cta-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ManifestoSection />
      <StatsSection />
      <UniversesSection />
      <PortfolioSection />
      <ClientsSection />
      <EquipmentSection />
      <CtaSection />
    </main>
  );
}
