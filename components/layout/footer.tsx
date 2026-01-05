"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Film,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  services: {
    title: "Nos Services",
    links: [
      { label: "Institutions & EHPAD", href: "/institutions" },
      { label: "Entreprises & TV", href: "/entreprises" },
      { label: "Mariages & Particuliers", href: "/particuliers" },
      { label: "Ateliers Mémoire", href: "/institutions#ateliers" },
    ],
  },
  company: {
    title: "L'Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Notre Équipe", href: "/equipe" },
      { label: "Partenaires", href: "/partenaires" },
      { label: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Informations Légales",
    links: [
      { label: "Mentions Légales", href: "/mentions-legales" },
      { label: "Politique de Confidentialité", href: "/confidentialite" },
      { label: "Conditions Générales", href: "/cgv" },
      { label: "Droit à l'Image", href: "/droit-image" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const partnerLogos = [
  { name: "Région Occitanie", abbr: "OCC" },
  { name: "Gard Tourisme", abbr: "GT" },
  { name: "ARS Occitanie", abbr: "ARS" },
  { name: "Culture & Santé", abbr: "C&S" },
];

export function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-white/10">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Partners Marquee */}
      <div className="relative border-b border-white/10 py-6 overflow-hidden">
        <div className="container mx-auto px-4 mb-4">
          <p className="text-xs text-text-muted uppercase tracking-wider text-center">
            Nos Partenaires & Agréments
          </p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                  {partner.abbr}
                </div>
                <span className="text-sm text-text-muted whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-emotion flex items-center justify-center group-hover:shadow-glow-emotion transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Film className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <span className="font-heading text-xl font-bold text-white">
                  Mémoire
                </span>
                <span className="font-heading text-xl font-light text-text-muted ml-1">
                  Image & Sons
                </span>
              </div>
            </Link>

            <p className="text-text-secondary max-w-sm leading-relaxed">
              Capturer l&apos;Instant, Diffuser l&apos;Expertise, Réveiller la Mémoire.
              Production vidéo professionnelle pour institutions, entreprises et
              particuliers.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+33466000000"
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-emotion group-hover:text-emotion-light" />
                <span>+33 (0)4 66 00 00 00</span>
              </a>
              <a
                href="mailto:contact@memoire-is.fr"
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-emotion group-hover:text-emotion-light" />
                <span>contact@memoire-is.fr</span>
              </a>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin className="w-4 h-4 text-emotion" />
                <span>Nîmes, Gard - Occitanie</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-heading font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
            <p>
              © {new Date().getFullYear()} Mémoire Image & Sons. Tous droits
              réservés.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Disponible pour vos projets
              </span>
              <span className="text-white/30">|</span>
              <span>SIRET: 000 000 000 00000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Crosshairs */}
      <div className="absolute top-4 left-4 text-white/10 text-xs">+</div>
      <div className="absolute top-4 right-4 text-white/10 text-xs">+</div>
      <div className="absolute bottom-4 left-4 text-white/10 text-xs">+</div>
      <div className="absolute bottom-4 right-4 text-white/10 text-xs">+</div>
    </footer>
  );
}
