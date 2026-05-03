import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "corporate";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-[#0A0A0A]/12 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/35 transition-all duration-300 resize-none",
          "focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/25 focus:border-[#C9A66B]/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
