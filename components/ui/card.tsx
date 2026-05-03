"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type GlowColor = "corporate" | "emotion" | "rose" | "none";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: GlowColor;
  interactive?: boolean;
  crosshairs?: boolean;
  asChild?: boolean;
}

const glowStyles: Record<GlowColor, string> = {
  corporate: "hover:shadow-glow-corporate hover:border-corporate/30",
  emotion: "hover:shadow-glow-emotion hover:border-emotion/30",
  rose: "hover:shadow-glow-rose hover:border-emotion-rose/30",
  none: "",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glowColor = "none", interactive = false, crosshairs = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-[#0A0A0A]/8 bg-white shadow-[0_8px_32px_-8px_rgba(10,10,10,0.06)]",
          crosshairs && "crosshair",
          interactive && "cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#C9A66B]/40 hover:shadow-[0_30px_80px_-20px_rgba(201,166,107,0.25)]",
          glowStyles[glowColor],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

// Motion Card with Framer Motion
interface MotionCardProps {
  glowColor?: GlowColor;
  interactive?: boolean;
  crosshairs?: boolean;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

const MotionCard = React.forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className, glowColor = "none", interactive = false, crosshairs = true, delay = 0, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        whileHover={interactive ? { scale: 1.02, y: -5 } : undefined}
        className={cn(
          "rounded-2xl border border-[#0A0A0A]/8 bg-white shadow-[0_8px_32px_-8px_rgba(10,10,10,0.06)]",
          crosshairs && "crosshair",
          interactive && "cursor-pointer transition-all duration-500 hover:border-[#C9A66B]/40 hover:shadow-[0_30px_80px_-20px_rgba(201,166,107,0.25)]",
          glowStyles[glowColor],
          className
        )}
      >
        {children}
      </motion.div>
    );
  }
);
MotionCard.displayName = "MotionCard";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-heading text-2xl font-semibold text-[#0A0A0A] leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-text-muted", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, MotionCard, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
