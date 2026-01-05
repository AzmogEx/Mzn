"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Heart,
  ArrowRight,
  Play,
  Sparkles,
  Tv,
  Brain,
  Camera,
  ChevronRight,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Bento Grid Items Data
const bentoItems = [
  {
    id: "institutions",
    title: "Institutions",
    subtitle: "EHPAD & Santé",
    description: "Soigner par l'image & Ateliers Mémoire",
    longDescription:
      "Stimulation cognitive, ateliers réminiscence et documentaires de vie pour les résidents.",
    href: "/institutions",
    icon: Building2,
    secondaryIcon: Brain,
    theme: "emotion" as const,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
    size: "large",
    stats: [
      { label: "EHPAD partenaires", value: "15+" },
      { label: "Ateliers/an", value: "200+" },
    ],
    tags: ["Ateliers Mémoire", "Réminiscence", "Thérapie"],
  },
  {
    id: "entreprises",
    title: "Entreprises",
    subtitle: "Corporate & Broadcast",
    description: "Plateaux TV, Live Streaming & Communication",
    longDescription:
      "Solutions broadcast professionnelles, plateaux TV mobiles et streaming haute qualité.",
    href: "/entreprises",
    icon: Users,
    secondaryIcon: Tv,
    theme: "corporate" as const,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
    size: "large",
    stats: [
      { label: "Events/an", value: "50+" },
      { label: "Qualité", value: "4K+" },
    ],
    tags: ["Plateau TV", "Streaming", "4K"],
  },
  {
    id: "particuliers",
    title: "Particuliers",
    subtitle: "Mariages & Famille",
    description: "Films de Mariage & Récits de Vie",
    longDescription:
      "Captation d'émotions, biographies vidéo et héritage familial pour les générations futures.",
    href: "/particuliers",
    icon: Heart,
    secondaryIcon: Camera,
    theme: "rose" as const,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
    size: "large",
    stats: [
      { label: "Mariages/an", value: "30+" },
      { label: "Satisfaction", value: "100%" },
    ],
    tags: ["Mariage", "Biographie", "Héritage"],
  },
];

// Features data
const features = [
  {
    icon: Zap,
    title: "Réactivité",
    description: "Devis en 48h, équipe mobilisable rapidement",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "Droit à l'image et données sécurisées (RGPD)",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "10 ans d'expérience en captation professionnelle",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-10" />
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&auto=format&fit=crop&q=80"
            alt="Production vidéo"
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 tech-grid z-20 opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-4 pt-32 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emotion/10 border border-emotion/20 text-emotion text-sm">
                <Sparkles className="w-4 h-4" />
                Production Vidéo Professionnelle
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="heading-xl"
            >
              Capturer l&apos;Instant,{" "}
              <span className="text-gradient-corporate">Diffuser l&apos;Expertise</span>,{" "}
              <span className="text-gradient-emotion">Réveiller la Mémoire</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="body-lg max-w-2xl mx-auto"
            >
              Du mariage à l'EHPAD, au plateau TV jusqu'a à la conférence
              internationale : une équipe, trois univers, une seule promesse de
              qualité.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button variant="emotion" size="lg" asChild>
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">
                  <Play className="w-4 h-4" />
                  Découvrir nos services
                </Link>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="pt-12"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight className="w-6 h-6 text-text-muted mx-auto rotate-90" />
            </motion.div>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-24 left-8 text-white/10 text-xs font-mono">
          + MIS_HERO_01
        </div>
        <div className="absolute bottom-8 right-8 text-white/10 text-xs font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rec animate-pulse" />
          LIVE
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-text-muted uppercase tracking-wider">
              Nos Univers
            </span>
            <h2 className="heading-lg">
              Trois expertises, une <span className="text-gradient-emotion">vision</span>
            </h2>
            <p className="body-md max-w-2xl mx-auto">
              Chaque projet est unique. Découvrez l&apos;univers qui correspond à vos
              besoins et laissez-nous créer ensemble.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bentoItems.map((item, index) => {
              const Icon = item.icon;
              const SecondaryIcon = item.secondaryIcon;
              const glowClass =
                item.theme === "corporate"
                  ? "group-hover:shadow-glow-corporate"
                  : item.theme === "rose"
                  ? "group-hover:shadow-glow-rose"
                  : "group-hover:shadow-glow-emotion";
              const borderClass =
                item.theme === "corporate"
                  ? "group-hover:border-corporate/40"
                  : item.theme === "rose"
                  ? "group-hover:border-emotion-rose/40"
                  : "group-hover:border-emotion/40";
              const accentColor =
                item.theme === "corporate"
                  ? "text-corporate"
                  : item.theme === "rose"
                  ? "text-emotion-rose"
                  : "text-emotion";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.href} className="block group h-full">
                    <div
                      className={cn(
                        "relative h-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden transition-all duration-500",
                        glowClass,
                        borderClass,
                        "crosshair"
                      )}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col min-h-[420px]">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={cn(
                              "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                              item.theme === "corporate"
                                ? "bg-corporate/20 border border-corporate/30 group-hover:bg-corporate/30"
                                : item.theme === "rose"
                                ? "bg-emotion-rose/20 border border-emotion-rose/30 group-hover:bg-emotion-rose/30"
                                : "bg-emotion/20 border border-emotion/30 group-hover:bg-emotion/30"
                            )}
                          >
                            <Icon className={cn("w-6 h-6", accentColor)} />
                          </div>
                          <SecondaryIcon
                            className={cn(
                              "w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity",
                              accentColor
                            )}
                          />
                        </div>

                        {/* Title & Description */}
                        <div className="flex-grow space-y-4">
                          <div>
                            <span className={cn("text-xs uppercase tracking-wider", accentColor)}>
                              {item.subtitle}
                            </span>
                            <h3 className="heading-md mt-1 group-hover:text-white transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-lg text-text-secondary font-medium">
                            {item.description}
                          </p>
                          <p className="body-sm">
                            {item.longDescription}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                          {item.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className={cn("text-2xl font-heading font-bold", accentColor)}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-text-muted">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 pt-6 text-sm font-medium text-white group-hover:gap-3 transition-all">
                          Découvrir
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* REC Indicator for Live */}
                      {item.id === "entreprises" && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-rec font-mono">
                          <span className="w-2 h-2 rounded-full bg-rec animate-pulse" />
                          LIVE
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 border-t border-white/10">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emotion/10 border border-emotion/20 flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7 text-emotion" />
                  </div>
                  <h3 className="heading-sm">{feature.title}</h3>
                  <p className="body-md text-text-muted max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <MotionCard
            glowColor="emotion"
            className="p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 tech-grid opacity-10" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="heading-lg">
                Prêt à donner vie à votre{" "}
                <span className="text-gradient-emotion">projet</span> ?
              </h2>
              <p className="body-lg text-text-secondary">
                Contactez-nous pour un devis personnalisé. Notre équipe vous
                répond sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="emotion" size="lg" asChild>
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+33466000000">
                    +33 (0)4 66 00 00 00
                  </Link>
                </Button>
              </div>
            </div>
          </MotionCard>
        </div>
      </section>
    </div>
  );
}
