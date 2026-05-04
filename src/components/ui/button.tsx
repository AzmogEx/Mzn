import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-full border border-foreground bg-foreground text-background hover:border-gold hover:bg-gold",
        secondary:
          "rounded-full border border-border-strong bg-foreground/[0.02] text-foreground backdrop-blur-md hover:border-gold hover:bg-gold/[0.08] hover:text-gold",
        ghost: "text-foreground-muted hover:text-foreground",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-7",
        sm: "h-11 px-5",
        lg: "h-16 px-9",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
