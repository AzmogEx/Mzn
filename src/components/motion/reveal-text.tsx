"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Children, isValidElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------
   Reveal mot par mot, avec overflow-hidden + translate-y.
   Accepte du JSX (ex : <em>) — on splite uniquement les nœuds
   string, pour préserver l'italique typographique sur certains
   mots-clés du slogan.
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

/** Tokenise un nœud React en suite de "mots animables" + JSX préservé. */
function tokenize(node: ReactNode): ReactNode[] {
  const tokens: ReactNode[] = [];
  let key = 0;

  Children.forEach(node, (child) => {
    if (typeof child === "string") {
      const words = child.split(/(\s+)/);
      for (const word of words) {
        if (word.trim().length === 0) {
          tokens.push(word);
        } else {
          tokens.push(<AnimatedWord key={key++}>{word}</AnimatedWord>);
        }
      }
    } else if (isValidElement<{ children?: ReactNode }>(child)) {
      const innerTokens = tokenize(child.props.children);
      tokens.push(
        <span key={key++} className={(child.props as { className?: string }).className}>
          {innerTokens}
        </span>,
      );
    } else if (child !== null && child !== undefined) {
      tokens.push(child);
    }
  });

  return tokens;
}

function AnimatedWord({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block overflow-hidden align-bottom leading-[1.1]">
      <motion.span variants={wordVariants} className="inline-block will-change-transform">
        {children}
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

  const tokens = tokenize(children);
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
      {tokens}
    </MotionTag>
  );
}
