import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprises | Plateaux TV & Streaming",
  description:
    "Solutions broadcast professionnelles : plateaux TV mobiles, streaming multi-plateformes, captation multicaméras 4K pour vos événements corporate.",
  keywords: [
    "plateau TV",
    "streaming",
    "broadcast",
    "captation entreprise",
    "webinaire",
    "conférence",
    "4K",
    "multicaméras",
  ],
};

export default function EntreprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
