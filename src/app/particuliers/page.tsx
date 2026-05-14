import type { Metadata } from "next";
import { UniversePageLayout } from "@/components/site/universe-page-layout";
import { PricingSection } from "@/components/site/pricing-section";
import { UNIVERSES } from "@/data/universes";

const universe = UNIVERSES.particuliers;

export const metadata: Metadata = {
  title: `${universe.shortName} — ${universe.title}`,
  description: universe.intro,
};

export default function ParticuliersPage() {
  return (
    <UniversePageLayout
      universe={universe}
      afterFormulas={<PricingSection />}
    />
  );
}
