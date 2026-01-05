"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 (0)4 66 00 00 00",
    href: "tel:+33466000000",
    description: "Du lundi au vendredi, 9h-18h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@memoire-is.fr",
    href: "mailto:contact@memoire-is.fr",
    description: "Réponse sous 48h",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Nîmes, Gard (30)",
    href: "https://maps.google.com",
    description: "Interventions Occitanie et au-delà",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "7j/7 pour vos événements",
    description: "Nous nous adaptons à votre planning",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-24">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emotion/10 border border-emotion/20 text-emotion text-sm">
            <MessageCircle className="w-4 h-4" />
            Parlons de votre projet
          </span>
          <h1 className="heading-xl">
            Demandez votre <span className="text-gradient-emotion">devis</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez une estimation
            personnalisée sous 48h. Sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <MotionCard
                    glowColor="emotion"
                    interactive={!!info.href}
                    className="p-6"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-emotion/10 border border-emotion/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-emotion" />
                          </div>
                          <div className="flex-grow">
                            <span className="text-xs text-text-muted uppercase tracking-wider">
                              {info.label}
                            </span>
                            <div className="font-heading font-semibold text-white mt-1 flex items-center gap-2">
                              {info.value}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-text-muted mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emotion/10 border border-emotion/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-emotion" />
                        </div>
                        <div>
                          <span className="text-xs text-text-muted uppercase tracking-wider">
                            {info.label}
                          </span>
                          <div className="font-heading font-semibold text-white mt-1">
                            {info.value}
                          </div>
                          <p className="text-sm text-text-muted mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </MotionCard>
                </motion.div>
              );
            })}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MotionCard className="p-0 overflow-hidden h-[200px]">
                <div className="w-full h-full bg-background-secondary flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-8 h-8 text-emotion mx-auto" />
                    <p className="text-sm text-text-muted">
                      Nîmes & Occitanie
                    </p>
                    <p className="text-xs text-text-muted">
                      Déplacements France entière
                    </p>
                  </div>
                </div>
              </MotionCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
