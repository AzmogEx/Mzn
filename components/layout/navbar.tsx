"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/premium/MagneticButton";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/institutions", label: "Institutions" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [time, setTime] = useState("");

  const activeIndex = navLinks.findIndex(
    (link) =>
      link.href === pathname ||
      (link.href !== "/" && pathname.startsWith(link.href))
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Paris",
      });
      setTime(t);
    };
    update();
    const i = setInterval(update, 30_000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const idx = hoverIndex ?? (activeIndex >= 0 ? activeIndex : 0);
    const el = itemRefs.current[idx];
    if (!el) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const parent = el.parentElement;
    if (!parent) return;
    const r = el.getBoundingClientRect();
    const pr = parent.getBoundingClientRect();
    setIndicator({ left: r.left - pr.left, width: r.width, opacity: 1 });
  }, [hoverIndex, activeIndex, isScrolled, pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-apple border-b border-[#0A0A0A]/5" : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="group flex items-baseline gap-2">
              <span className="text-2xl font-display font-bold tracking-tight relative">
                <span className="gradient-text-gold">MIS</span>
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#C9A66B] animate-blink-soft" />
              </span>
              <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-[#666] font-medium">
                Mémoire Image &amp; Sons
              </span>
            </Link>

            <div
              className="hidden md:flex relative items-center gap-1 px-2 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-[#0A0A0A]/5"
              onMouseLeave={() => setHoverIndex(null)}
            >
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0A0A0A]"
                animate={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
              {navLinks.map((link, i) => {
                const isActive =
                  (hoverIndex ?? (activeIndex >= 0 ? activeIndex : -1)) === i;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    onMouseEnter={() => setHoverIndex(i)}
                    className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0A0A0A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end leading-tight">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#999]">
                  Nîmes · Occitanie
                </span>
                <span className="text-[11px] font-medium tabular-nums text-[#0A0A0A]">
                  {time || "—"}
                </span>
              </div>
              <Link href="/contact" className="block">
                <MagneticButton variant="gold" className="!py-2.5 !px-5 text-sm">
                  <span>Devis gratuit</span>
                  <ArrowUpRight size={14} />
                </MagneticButton>
              </Link>
            </div>

            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 4 : 0,
                }}
                className="block h-px w-6 bg-current"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -3 : 0,
                }}
                className="block h-px w-6 bg-current"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-white"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(201,166,107,0.4), transparent 55%), radial-gradient(circle at 70% 80%, rgba(229,211,168,0.3), transparent 55%)",
              }}
            />

            <div className="relative h-full flex flex-col justify-center px-8 pt-24">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] mb-6">
                Navigation
              </p>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.2 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-baseline gap-4 text-left text-5xl font-display font-light tracking-tight"
                      >
                        <span className="text-xs tracking-[0.3em] text-[#C9A66B] tabular-nums">
                          0{index + 1}
                        </span>
                        <span className="relative">
                          {link.label}
                          <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C9A66B] group-hover:w-full transition-all duration-500" />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3"
              >
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40">
                  Contact
                </p>
                <a
                  href="mailto:contact@mis-prod.fr"
                  className="text-lg link-underline"
                >
                  contact@mis-prod.fr
                </a>
                <a href="tel:+33000000000" className="text-lg link-underline">
                  +33 (0)0 00 00 00 00
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
