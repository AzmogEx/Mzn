import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mémoire Image & Sons | Production Vidéo Professionnelle",
    template: "%s | Mémoire Image & Sons",
  },
  description:
    "Production vidéo professionnelle pour institutions (EHPAD), entreprises (Plateaux TV, Streaming) et particuliers (Mariages). Capturer l'Instant, Diffuser l'Expertise, Réveiller la Mémoire.",
  keywords: [
    "production vidéo",
    "EHPAD",
    "ateliers mémoire",
    "plateau TV",
    "streaming",
    "mariage",
    "Gard",
    "Occitanie",
    "Nîmes",
    "captation",
    "live",
  ],
  authors: [{ name: "Mémoire Image & Sons" }],
  creator: "Mémoire Image & Sons",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://memoire-is.fr",
    siteName: "Mémoire Image & Sons",
    title: "Mémoire Image & Sons | Production Vidéo Professionnelle",
    description:
      "Production vidéo professionnelle pour institutions, entreprises et particuliers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mémoire Image & Sons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mémoire Image & Sons",
    description: "Production vidéo professionnelle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-body antialiased`}>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
