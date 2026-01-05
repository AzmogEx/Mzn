"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Film,
  FolderOpen,
  Download,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionCard, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Fonctionnalités de l'espace client
const features = [
  {
    icon: FolderOpen,
    title: "Vos Projets",
    description: "Accédez à l'historique complet de vos projets et collaborations.",
  },
  {
    icon: Download,
    title: "Téléchargements",
    description: "Récupérez vos rushes, films finaux et documents en haute qualité.",
  },
  {
    icon: MessageSquare,
    title: "Échanges",
    description: "Communiquez directement avec votre chef de projet dédié.",
  },
  {
    icon: Calendar,
    title: "Planning",
    description: "Consultez les dates de vos prochaines captations et livraisons.",
  },
];

export default function EspaceClientPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation de connexion
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Ici, redirection vers le dashboard client
  };

  return (
    <div className="relative min-h-screen pt-24">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-emotion flex items-center justify-center mx-auto mb-6 shadow-glow-emotion">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="heading-xl">Espace Client</h1>
            <p className="body-lg max-w-xl mx-auto">
              Connectez-vous pour accéder à vos projets, télécharger vos fichiers
              et communiquer avec notre équipe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MotionCard glowColor="emotion" className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="heading-sm">Connexion</h2>
                    <p className="body-sm">
                      Entrez vos identifiants pour accéder à votre espace.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Adresse email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.fr"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">
                        <Lock className="w-4 h-4 inline mr-2" />
                        Mot de passe
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          required
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                          aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-white/20"
                        />
                        <span className="text-sm text-text-muted">
                          Se souvenir de moi
                        </span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-emotion hover:underline"
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>

                    <Button
                      type="submit"
                      variant="emotion"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      Se connecter
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-text-muted">
                        Pas encore client ?
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-text-muted mb-4">
                      L&apos;accès client est créé automatiquement lors de votre
                      premier projet avec nous.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Démarrer un projet
                      </Link>
                    </Button>
                  </div>
                </div>
              </MotionCard>
            </motion.div>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="heading-sm mb-6">
                Votre espace dédié pour :
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="p-4 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-emotion/10 border border-emotion/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-emotion" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-text-muted">
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Security Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-success/10 border border-success/20"
              >
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-success">
                    Connexion sécurisée
                  </span>
                  <p className="text-text-muted mt-1">
                    Vos données sont chiffrées et stockées de manière sécurisée
                    conformément au RGPD.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
