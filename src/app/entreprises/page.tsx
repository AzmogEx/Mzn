import type { Metadata } from "next";
import { UniversePageLayout } from "@/components/site/universe-page-layout";
import { UNIVERSES } from "@/data/universes";

const universe = UNIVERSES.entreprises;

export const metadata: Metadata = {
  title: `${universe.shortName} — ${universe.title}`,
  description: universe.intro,
};

export default function EntreprisesPage() {
  return <UniversePageLayout universe={universe} />;
}
