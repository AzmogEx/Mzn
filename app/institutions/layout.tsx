import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutions & EHPAD | Ateliers Mémoire",
  description:
    "Ateliers de stimulation cognitive, documentaires de vie et captation d'événements pour EHPAD et établissements de santé. Financement Culture & Santé et ARS disponible.",
  keywords: [
    "EHPAD",
    "ateliers mémoire",
    "stimulation cognitive",
    "réminiscence",
    "personnes âgées",
    "vidéo thérapeutique",
    "Gard",
    "Occitanie",
  ],
};

export default function InstitutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
