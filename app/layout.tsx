import type { Metadata } from "next";
import { Inter, Syne, Montserrat } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import CustomCursor from "@/components/premium/CustomCursor";
import LoadingScreen from "@/components/premium/LoadingScreen";
import ScrollProgress from "@/components/premium/ScrollProgress";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mis-prod.fr"),
  title: {
    default: "Mémoire Image & Sons | Studio Photographie & Production Audiovisuelle",
    template: "%s | Mémoire Image & Sons",
  },
  description:
    "Studio premium de photographie et production audiovisuelle pour institutions (EHPAD), entreprises (Plateaux TV, Streaming) et particuliers (Mariages). Capturer l'instant, sublimer l'émotion.",
  keywords: [
    "production vidéo",
    "photographie",
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
    url: "https://mis-prod.fr",
    siteName: "Mémoire Image & Sons",
    title: "Mémoire Image & Sons | Studio Photographie & Production Audiovisuelle",
    description:
      "Studio premium de photographie et production audiovisuelle. Institutions, entreprises, particuliers.",
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
    description: "Studio photographie & production audiovisuelle premium",
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
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${montserrat.variable} font-body antialiased bg-[#FAFAFA] text-[#0A0A0A] overflow-x-hidden`}
      >
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <div className="noise-fixed" aria-hidden />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
