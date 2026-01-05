"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ThemeColor = "corporate" | "emotion" | "rose";

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceOffer {
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface ServiceLayoutProps {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroBadge?: string;
  
  // Theme
  themeColor: ThemeColor;
  
  // Features Section
  featuresTitle?: string;
  featuresSubtitle?: string;
  features: ServiceFeature[];
  
  // Offers Section
  offersTitle?: string;
  offersSubtitle?: string;
  offers: ServiceOffer[];
  
  // Additional Content (slot)
  additionalContent?: React.ReactNode;
  
  // Testimonial
  testimonial?: ServiceTestimonial;
  
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

const themeStyles = {
  corporate: {
    gradient: "bg-gradient-corporate",
    text: "text-corporate",
    textLight: "text-corporate-light",
    border: "border-corporate/30",
    bg: "bg-corporate/10",
    bgHover: "hover:bg-corporate/20",
    glow: "shadow-glow-corporate",
    button: "corporate" as const,
  },
  emotion: {
    gradient: "bg-gradient-emotion",
    text: "text-emotion",
    textLight: "text-emotion-light",
    border: "border-emotion/30",
    bg: "bg-emotion/10",
    bgHover: "hover:bg-emotion/20",
    glow: "shadow-glow-emotion",
    button: "emotion" as const,
  },
  rose: {
    gradient: "bg-gradient-mixed",
    text: "text-emotion-rose",
    textLight: "text-emotion-rose",
    border: "border-emotion-rose/30",
    bg: "bg-emotion-rose/10",
    bgHover: "hover:bg-emotion-rose/20",
    glow: "shadow-glow-rose",
    button: "rose" as const,
  },
};

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

export function ServiceLayout({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroBadge,
  themeColor,
  featuresTitle = "Nos Prestations",
  featuresSubtitle = "Ce que nous proposons",
  features,
  offersTitle = "Nos Formules",
  offersSubtitle = "Choisissez l'offre adaptée à vos besoins",
  offers,
  additionalContent,
  testimonial,
  ctaTitle,
  ctaDescription,
  ctaButtonText = "Demander un devis",
  ctaButtonHref = "/contact",
}: ServiceLayoutProps) {
  const theme = themeStyles[themeColor];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-10" />
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 tech-grid z-20 opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-30 container mx-auto px-4 py-20">
          <motion.div
            className="max-w-3xl space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            {heroBadge && (
              <motion.div variants={itemVariants}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm",
                    theme.bg,
                    theme.border,
                    "border",
                    theme.text
                  )}
                >
                  {heroBadge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className={cn("text-sm uppercase tracking-wider", theme.text)}>
                {heroSubtitle}
              </span>
              <h1 className="heading-xl">{heroTitle}</h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="body-lg max-w-2xl">
              {heroDescription}
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button variant={theme.button} size="lg" asChild>
                <Link href={ctaButtonHref}>
                  {ctaButtonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:+33466000000">
                  Nous appeler
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorations */}
        <div className="absolute top-28 right-8 text-white/10 text-xs font-mono">
          + MIS_SERVICE
        </div>
        {themeColor === "corporate" && (
          <div className="absolute bottom-8 left-8 flex items-center gap-2 text-rec text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-rec animate-pulse" />
            BROADCAST READY
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="relative py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-text-muted uppercase tracking-wider">
              {featuresSubtitle}
            </span>
            <h2 className="heading-lg">
              {featuresTitle.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className={cn("", theme.text)}>
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <MotionCard
                    glowColor={themeColor === "corporate" ? "corporate" : themeColor === "rose" ? "rose" : "emotion"}
                    interactive
                    className="p-6 h-full"
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        theme.bg,
                        theme.border,
                        "border"
                      )}
                    >
                      <Icon className={cn("w-6 h-6", theme.text)} />
                    </div>
                    <h3 className="heading-sm mb-2">{feature.title}</h3>
                    <p className="body-sm">{feature.description}</p>
                  </MotionCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Content Slot */}
      {additionalContent && (
        <section className="relative py-24 border-t border-white/10">
          {additionalContent}
        </section>
      )}

      {/* Offers Section */}
      <section className="relative py-24 border-t border-white/10 bg-background-secondary/50">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-text-muted uppercase tracking-wider">
              {offersSubtitle}
            </span>
            <h2 className="heading-lg">{offersTitle}</h2>
          </motion.div>

          {/* Offers Grid */}
          <motion.div
            className={cn(
              "grid gap-6",
              offers.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            )}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {offers.map((offer, index) => (
              <motion.div key={offer.title} variants={itemVariants}>
                <MotionCard
                  glowColor={offer.popular ? (themeColor === "corporate" ? "corporate" : themeColor === "rose" ? "rose" : "emotion") : "none"}
                  className={cn(
                    "p-8 h-full flex flex-col relative",
                    offer.popular && [theme.border, "border-2"]
                  )}
                >
                  {/* Popular Badge */}
                  {offer.popular && (
                    <div
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold",
                        theme.gradient,
                        "text-white"
                      )}
                    >
                      Recommandé
                    </div>
                  )}

                  {/* Offer Content */}
                  <div className="flex-grow">
                    <h3 className="heading-sm mb-2">{offer.title}</h3>
                    <p className="body-sm mb-6">{offer.description}</p>

                    {/* Price */}
                    {offer.price && (
                      <div className="mb-6">
                        <span className={cn("text-3xl font-heading font-bold", theme.text)}>
                          {offer.price}
                        </span>
                      </div>
                    )}

                    {/* Features List */}
                    <ul className="space-y-3">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <ChevronRight className={cn("w-4 h-4 mt-0.5 flex-shrink-0", theme.text)} />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Button
                      variant={offer.popular ? theme.button : "outline"}
                      className="w-full"
                      asChild
                    >
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="relative py-24 border-t border-white/10">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={cn("text-6xl mb-6", theme.text)}>&ldquo;</div>
              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="space-y-1">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-text-muted">
                  {testimonial.role}
                  {testimonial.company && ` — ${testimonial.company}`}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <MotionCard
            glowColor={themeColor === "corporate" ? "corporate" : themeColor === "rose" ? "rose" : "emotion"}
            className="p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="heading-lg">{ctaTitle}</h2>
              <p className="body-lg text-text-secondary">{ctaDescription}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant={theme.button} size="lg" asChild>
                  <Link href={ctaButtonHref}>
                    {ctaButtonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+33466000000">+33 (0)4 66 00 00 00</Link>
                </Button>
              </div>
            </div>
          </MotionCard>
        </div>
      </section>
    </div>
  );
}
