import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MIS – Mémoire Image & Sons | Photographie & Audiovisuel',
  description: 'Immortaliser vos moments, sublimer vos émotions. Photographie et production audiovisuelle haut de gamme par Madani Marzuk.',
  keywords: 'photographie, audiovisuel, mariage, corporate, événements, clips, portraits',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-[#FAFAFA] text-[#111111] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}