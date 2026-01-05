"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Film, Building2, Heart, Users, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil", icon: Film },
  { href: "/institutions", label: "Institutions", icon: Building2, theme: "emotion" },
  { href: "/entreprises", label: "Entreprises", icon: Users, theme: "corporate" },
  { href: "/particuliers", label: "Particuliers", icon: Heart, theme: "emotion" },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine theme based on current path
  const getCurrentTheme = () => {
    if (pathname.includes("entreprises")) return "corporate";
    return "emotion";
  };

  const currentTheme = getCurrentTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                  currentTheme === "corporate"
                    ? "bg-gradient-corporate group-hover:shadow-glow-corporate"
                    : "bg-gradient-emotion group-hover:shadow-glow-emotion"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Film className="w-5 h-5 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-heading text-lg font-bold text-white">
                  Mémoire
                </span>
                <span className="font-heading text-lg font-light text-text-muted ml-1">
                  Image & Sons
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2",
                      isActive
                        ? "text-white"
                        : "text-text-muted hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={cn(
                          "absolute inset-0 rounded-lg -z-10",
                          currentTheme === "corporate"
                            ? "bg-corporate/20 border border-corporate/30"
                            : "bg-emotion/20 border border-emotion/30"
                        )}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <Button
                variant={currentTheme === "corporate" ? "corporate" : "emotion"}
                size="sm"
                asChild
                className="hidden sm:flex"
              >
                <Link href="/espace-client">
                  <User className="w-4 h-4" />
                  Espace Client
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background-secondary/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between p-4 rounded-xl transition-all duration-300",
                          isActive
                            ? currentTheme === "corporate"
                              ? "bg-corporate/20 border border-corporate/30 text-white"
                              : "bg-emotion/20 border border-emotion/30 text-white"
                            : "hover:bg-white/5 text-text-secondary"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{link.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Button
                    variant={currentTheme === "corporate" ? "corporate" : "emotion"}
                    size="lg"
                    asChild
                    className="w-full"
                  >
                    <Link href="/espace-client">
                      <User className="w-4 h-4" />
                      Espace Client
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
