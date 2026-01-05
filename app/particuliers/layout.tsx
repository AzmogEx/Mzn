import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mariages & Particuliers | Films de Mariage",
  description:
    "Vidéaste de mariage en Occitanie. Films cinématographiques, biographies vidéo et récits de vie. Capturer l'émotion, transmettre l'héritage.",
  keywords: [
    "vidéaste mariage",
    "film mariage",
    "biographie vidéo",
    "Occitanie",
    "Gard",
    "Nîmes",
    "wedding film",
    "récit de vie",
  ],
};

export default function ParticuliersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
