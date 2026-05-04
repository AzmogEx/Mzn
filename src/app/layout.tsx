import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { DevChecklist } from "@/components/site/dev-checklist";
import { SITE } from "@/data/site";
import "./globals.css";

const sansDisplay = Inter({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

const serifDisplay = Instrument_Serif({
  variable: "--font-serif-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const monoDisplay = JetBrains_Mono({
  variable: "--font-mono-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Studio de production audiovisuelle premium`,
    template: `%s — ${SITE.name}`,
  },
  description: `Studio de production audiovisuelle haut de gamme à ${SITE.city} depuis ${SITE.foundedYear}. ${SITE.tagline}`,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    locale: "fr_FR",
    type: "website",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sansDisplay.variable} ${serifDisplay.variable} ${monoDisplay.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <DevChecklist />
      </body>
    </html>
  );
}
