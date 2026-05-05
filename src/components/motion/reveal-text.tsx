"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Children, isValidElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------
   Reveal mot par mot, avec overflow-hidden + translate-y.
   Accepte du JSX (ex : <em>) — chaque mot est extrait avec son
   espace de fin (matérialisé par un nbsp) inclus dans le texte
   du AnimatedWord, pour préserver l'espacement entre inline-blocks
   (sinon collapsé visuellement par le navigateur).
   --------------------------------------------------------------- */

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  /** délai global avant le start de la séquence */
  delay?: number;
  /** stagger entre chaque mot, en secondes */
  stagger?: number;
  /** lance dès le mount (true) ou attend que ça entre dans le viewport (false) */
  immediate?: boolean;
  /** wrapper sémantique : h1, h2, p, span, div… */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

type Word = { text: string; italic: boolean };

const NBSP = "\u00A0";

/** Aplatit un nœud React en suite de "mots". Chaque mot porte son
 *  espace de fin (nbsp) à l'intérieur — c'est cet espace qui sera
 *  rendu visiblement. */
function flatten(node: ReactNode, italic = false): Word[] {
  const words: Word[] = [];

  Children.forEach(node, (child) => {
    if (typeof child === "string") {
      const parts = child.match(/\S+|\s+/g) ?? [];
      for (const part of parts) {
        if (/^\s+$/.test(part)) {
          if (words.length > 0) {
            words[words.length - 1].text += NBSP;
          } else {
            words.push({ text: NBSP, italic });
          }
        } else {
          words.push({ text: part, italic });
        }
      }
    } else if (
      isValidElement<{ children?: ReactNode; className?: string }>(child)
    ) {
      const isItalic =
        italic || /\bitalic\b/.test(child.props.className ?? "");
      words.push(...flatten(child.props.children, isItalic));
    }
  });

  return words;
}

function AnimatedWord({ text, italic }: { text: string; italic: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-bottom leading-[1.1]">
      <motion.span
        variants={wordVariants}
        className={cn(
          "inline-block will-change-transform",
          italic && "italic",
        )}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  immediate = true,
  as: Tag = "span",
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = flatten(children);
  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      className={cn(className)}
      variants={containerVariants}
      custom={{ stagger, delay }}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.3 } })}
    >
      {words.map((w, i) => (
        <AnimatedWord key={i} text={w.text} italic={w.italic} />
      ))}
    </MotionTag>
  );
}
