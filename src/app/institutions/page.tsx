import type { Metadata } from "next";
import { UniversePageLayout } from "@/components/site/universe-page-layout";
import { UNIVERSES } from "@/data/universes";

const universe = UNIVERSES.institutions;

export const metadata: Metadata = {
  title: `${universe.shortName} — ${universe.title}`,
  description: universe.intro,
};

export default function InstitutionsPage() {
  return <UniversePageLayout universe={universe} />;
}
