import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Client | Connexion",
  description:
    "Accédez à votre espace client Mémoire Image & Sons. Consultez vos projets, téléchargez vos fichiers et communiquez avec votre équipe.",
};

export default function EspaceClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
