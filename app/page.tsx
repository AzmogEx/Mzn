"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Heart,
  Play,
  Sparkles,
  Tv,
  Users,
} from "lucide-react";
import RevealText from "@/components/premium/RevealText";
import MagneticButton from "@/components/premium/MagneticButton";
import GradientOrbs from "@/components/premium/GradientOrbs";
import Marquee from "@/components/premium/Marquee";
import TiltCard from "@/components/premium/TiltCard";

const universes = [
  {
    id: "institutions",
    title: "Institutions",
    subtitle: "EHPAD & Santé",
    description:
      "Soigner par l'image, ateliers mémoire et documentaires de vie pour les résidents.",
    href: "/institutions",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&auto=format&fit=crop&q=80",
    tags: ["Ateliers Mémoire", "Réminiscence", "Documentaire"],
    number: "01",
  },
  {
    id: "entreprises",
    title: "Entreprises",
    subtitle: "Corporate & Broadcast",
    description:
      "Plateaux TV mobiles, live streaming 4K et communication audiovisuelle haut de gamme.",
    href: "/entreprises",
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80",
    tags: ["Plateau TV", "Streaming", "4K"],
    number: "02",
  },
  {
    id: "particuliers",
    title: "Particuliers",
    subtitle: "Mariages & Famille",
    description:
      "Films de mariage, biographies vidéo et héritage familial pour les générations futures.",
    href: "/particuliers",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
    tags: ["Mariage", "Biographie", "Héritage"],
    number: "03",
  },
];

const stats = [
  { number: "500+", label: "Projets réalisés", detail: "Depuis 2017" },
  { number: "08", label: "Années d'expérience", detail: "Studio indépendant" },
  { number: "100%", label: "Satisfaction client", detail: "4.9 ★ moyenne" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [scrollTarget, setScrollTarget] = useState<
    React.RefObject<HTMLElement> | undefined
  >(undefined);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setScrollTarget(heroRef);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.15]);

  if (!mounted) return null;

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAFAFA] noise-overlay"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F4EFE6] to-[#EDE3CF]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.07] mix-blend-multiply"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <GradientOrbs variant="hero" />
        </motion.div>

        <div className="absolute top-32 left-6 lg:left-12 z-10 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-[#C9A66B]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] font-medium">
              Studio · Est. 2017
            </span>
          </div>
        </div>

        <div className="absolute top-32 right-6 lg:right-12 z-10 hidden md:flex flex-col items-end gap-2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#666]">
            Nîmes — Occitanie
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#999] tabular-nums">
            43.8367° N
          </span>
        </div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 md:pt-48 pb-20 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A66B] opacity-60 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A66B]" />
            </span>
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#C9A66B] font-medium">
              Photographie · Audiovisuel
            </span>
          </motion.div>

          <h1 className="font-display font-bold leading-[1.02] tracking-tight text-[clamp(2.5rem,7.5vw,7.5rem)] mb-10 pb-2">
            <RevealText
              text="Capturer"
              as="span"
              splitBy="word"
              stagger={0.05}
              duration={0.9}
              className="block pb-1"
            />
            <RevealText
              text="l'instant,"
              as="span"
              splitBy="word"
              stagger={0.05}
              delay={0.15}
              duration={0.9}
              className="block text-[#C9A66B] pb-1"
            />
            <RevealText
              text="diffuser"
              as="span"
              splitBy="word"
              stagger={0.05}
              delay={0.3}
              duration={0.9}
              className="block pb-1"
            />
            <RevealText
              text="l'expertise."
              as="span"
              splitBy="word"
              stagger={0.05}
              delay={0.45}
              duration={1}
              className="block italic font-light pb-2"
            />
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="md:col-span-5 text-base md:text-lg text-[#3a3a3a] leading-relaxed max-w-xl"
            >
              <span className="text-[#C9A66B] font-semibold">MIS</span> – Mémoire Image &amp; Sons.
              Studio de photographie et production audiovisuelle pour institutions, entreprises et
              particuliers. Trois univers, une exigence : l'exception.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.15 }}
              className="md:col-span-7 flex flex-wrap gap-4 md:justify-end items-center"
            >
              <Link href="/contact" className="block">
                <MagneticButton variant="dark">
                  <span>Demander un devis</span>
                  <ArrowUpRight size={18} />
                </MagneticButton>
              </Link>

              <MagneticButton variant="ghost" onClick={() => scrollTo("#univers")}>
                <span className="relative w-9 h-9 rounded-full border border-current flex items-center justify-center">
                  <Play size={12} className="ml-0.5 fill-current" />
                  <span className="absolute inset-0 rounded-full border border-[#C9A66B] animate-pulse-ring" />
                </span>
                <span>Découvrir nos univers</span>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mt-20 md:mt-28 max-w-4xl border-t border-[#0A0A0A]/10 pt-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              >
                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay: 1.6 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-3xl md:text-5xl font-display font-bold tracking-tight"
                  >
                    {stat.number}
                  </motion.h3>
                </div>
                <p className="text-xs md:text-sm text-[#0A0A0A] font-medium mt-2">
                  {stat.label}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#999] mt-1">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => scrollTo("#univers")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-28 right-6 md:right-12 z-10 flex flex-col items-center gap-3"
          aria-label="Défiler"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#666] [writing-mode:vertical-rl] rotate-180">
            Défiler
          </span>
          <span className="relative block w-px h-16 bg-[#0A0A0A]/15 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-[#C9A66B] animate-scroll-line" />
          </span>
          <ArrowDownRight size={16} className="text-[#C9A66B]" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="relative z-10 border-t border-b border-[#0A0A0A]/10 py-6 bg-white/40 backdrop-blur-sm"
        >
          <Marquee speed="slow">
            {[
              "Plateaux TV",
              "·",
              "Mariages",
              "·",
              "Streaming live",
              "·",
              "Ateliers mémoire",
              "·",
              "Documentaires",
              "·",
              "Captation 4K",
              "·",
              "Direction artistique",
              "·",
            ].map((word, i) => (
              <span
                key={i}
                className={`text-3xl md:text-5xl font-display font-light tracking-tight ${
                  word === "·" ? "text-[#C9A66B]" : "text-[#0A0A0A]/80"
                } ${i % 4 === 1 ? "italic" : ""}`}
              >
                {word}
              </span>
            ))}
          </Marquee>
        </motion.div>
      </section>

      {/* UNIVERS — 3 segments métier */}
      <section id="univers" className="relative py-32 bg-white overflow-hidden">
        <GradientOrbs variant="subtle" className="opacity-60" />

        <div className="absolute -top-20 left-0 right-0 select-none pointer-events-none whitespace-nowrap overflow-hidden">
          <span className="font-display font-bold text-[14vw] leading-none text-[#0A0A0A]/[0.025] tracking-tight italic">
            Univers · Univers ·
          </span>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 flex md:flex-col gap-2 items-start"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] font-semibold">
                ① Univers
              </span>
              <span className="hidden md:block w-12 h-px bg-[#C9A66B] mt-2" />
            </motion.div>

            <div className="md:col-span-7">
              <RevealText
                text="Trois univers, une exigence."
                as="h2"
                splitBy="word"
                stagger={0.07}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight"
                goldWords={["univers,"]}
                italicWords={["exigence."]}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-3 text-[#666] leading-relaxed"
            >
              Trois pôles métier distincts, une même obsession : raconter votre histoire avec
              précision technique et sensibilité artistique.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {universes.map((univ, index) => {
              const Icon = univ.icon;
              return (
                <motion.div
                  key={univ.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  data-cursor="image"
                >
                  <Link href={univ.href} className="block">
                    <TiltCard className="group relative aspect-[4/5] rounded-3xl overflow-hidden">
                      <motion.div
                        initial={{ scale: 1.2, filter: "brightness(0.6)" }}
                        whileInView={{ scale: 1, filter: "brightness(1)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <img
                          src={univ.image}
                          alt={univ.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                          style={{
                            transitionDuration: "1.4s",
                            transitionTimingFunction:
                              "cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/65 to-[#0A0A0A]/15" />
                      </motion.div>

                      <div className="absolute top-5 left-5 z-10 flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 tabular-nums">
                          / {univ.number}
                        </span>
                      </div>

                      <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#C9A66B] group-hover:scale-110">
                        <ArrowUpRight
                          size={16}
                          className="text-white transition-transform group-hover:rotate-45"
                        />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon size={14} className="text-[#C9A66B]" />
                          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A66B] font-semibold">
                            {univ.subtitle}
                          </span>
                        </div>
                        <div className="overflow-hidden mb-3">
                          <motion.h3
                            initial={{ y: "110%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + index * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
                          >
                            {univ.title}
                          </motion.h3>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          {univ.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {univ.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase rounded-full bg-white/10 backdrop-blur-md text-white/85 border border-white/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.6 + index * 0.05,
                          }}
                          className="mt-5 h-px w-full bg-gradient-to-r from-[#C9A66B] via-[#E5D3A8]/40 to-transparent origin-left"
                        />
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANIFESTE / À propos rapide */}
      <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">
        <GradientOrbs variant="subtle" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] font-semibold">
              ② Manifeste
            </span>
            <span className="w-12 h-px bg-[#C9A66B]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <RevealText
                text={"L'art de capturer\nl'émotion."}
                as="h2"
                splitBy="word"
                stagger={0.07}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-10"
                goldWords={["capturer"]}
                italicWords={["l'émotion."]}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-[#C9A66B]" />
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A66B] font-semibold">
                      Studio
                    </p>
                  </div>
                  <h3 className="font-display font-semibold text-xl">MIS</h3>
                  <p className="text-xs text-[#999] mt-1">
                    Photographie · Réalisation
                  </p>
                </div>

                <div className="md:col-span-9 space-y-5 text-base md:text-lg text-[#3a3a3a] leading-relaxed">
                  <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-[#C9A66B] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                    Mémoire Image &amp; Sons est un studio indépendant qui mêle rigueur technique
                    et sensibilité artistique. Plus de 8 ans d'expérience à transformer chaque
                    instant en œuvre durable.
                  </p>
                  <p>
                    Trois univers : EHPAD &amp; institutions, broadcast d'entreprise, et
                    particuliers. Une seule promesse : l'exception.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-1 gap-px bg-[#0A0A0A]/10 rounded-3xl overflow-hidden border border-[#0A0A0A]/10">
                {[
                  {
                    icon: Sparkles,
                    title: "Direction artistique",
                    description:
                      "Une vision unique pour chaque projet, du brief à la livraison.",
                  },
                  {
                    icon: Users,
                    title: "Accompagnement",
                    description:
                      "Suivi personnalisé et conseils de A à Z pour vos productions.",
                  },
                  {
                    icon: Tv,
                    title: "Équipement broadcast",
                    description:
                      "Caméras 4K, plateaux mobiles, streaming professionnel.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="group relative bg-white p-6 md:p-7 transition-all duration-500"
                    >
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A66B]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] group-hover:bg-[#C9A66B] flex items-center justify-center flex-shrink-0 transition-all duration-500">
                          <Icon
                            className="text-[#C9A66B] group-hover:text-white transition-colors duration-500"
                            size={20}
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-lg mb-1.5 text-[#0A0A0A] group-hover:text-[#C9A66B] transition-colors duration-500">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#666] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 bg-[#0A0A0A] text-white overflow-hidden">
        <GradientOrbs variant="dark" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] font-semibold mb-4">
                Prochaine étape
              </p>
              <RevealText
                text="Donnons vie à votre projet."
                as="h2"
                splitBy="word"
                stagger={0.06}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight"
                goldWords={["vie"]}
                italicWords={["projet."]}
              />
            </div>
            <div className="md:col-span-4 flex md:justify-end items-end">
              <Link href="/contact" className="block">
                <MagneticButton variant="gold">
                  <span>Démarrer un projet</span>
                  <ArrowUpRight size={18} />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
