import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[140px] w-full border-b border-border-strong bg-transparent px-0 py-3 font-sans text-base leading-relaxed text-foreground transition-colors duration-300",
          "placeholder:text-foreground-subtle/70",
          "focus:border-gold focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
