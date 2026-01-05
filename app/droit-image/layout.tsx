import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Droit à l'Image",
  description: "Informations sur le droit à l'image et les autorisations nécessaires - Mémoire Image & Sons.",
};

export default function DroitImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
