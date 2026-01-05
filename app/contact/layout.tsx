import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Demandez votre Devis",
  description:
    "Demandez un devis personnalisé pour votre projet vidéo. Réponse sous 48h. Institutions, entreprises et particuliers.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
