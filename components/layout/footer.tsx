"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ArrowUpRight, ArrowUp } from "lucide-react";
import Marquee from "@/components/premium/Marquee";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Institutions / EHPAD", href: "/institutions" },
      { name: "Entreprises / Plateaux TV", href: "/entreprises" },
      { name: "Particuliers / Mariages", href: "/particuliers" },
      { name: "Espace client", href: "/espace-client" },
    ],
  },
  {
    title: "Studio",
    links: [
      { name: "Accueil", href: "/" },
      { name: "Contact", href: "/contact" },
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "CGV", href: "/cgv" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "contact@mis-prod.fr", href: "mailto:contact@mis-prod.fr" },
      { name: "+33 (0)0 00 00 00 00", href: "tel:+33000000000" },
      { name: "Nîmes · Occitanie", href: "#" },
      { name: "Confidentialité", href: "/confidentialite" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      <div className="border-y border-white/10 py-10 md:py-14 overflow-hidden">
        <Marquee speed="slow">
          {[
            "Mémoire",
            "·",
            "Image",
            "·",
            "&",
            "·",
            "Sons",
            "·",
            "Studio",
            "·",
            "Nîmes",
            "·",
          ].map((word, i) => (
            <span
              key={i}
              className={`text-5xl md:text-8xl font-display font-bold tracking-tighter ${
                word === "·" ? "text-[#C9A66B]" : "text-white/90"
              } ${i % 4 === 1 ? "italic font-light" : ""}`}
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="mb-8">
              <h3 className="text-5xl font-display font-bold mb-2">
                <span className="gradient-text-gold">MIS</span>
              </h3>
              <p className="text-[#C9A66B] font-medium tracking-wide text-sm">
                Mémoire Image &amp; Sons
              </p>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              Studio premium de photographie et production audiovisuelle.
              Institutions, entreprises, particuliers — taillé sur mesure.
            </p>
            <div className="flex items-center gap-3 text-white/80">
              <span className="w-10 h-10 rounded-full bg-[#C9A66B]/15 flex items-center justify-center">
                <Camera size={16} className="text-[#C9A66B]" />
              </span>
              <div>
                <p className="text-sm font-medium">Studio MIS</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                  Production audiovisuelle
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A66B] font-semibold mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm link-underline"
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C9A66B]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xs text-white/40">
            <span>© {currentYear} MIS — Mémoire Image &amp; Sons</span>
            <span className="hidden md:inline text-white/20">·</span>
            <span>Tous droits réservés</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link
              href="/mentions-legales"
              className="hover:text-[#C9A66B] transition-colors link-underline"
            >
              Mentions légales
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/confidentialite"
              className="hover:text-[#C9A66B] transition-colors link-underline"
            >
              Confidentialité
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/droit-image"
              className="hover:text-[#C9A66B] transition-colors link-underline"
            >
              Droit à l'image
            </Link>
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white/60 hover:text-[#C9A66B] transition-colors"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#C9A66B] group-hover:bg-[#C9A66B] transition-all duration-300">
              <ArrowUp
                size={14}
                className="text-white group-hover:text-[#0A0A0A] transition-colors"
              />
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
