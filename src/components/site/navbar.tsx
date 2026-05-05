"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { href: "/institutions", label: "Institutions" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/particuliers", label: "Particuliers" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      // Important : on cible UNIQUEMENT les propriétés qui changent au scroll
      // (background, border, backdrop). transition-all entrerait en conflit
      // avec l'animation Motion sur transform/opacity au mount.
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        scrolled
          ? "border-b border-white/[0.08] bg-[rgba(5,5,5,0.7)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-gradient-to-b from-background/55 via-background/25 to-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Logo / wordmark */}
        <Link
          href="/"
          aria-label="MIS — Mémoire Image Son · accueil"
          className="group flex items-center gap-3"
        >
          <span
            className="font-serif text-2xl tracking-[0.18em] text-foreground transition-colors group-hover:text-gold"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
          >
            MIS
          </span>
          <span className="hidden h-3 w-px bg-foreground/30 md:block" />
          <span
            className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/65 md:block"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            Studio · {SITE.city} · {SITE.foundedYear}
          </span>
        </Link>

        {/* Liens centrés */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/85 transition-colors hover:text-foreground"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA contact */}
        <Link
          href="/contact"
          className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full border border-foreground/30 bg-background/20 px-5 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-[color,border-color,background-color] duration-500 hover:border-gold hover:bg-gold/10 hover:text-gold"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          <span className="relative z-10">Brief projet</span>
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </nav>
    </motion.header>
  );
}
