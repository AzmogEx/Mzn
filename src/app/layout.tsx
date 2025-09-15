import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "MIS - Mémoire Image Sons | Production Audiovisuelle Professionnelle",
  description: "Spécialisés dans la production audiovisuelle, nous immortalisons vos événements les plus précieux avec un savoir-faire professionnel et une approche créative unique.",
  keywords: "production audiovisuelle, mariage, événement, corporate, vidéo, photo, drone, streaming",
  authors: [{ name: "MIS - Mémoire Image Sons" }],
  openGraph: {
    title: "MIS - Mémoire Image Sons",
    description: "Production audiovisuelle professionnelle pour tous vos événements",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIS - Mémoire Image Sons",
    description: "Production audiovisuelle professionnelle pour tous vos événements",
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
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
